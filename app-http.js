const http = require('http');
const port = 3000;



http.createServer((req, res) => {

    let data = {
        username: "ealvarezjh",
        email: "ealvarezjh@gmail.com",
        url: req.url
    }
    
    res.write(JSON.stringify(data));
    res.end();
})
.listen(port);

console.log(`Port is: ${ port }`);