from django.urls import path
from . import views

urlpatterns = [
    # Authentication
    path('auth/login/', views.user_login, name='login'),
    path('auth/signup/', views.user_signup, name='signup'),
    path('auth/logout/', views.user_logout, name='logout'),
    path('auth/user/', views.get_current_user, name='current-user'),

    # Predictions
    path('predictions/', views.predict_price, name='predict-price'),
    path('predictions/history/', views.get_prediction_history, name='prediction-history'),
    path('predictions/factors/<str:crop>/', views.get_influencing_factors, name='factors'),

    # Market data
    path('market/weather/<str:location>/', views.get_weather, name='weather'),
    path('market/health/', views.get_market_health, name='market-health'),
    path('market/regional-prices/<str:crop>/', views.get_regional_prices, name='regional-prices'),
    path('market/crops/', views.get_available_crops, name='crops'),
    path('market/regions/', views.get_available_regions, name='regions'),
]
