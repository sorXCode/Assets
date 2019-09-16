from .models import Assets
from .serializers import OwnSerializer
from rest_framework import generics

class AssetListView(generics.ListCreateAPIView):
    queryset = Assets.objects.all()
    serializer_class = OwnSerializer

class AssetDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assets.objects.all()
    serializer_class = OwnSerializer