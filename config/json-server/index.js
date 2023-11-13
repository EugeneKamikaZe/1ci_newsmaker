const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const jsonServer = require('json-server');

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

//  Нужно для небольшой задержки
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use(router);

//  запуск сервера
const PORT = 8443;
const HTTP_PORT = 8000;

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

httpsServer.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});

httpServer.listen(HTTP_PORT, () => {
    console.log(`server is running on ${HTTP_PORT} port`);
});
