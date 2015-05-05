from django import forms


class SearchForm(forms.Form):
    sort_choices = [('time', 'Time'),
                    ('viral', 'Viral'),
                    ('top', 'Top')]

    search_query = forms.CharField(max_length=50, label="Search")
    sort_by = forms.ChoiceField(choices=sort_choices,
                                widget=forms.RadioSelect())
