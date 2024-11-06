from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics
from .serializers import UserSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # Filtra as tarefas do usuário autenticado
        return self.queryset.filter(user=self.request.user)
    

class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer

