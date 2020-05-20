from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer


# Registration API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # POST request
    def post(self, request, *args, **kwargs):
        # pass data from browser into serializer, and create a user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            # return user data
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # return the token back as headers to tell frontend who am I
            "token": AuthToken.objects.create(user)[1]
        })

# Login API

# Get user API
