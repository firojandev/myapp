const handle = (req, res) => {

    res.send(req.app.locals.title);
}

module.exports = handle;