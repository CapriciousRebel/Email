from django.db import models

# Create your models here.


# class User(models.Model):
#    name = models.CharField(max_length=128)
#    email_id = models.EmailField()
#    password = models.CharField(max_length=256)


class Email(models.Model):
    # name = models.ForeignKey(
    #    'User',
    #    default=2,
    #    on_delete=models.CASCADE)
    sender_name = models.CharField(max_length=520)
    subject = models.TextField(blank=True)
    body = models.TextField(blank=True)
