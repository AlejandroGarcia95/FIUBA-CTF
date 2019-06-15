var page = require('webpage').create();
var host = "10.0.0.2";
var url = "http://" + host + ":8007/view.php";
var timeout = 4000;

phantom.addCookie({
    'name': 'Congratulations',
    'value': 'You_have_cleared_this_level!',
    'domain': host,
    'path': '/',
    'httponly': false
});

page.onNavigationRequested = function(url, type, willNavigate, main) {
    console.log("[INFO] URL="+url);  
};

page.settings.resourceTimeout = timeout;

page.onResourceTimeout = function(e) {
    setTimeout(function(){
        console.log("[INFO] Timeout")
        phantom.exit();
    }, 3);
};

page.open(url, function(status) {
    console.log("[INFO] Rendered page with status: " + status);
    setTimeout(function(){
        phantom.exit();
    }, 3);
});
