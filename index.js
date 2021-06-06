const express = require('express');
const customerRoute = require('./app/routes/customer.route');
const categoryRoute = require('./app/routes/category.route');
const authRoute = require('./app/routes/auth.route');
const config = require('./app/config/main.config');
const warehouseRoute = require('./app/modules/warehouse/warehouse.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbseq = require('./app/config/db.sequelize');

dbseq.sequelize.sync(); //live
// dbseq.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db");
// });//dev

app.get('/', (req, res) => {
    res.json({ message: "Welcome to express js" });
});

authRoute(app);
customerRoute(app);
categoryRoute(app);
warehouseRoute(app);

app.listen(config.port, () => {
    console.log('Listening the port ${config.port}');
});