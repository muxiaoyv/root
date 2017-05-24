var http=require('http')
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	if(pathname.substr(1)==""){
        fs.readFile("index.html", function (err, data) {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                // 响应文件内容
                response.write(data.toString());
            }
            //  发送响应数据
            response.end();
        })
	}else{
		fs.readFile(pathname.substr(1), function (err, data) {
	      if (err) {
	         response.writeHead(404, {'Content-Type': 'text/html'});
	      }else{	         
	         response.writeHead(200, {'Content-Type': 'text/html'});	        
	         // 响应文件内容
	         response.write(data.toString());		
	      }
	      //  发送响应数据
	      response.end();
	   });   		
	}
	
	
	
}).listen(8080);
