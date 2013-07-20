import sys, os, bottle

sys.path = ['/var/www/hop-coaching.com/web/hopcoaching/hopcoaching'] + sys.path
os.chdir(os.path.dirname(__file__))

import hopcoaching # This loads your application

application = bottle.default_app()

bottle.debug(False)
