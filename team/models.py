from django.db import models

# Create your models here.

class Team(models.Model):
    info = models.TextField()

    def __str__(self):
        return self.info
    
class Team_mate(models.Model):
    profile_pic = models.ImageField(upload_to="media/pictures",  default="default.png")
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.last_name}, {self.first_name} - {self.position}'