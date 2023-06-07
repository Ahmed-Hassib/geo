from django.db import models

class Geo(models.Model):
    placeid = models.BigAutoField(primary_key=True, serialize=True, unique=True, null=False)
    name = models.CharField(max_length=100)
    latitude = models.FloatField(default=0)
    longitude = models.FloatField(default=0)
    
    def __str__(self):
      return self.name