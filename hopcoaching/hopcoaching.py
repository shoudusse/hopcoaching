#!/usr/bin/python

from os import path
from bottle import route, view, static_file

PROJECT_PATH = path.dirname(path.dirname(path.abspath(__file__)))

@route('/')
@view('index.html')
def index():
    context = {}
    return context

@route('/static/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static'))

@route('/css/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static/css'))

@route('/images/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static/images'))

@route('/js/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static/js'))

@route('/portfolio/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static/portfolio'))

@route('/fonts/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root=path.join(PROJECT_PATH, 'static/fonts'))

@route('/favicon.ico')
def server_static():
    return static_file('favicon.ico', root=path.join(PROJECT_PATH, 'static/images'))

@route('/robots.txt')
def server_static():
    return static_file('robots.txt', root=path.join(PROJECT_PATH, 'static'))
