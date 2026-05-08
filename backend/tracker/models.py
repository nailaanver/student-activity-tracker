from django.db import models

# Create your models here.
class Activity(models.Model):
    name = models.CharField(max_length=100)
    activity = models.CharField(max_length=200)
    hours = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.activity}"
    