const jsonServer = require('json-server');
const serve = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

serve.use(middlewares);
serve.use(router);

serve.listen(port);