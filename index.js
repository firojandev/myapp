var express = require('express')
var app = express()

app.use(express.json())

app.get('/',(req,res) => {
    res.send('call successfully:'+req.method);
});

app.listen(3000,() => {
    console.log('Listening the port 3000');
});