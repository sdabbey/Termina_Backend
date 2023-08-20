from django.db import models

# Create your models here.
class Newsroom_news(models.Model):
    image = models.ImageField(upload_to="media/News_pics", default="default.png")