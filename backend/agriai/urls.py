from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse

# CSRF endpoint to set csrftoken cookie for React
@ensure_csrf_cookie
def get_csrf(request):
    return JsonResponse({'csrf': 'ok'})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get-csrf/', get_csrf),  # CSRF endpoint
    path('api/', include('api.urls')),  # Include your app URLs
]
