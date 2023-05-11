from django.urls import path, include
from . import views

urlpatterns = [
    path('places/', views.PlacesList.as_view(), name='places-list-create'),
    path('places/<int:pk>/', views.PlaceDetails.as_view(),
         name='places-place-detail'),
]
