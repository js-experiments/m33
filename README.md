M33
===

Minimalistic Backbone BoilerPlate (with RequireJS)

##Why ?

Sometimes, i need to create a Single Page Application very quickly, and i need something very light (Sorry Bower and Yeoman you're too fat for me). So, i've created an other (again!) Backbone Boilerplate "manually" and i use the beautifully simple **Pulldown** [https://github.com/jackfranklin/pulldown](https://github.com/jackfranklin/pulldown) to load and update my javascript libraries.

>> M33 weighs 331 KB

##Components

- Backbone (amd version)
- Underscore (amd version)
- jQuery
- Require.js and text plugin
- and Bootstrap 3

##Install

    git clone --q --depth 0 git@github.com:k33g/m33.git <your web app directory>

##Update javascript libraries

First you need to install **Pulldown** (and nodejs) : `pm install -g pulldown`, then :

    cd <your web app directory>
    ./loadjs.sh #or loadjs.cmd under windows

##How to test it ?

###OSX, Linux

    cd <your web app directory>
    python -m SimpleHTTPServer 8080

Then, open [http://localhost:8080](http://localhost:8080)

###OSX, Linux, Windows

First, install **http-server** : `npm install http-server -g`, then :

    http-server -p 8080

And, open [http://localhost:8080](http://localhost:8080)

##License

M33 is available under the terms of the [MIT-License](http://en.wikipedia.org/wiki/MIT_License#License_terms).

Copyright 2013, Philippe Charrière
