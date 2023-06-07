from rest_framework import generics
from .models import Geo
from .serializers import GeoSerializer

class GeoListCreate(generics.ListCreateAPIView):
    queryset = Geo.objects.all()
    serializer_class = GeoSerializer