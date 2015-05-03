from os import path
from ConfigParser import RawConfigParser


def get_config(cfile, section, item):
    thisdir = path.dirname(path.dirname(__file__))
    cfgfile = path.join(thisdir, cfile)
    parser = RawConfigParser()
    parser.read(cfgfile)
    cfg = parser.get('api_keys', 'imgur')
    return cfg