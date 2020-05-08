const express = require('express')
var hbs = require('hbs');

const app = express()
const port = 3000;
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));


// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
    res.render('index',{
        name: "joSuÉ heRnÁndeZ"
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port, () => {
    console.log('Listen in Port:', port);
})

