const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><h1>Hello there!</h1><form action="/formal-header" method="POST"><input type="text" name="date"><br><input type="text" name="date"><br><button type="submit">Create User</button></form></body>');
    res.write("</html>");
    return res.end();
 }

 if (url === '/formal-header'&& method === 'POST'){
     const body = [];
   req.on('data',(chunk) =>{

       body.push(chunk);
   });
   req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();

        const message = parsedBody.split('=');
        const hackymessage = message[1].split('&')[0];   
        console.log(`My name is ${hackymessage} and today's date is ${message[2]}`);
        });
        res.statusCode = 302;
        res.setHeader ('Location', '/');
        res.end();
 }

}

exports.handler = requestHandler;
