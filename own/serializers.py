from rest_framework import serializers
from .models import Assets

class OwnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assets
        fields = '__all__'