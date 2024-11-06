from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'due_date', 'user']
        read_only_fields = ['user']  


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
    
        def create(self, validated_data):
            user = User(**validated_data)
            user.set_password(validated_data['password']) 
            user.save()
            return user
