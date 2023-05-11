# in this file you can add all tables and their columns

import uuid
from django.db import models


class Places(models.Model):
    placeid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    latitude = models.FloatField(max_length=10)
    longitude = models.FloatField(max_length=10)

    def __str__(self):
        return self.name
