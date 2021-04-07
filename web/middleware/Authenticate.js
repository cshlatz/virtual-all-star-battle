const Authenticate = {
    authenticatePassword(req, res, next) {
        if (req.method === 'POST' || req.method === 'DELETE') {
            if (process.env.WEB_PASS === req.body.password) {
                next();
            } else {
                res.sendStatus(401);
            }
        } else {
            next();
        }
    }
}

module.exports = Authenticate;
