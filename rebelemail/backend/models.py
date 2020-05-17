from django.db import models

# Create your models here.

class Email(models.Model):
    sender_name = models.CharField(max_length = 512)
    subject = models.TextField(blank=True)
    body = models.TextField(blank=True)

