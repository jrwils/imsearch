from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from imapp.forms import SearchForm
from imlib.imgursearch import ImgurVideoSearch


def search_input(request):
    search_form = SearchForm()
    return render(request, 'search.html', {'search_form': search_form})


def search_results(request):
    if request.method == 'POST':
        search_string = request.POST['search_query']
        iv_search = ImgurVideoSearch()
        iv_results = iv_search.search(search_string)
        video_data = iv_results.get('data')
        num_videos = len(video_data)
        return render(request, 'results.html', {'video_data': video_data,
                                                'num_videos': num_videos})
    return HttpResponseRedirect(reverse('search_screen'))
