#!/bin/sh
# Copyright (c) 2013 Philippe Charrière aka @k33g_org
#
# All rights reserved. No warranty, explicit or implicit, provided.
#

pulldown "https://raw.github.com/amdjs/underscore/master/underscore-min.js" -o js/vendors
pulldown "https://raw.github.com/amdjs/backbone/master/backbone-min.js" -o js/vendors
pulldown jquery -o js/vendors
pulldown require.js -o js/vendors
#pulldown require-text -o js/vendors

pulldown "https://raw.github.com/requirejs/text/master/text.js" -o js/vendors

pulldown "https://raw.github.com/twbs/bootstrap/3.0.0-wip/dist/css/bootstrap.css" -o bootstrap3/css
pulldown "https://raw.github.com/twbs/bootstrap/3.0.0-wip/dist/js/bootstrap.min.js" -o bootstrap3/js

pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap-theme.css" -o bootstrap3/css
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap-theme.min.css" -o bootstrap3/css
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap.css" -o bootstrap3/css
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap.min.css" -o bootstrap3/css

pulldown "https://raw.github.com/twbs/bootstrap/master/dist/js/bootstrap.js" -o bootstrap3/js
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/js/bootstrap.min.js" -o bootstrap3/js

pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.eot" -o bootstrap3/fonts
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.svg" -o bootstrap3/fonts
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.ttf" -o bootstrap3/fonts
pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.woff" -o bootstrap3/fonts



