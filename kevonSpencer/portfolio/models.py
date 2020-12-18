from django.db import models


class Artwork(models.Model):
    name = models.CharField(max_length=100)
    pictureUrl = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    pub_date = models.DateTimeField('date published')


