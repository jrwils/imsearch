from django.shortcuts import render
from imapp.forms import SearchForm


def search_input(request):
    search_form = SearchForm()
    return render(request, {'search_form': search_form})
