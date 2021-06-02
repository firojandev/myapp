var express = require('express')

const handle = require('./src/handle');


var app = express()

const router = express.Router();

app.use(router);

app.locals.title = "My App";

app.get('/',handle);

app.post('/',(req,res) => {
    console.log(req.body);
    res.send('Hello Mrs:'+req.body.title);
});

app.listen(3000,() => {
    console.log('Listening the port 3000');
});