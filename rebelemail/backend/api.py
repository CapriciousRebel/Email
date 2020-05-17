from rest_framework import viewsets, permissions
from backend.models import Email
from .serializers import EmailSerializer


class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = EmailSerializer