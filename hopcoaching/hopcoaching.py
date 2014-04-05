#!/usr/bin/python
# coding=utf-8
import cgi
import traceback

from os import path
from bottle import route, view, static_file, request, get, post, response, redirect, run, error
from smtplib import SMTP
from email.mime.text import MIMEText

PROJECT_PATH = path.dirname(path.dirname(path.abspath(__file__)))

@route('/')
@view('index.html')
def index():
    title = "Coaching emploi Lyon et reconversion professionnelle"
    context = {
        'title': title,
        'activetab': 'profile',
    }
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

@route('/sitemap.xml')
def server_static():
    return static_file('sitemap.xml', root=path.join(PROJECT_PATH, 'static'))

sender = "Hop Coaching <contact@hop-coaching.com>"
recipient = sender


def message(fields):
    msg = MIMEText("""\
Formulaire de contact rempli à partir de http://hop-coaching.com/

Nom: %(name)s
Email: %(email)s
Message: %(message)s
A connu Hop Coaching par: %(known)s
""" % fields)
    msg['Subject'] = 'Formulaire de contact rempli à partir de http://hop-coaching.com/'
    msg['From'] = sender
    msg['To'] = recipient
    return msg

@post('/contact')
def contact():

    try:
        name = request.forms.name
        msg = message(request.forms)

        s = SMTP('localhost')
        s.sendmail(from_addr=sender, to_addrs=[recipient], msg=msg.as_string())
        s.quit()

        thanks = "Merci pour le message, %s!" % cgi.escape(name)
    except Exception:
        traceback.print_exc()
        response.status = 500
        return "Désolé, le message n'a pu être envoyé."
    return "SEND"

@get('/contact')
def contact():
    redirect("/")

@error(404)
def error404(error):
    response.set_header('location', '/')
    response.status = 303

if __name__ == '__main__':
    run(host='localhost', port=8181, debug=True)

