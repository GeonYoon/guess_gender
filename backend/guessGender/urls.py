from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings

from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token # accounts app


# app_name = 'api-user'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include(('accounts.api.urls','api-auth'))),
    path('form/', include(('form.api.urls','api-form'))),
    path('', include('rest_framework.urls')),
]
