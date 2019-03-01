var http = require("http");

function sayHello(){
	http.get("http://weaflix.herokuapp.com/");
}
sayHello();
