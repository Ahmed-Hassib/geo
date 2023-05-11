from rest_framework import generics
from .models import Places
from .serializers import PlacesSerializer


class PlacesList(generics.ListCreateAPIView):
    serializer_class = PlacesSerializer

    def get_queryset(self):
        queryset = Places.objects.all()
        name = self.request.query_params.get('name')
        if name is not None:
            queryset = queryset.filter(name=name)
        return queryset


class PlaceDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlacesSerializer
    queryset = Places.objects.all()
