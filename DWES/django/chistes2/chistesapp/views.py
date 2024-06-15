from django.shortcuts import render

from django.views import generic
from .models import Chiste

# Create your views here.

class index(generic.ListView):
    model = Chiste
    template_name = 'chistesapp/index.html'
    context_object_name = 'chistes'