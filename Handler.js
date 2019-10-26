
var querystring = require('querystring')
var fs = require('fs');

function home(response){
	console.log('Executing home handler');
// 	var htmlFile = '<html>'+
// '<head>'+
// 	'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>'+
// '</head>'+
// '<body>'+
// 	'<form action="/review" method="post">'+
// 		'<textarea name = "text" rows="10" cols="30"></textarea>'+'<br><br>'+
// 		'<input type = "submit" value="Submit Text"/>'+	
// 	'</form>'+
// '</body>'+
// '</html>';
  response.writeHead(200,{'Content-Type':'text/html'});
  // response.write(htmlFile);
  fs.readFile('./index.html',null,function(error,data){
  	if(error){
  		response.writeHead(404);
  		response.write('File not found');
  	}else{
  		response.write(data);
  	}

  	response.end();
  });

}   

function review(response,reviewData){
	console.log('Executing review handler');

  response.writeHead(200,{'Content-Type':'text/plain'});
  response.write("New Review:"+ querystring.parse(reviewData).text);
  response.end();
}

module.exports.home = home;
module.exports.review = review;