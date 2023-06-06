from django.db import models

# Create your models here.
class GeoLocation(models.Model):
  name = models.CharField(max_length=200)
  latitude = models.FloatField(default=0)
  langtude = models.FloatField(default=0)