call pulldown "https://raw.github.com/amdjs/underscore/master/underscore-min.js" -o js/vendors
call pulldown "https://raw.github.com/amdjs/backbone/master/backbone-min.js" -o js/vendors
call pulldown jquery -o js/vendors
call pulldown require.js -o js/vendors
call pulldown require-text -o js/vendors

call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap-theme.css" -o bootstrap3/css
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap-theme.min.css" -o bootstrap3/css
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap.css" -o bootstrap3/css
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/css/bootstrap.min.css" -o bootstrap3/css

call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/js/bootstrap.js" -o bootstrap3/js
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/js/bootstrap.min.js" -o bootstrap3/js

call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.eot" -o bootstrap3/fonts
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.svg" -o bootstrap3/fonts
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.ttf" -o bootstrap3/fonts
call pulldown "https://raw.github.com/twbs/bootstrap/master/dist/fonts/glyphicons-halflings-regular.woff" -o bootstrap3/fonts



