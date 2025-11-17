"""
Django settings for agriai project.
"""

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-h*luq!&*5(ukfj$f2@t7t&5+sou8a4@3ulik$44u9!pk&5l+^#'

DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# -------------------- Installed Apps --------------------
INSTALLED_APPS = [
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework.authtoken',
    'api',
]

# -------------------- Middleware --------------------
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be top for CORS
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'agriai.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'agriai.wsgi.application'

# -------------------- Database --------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# -------------------- Password Validators --------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]

AUTHENTICATION_BACKENDS = [
    'api.auth_backend.EmailBackend',
    'django.contrib.auth.backends.ModelBackend',
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# -------------------- CORS --------------------
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
CORS_ALLOW_CREDENTIALS = True

# -------------------- SESSION & CSRF --------------------
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SECURE = False        # False for localhost
SESSION_COOKIE_SAMESITE = 'Lax'

CSRF_COOKIE_HTTPONLY = False
CSRF_COOKIE_SECURE = False           # False for localhost
CSRF_COOKIE_SAMESITE = 'Lax'

# Optional: allow CSRF cookie on API-only routes
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
]

# -------------------- REST Framework --------------------
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',  # Needed for CSRF + React
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',  # Default: auth required
    ],
}

# -------------------- Additional Notes --------------------
# 1. Make sure your React axios calls have `withCredentials: true`.
# 2. Keep CSRF endpoint `/api/get-csrf/` in `agriai/urls.py`.
# 3. This setup allows TokenAuthentication OR SessionAuthentication for login.
