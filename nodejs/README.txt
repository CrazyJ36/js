This Method runs app in browser

Example nodejs package

-install nodejs (with npm) from webpage

type in console:
-npm init

enter custom data..
entry point should be the same as filename.js with code.
this command makes a 'package.json' file which is customizable.
after init, you must use npm install <pkg> to the same directory to have a package dependency added to package.json, before the app can use the package.

-Install express (web framework) packages. Or use require('http').
-to install only in app directory:
cmd: npm install express --save
-or to install express globally on your system for other packages as well:
cmd: npm install -g express

Code called filename.js:
--------
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
---------

-run filename.js with:
node filename.js

this starts a webpage server at http://localhost:3000/ in this case, where you can view the working app code.
