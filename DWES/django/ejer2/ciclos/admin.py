from django.contrib import admin

# Register your models here.

from .models import Familia, Ciclo

admin.site.register(Familia)
admin.site.register(Ciclo)