from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


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
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    # POST request
    def post(self, request, *args, **kwargs):
        # pass data from browser into serializer, and create a user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            # return user data
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # return the token back as headers to tell frontend who am I
            "token": AuthToken.objects.create(user)[1]
        })


# Get user API
class UserAPI(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    permission_classes = [
        # Will need a token to return the user associated with that token
        permissions.IsAuthenticated,
    ]

    def get_object(self):
        return self.request.user
