function route(handle,pathname,response,reviewData){
  console.log("routing a request for:" + pathname);
  if(typeof handle[pathname] === 'function'){
  	handle[pathname](response,reviewData);
  }else{
  	console.log('No handler for:'+pathname)
  	response.writeHead(404,{"Content-type":"text/plain"});
  	response.write("Error 404: Page Not Found");
  	response.end();
  }  
}

module.exports.route = route;