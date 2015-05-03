from django.conf.urls import patterns, include, url
# from django.contrib import admin
from imapp import views as imapp_views

urlpatterns = patterns('',
                       url(r'^$', imapp_views.search_input,
                           name='search_screen'),)
