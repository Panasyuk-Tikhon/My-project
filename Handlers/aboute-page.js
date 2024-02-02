const fileSystem = require('fs');
const http = require('http');

const aboutePage = (request, response) => {
    fileSystem.readFile(
        './Front/aboute.html',
        'UTF-8',
        (error, content) => {
            if (error){
                response.writeHead(404);
            }
            else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(content);
                
            }
            response.end();
        }   
    );
}

module.exports = aboutePage;