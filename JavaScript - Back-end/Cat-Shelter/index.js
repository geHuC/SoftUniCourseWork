const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');
    switch (req.url) {
        case '/styles/site.css':
            res.writeHead(200,{'Content-Type':'text/css'});
            let content = fs.readFileSync('./styles/site.css');

            res.write(content);
            break;
        case '/src/app.js':
            res.writeHead(200,{'Content-Type':'text/javascript'});
            let jsContent = fs.readFileSync('./src/app.js');

            res.write(jsContent);
            break;
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            let page = fs.readFileSync('./views/index.html');

            res.write(page);
            break;
        default:
            
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('The world is a lie!');
            break;
    }
    res.end(); 
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/ ...`);
});