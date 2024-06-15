from django.shortcuts import render

from django.views import generic

from .models import Familia

class IndexView(generic.ListView):
    model = Familia
    template_name = 'ciclos/index.html'
    context_object_name = 'familias'

    
class DetailView(generic.DetailView):
    model = Familia
    template_name = 'ciclos/detail.html'
    context_object_name = 'familia' 