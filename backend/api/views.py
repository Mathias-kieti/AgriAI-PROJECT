from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# ============================================
# AUTHENTICATION VIEWS
# ============================================

@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        user = authenticate(username=email, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'name': f"{user.first_name} {user.last_name}",
                },
                'message': 'Login successful'
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_signup(request):
    name = request.data.get('name', '')
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        if User.objects.filter(username=email).exists():
            return Response({'error': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        first_name, last_name = (name.split(' ', 1) + [""])[:2]
        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        token = Token.objects.create(user=user)
        return Response({
            'token': token.key,
            'user': {'id': user.id, 'email': user.email, 'name': f"{user.first_name} {user.last_name}"},
            'message': 'Account created successfully'
        }, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    try:
        if hasattr(request.user, 'auth_token'):
            request.user.auth_token.delete()
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    user = request.user
    return Response({
        'id': user.id,
        'email': user.email,
        'name': f"{user.first_name} {user.last_name}",
    })

# ============================================
# PREDICTION VIEWS
# ============================================

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def predict_price(request):
    crop = request.data.get('crop')
    region = request.data.get('region')
    date = request.data.get('date')
    return Response({
        'price': 1480,
        'unit': 'per 93kg bag',
        'currency': 'KES',
        'confidence': 87,
        'change': '+12%',
        'change_text': 'from last month',
        'crop': crop,
        'region': region,
        'date': date,
        'chart_data': [60, 70, 65, 80, 85, 90, 95, 100],
    }, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_prediction_history(request):
    return Response({
        'predictions': [
            {'id': 1, 'crop': 'Maize', 'region': 'Eldoret', 'predicted_price': 1480,
             'date': '2025-11-19', 'created_at': '2025-11-11'}
        ]
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_influencing_factors(request, crop):
    return Response({
        'crop': crop,
        'factors': [
            {'name': 'Rainfall', 'value': 45},
            {'name': 'Past Price', 'value': 30},
            {'name': 'Supply', 'value': 15},
            {'name': 'Seasonality', 'value': 10},
        ]
    })

# ============================================
# MARKET DATA VIEWS
# ============================================

@api_view(['GET'])
@permission_classes([AllowAny])
def get_weather(request, location):
    return Response({
        'location': location,
        'temperature': '28°C',
        'rainfall': '12mm',
        'humidity': '65%',
        'conditions': 'Sunny'
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_market_health(request):
    return Response({
        'sentiment': 'Stable',
        'inflation_risk': 'Moderate',
        'supply_level': 'Normal',
        'demand': 'High',
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_regional_prices(request, crop):
    return Response({
        'crop': crop,
        'regions': [
            {'region': 'Nairobi', 'price': 3800, 'currency': 'KES'},
            {'region': 'Kisumu', 'price': 3200, 'currency': 'KES'},
            {'region': 'Mombasa', 'price': 4100, 'currency': 'KES'},
            {'region': 'Eldoret', 'price': 1480, 'currency': 'KES'},
        ]
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_available_crops(request):
    return Response({'crops': ['Maize', 'Rice', 'Wheat', 'Barley', 'Beans', 'Sorghum']})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_available_regions(request):
    return Response({'regions': ['Eldoret', 'Nairobi', 'Kisumu', 'Mombasa', 'Nakuru', 'Kitale']})
