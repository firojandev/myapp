const express = require('express');
const customerRoute = require('./app/routes/customer.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res) => {
    res.json({message:"Welcome to express js"});
});

customerRoute(app);

app.listen(3000,() => {
    console.log('Listening the port 3000');
});