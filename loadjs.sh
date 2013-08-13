#!/bin/sh
# Copyright (c) 2013 Philippe Charrière aka @k33g_org
#
# All rights reserved. No warranty, explicit or implicit, provided.
#

pulldown "https://raw.github.com/amdjs/underscore/master/underscore-min.js" -o js/vendors
pulldown "https://raw.github.com/amdjs/backbone/master/backbone-min.js" -o js/vendors
pulldown jquery -o js/vendors
pulldown require.js -o js/vendors
pulldown require-text -o js/vendors

pulldown "https://raw.github.com/twbs/bootstrap/3.0.0-wip/dist/css/bootstrap.css" -o bootstrap3/css
pulldown "https://raw.github.com/twbs/bootstrap/3.0.0-wip/dist/js/bootstrap.min.js" -o bootstrap3/js



