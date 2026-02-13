class Router {
    constructor() {
        this.routes = { 'GET': {}, 'POST': {} };
    }

    get(path, handler) {
        this.routes['GET'][path] = handler;
    }

    handle(req, res) {
        const { method, url } = req;
        const handler = this.routes[method][url];
        if (handler) {
            handler(req, res);
        } else {
            res.writeHead(404);
            res.end("404 Not Found");
        }
    }
}
module.exports = Router;