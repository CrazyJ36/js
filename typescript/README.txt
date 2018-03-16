Install:
-install node.js from website
-during install, make sure npm is checked and installed
-cmd.exe: npm install -g typescript

Example Typescript app (this):
-new file named helloworld.ts:
----------
function helloworld() {
    return "Hello World";
}
document.body.innerHTML = helloworld();
----------
-compile with typescript:
cmd.exe: tsc helloworld.ts

-new file named helloworld.html:
----------
<!DOCTYPE html>
<html>
    <head><title>Custom Webpage Name</title></head>
    <body>
        <script src="helloworld.js"></script>
    </body>
</html>

run helloworld.html in browser to use app.