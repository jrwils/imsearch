import requests
from get_config import get_config


class ImgurVideoSearch(object):
    def __init__(self, sort_by):
        self.api_url = 'https://api.imgur.com/3/gallery/search/{}/'.format(sort_by)
        self.imgur_key = get_config('imlib.cfg', 'api_keys', 'imgur')
        self.headers = {'Authorization': 'Client-ID ' + self.imgur_key}

    def search(self, srch_str):
        srch_params = {'q_all': srch_str,
                       'q_type': 'anigif'}
        r = requests.get(self.api_url,
                         headers=self.headers,
                         params=srch_params)
        r_json = r.json()
        return r_json
