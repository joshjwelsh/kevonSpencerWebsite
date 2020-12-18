from django.shortcuts import render
from .models import Artwork

def index(request):
    artwork_list = Artwork.objects.all()
    context = {'artwork_list': artwork_list}
    return render(request, 'portfolio/index.html', context)
