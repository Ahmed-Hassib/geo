from django.urls import path
from .views import GeoListCreate


urlpatterns = [
    path('api/places/', GeoListCreate.as_view(), name='geo-list-create')
]