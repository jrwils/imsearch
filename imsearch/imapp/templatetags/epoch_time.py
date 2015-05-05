from django import template
from time import localtime, strftime

register = template.Library()


@register.filter()
def epoch_time(seconds):
    d_time = localtime(float(seconds))
    f_time = strftime('%a, %b %d %Y %I:%M:%S %p', d_time)
    return f_time
