const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><h1>Hello there!</h1><form action="/create-user" method="POST"><input type="text"><button type="submit">Create User</button></form></body>');
    res.write("</html>");
    return res.end();
 }
 if (url === '/users'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><ul><li>Peter</li><li>James</li><li>John</li></ul></body>');
    res.write("</html>");
 }
 if (url === '/create-user'&& method === 'POST'){
     const body = [];
   req.on('data',(chunk) =>{
       console.log(chunk);
       body.push(chunk);
   });
   req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(message);
        });
        res.statusCode = 302;
        res.setHeader ('Location', '/');
        res.end();
 }

}

exports.handler = requestHandler;
