from rest_framework import serializers
from .models import Geo

class GeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geo
        fields = ['name', 'latitude', 'longitude']