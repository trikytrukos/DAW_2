from django.db import models

# Create your models here.

class Familia (models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
    
class Ciclo (models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()
    familia = models.ForeignKey(Familia, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre