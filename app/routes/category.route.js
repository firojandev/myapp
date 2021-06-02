
const categoryRoute = (app) => {

    app.get('/category', (req, res) => {
        res.json({ message: 'Get category done' });
    });

}

module.exports = categoryRoute;