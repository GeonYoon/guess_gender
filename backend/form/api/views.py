from django.contrib.auth import authenticate, get_user_model
from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from .permissions import AnonPermissionOnly

jwt_payload_handler             = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler              = api_settings.JWT_ENCODE_HANDLER
jwt_response_payload_handler    = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER


User = get_user_model()


class FormAPIView(APIView):
    #authentication_classes      = []
    permission_classes          = []
    def post(self, request, *args, **kwargs):
        data = request.data
        about1 = data.get("about1");
        about2 = data.get("about2");

        if about1 == about2:
            return Response({"gender" : "Server Female"}, status=200) 
        return Response({"gender" : "Server Male"}, status=200)
