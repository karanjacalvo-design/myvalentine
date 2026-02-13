const http = require('http');
const Router = require('./router');

class Amora {
    constructor() {
        this.router = new Router();
    }

    get(path, handler) {
        this.router.get(path, handler);
    }

    listen(port, callback) {
        http.createServer((req, res) => {
            this.router.handle(req, res);
        }).listen(port, callback);
    }
}
module.exports = Amora;