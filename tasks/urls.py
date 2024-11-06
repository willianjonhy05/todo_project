# urls.py do seu aplicativo
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, RegisterView


router = DefaultRouter()

router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)), 
    path('register/', RegisterView.as_view(), name='register'),

]
