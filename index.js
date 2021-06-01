var express = require('express')
var app = express()

app.use(express.json());

const router = express.Router();

app.use(router);

app.get('/',(req,res) => {
    res.send('call successfully:'+req.method);
});

app.post('/',(req,res) => {
    console.log(req.body);
    res.send('Hello Mrs:'+req.body.title);
});

app.listen(3000,() => {
    console.log('Listening the port 3000');
});