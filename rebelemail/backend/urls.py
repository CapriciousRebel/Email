from rest_framework import routers
from .api import EmailViewSet


router = routers.DefaultRouter()
router.register('api/email', EmailViewSet, 'email')

urlpatterns = router.urls
