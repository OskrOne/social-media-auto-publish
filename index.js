const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const port = 3001;
const options = {
    key: fs.readFileSync('sslcert/server.key', 'utf8'),
    cert: fs.readFileSync('sslcert/server.crt', 'utf8')
};
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const httpServer = https.createServer(options, app);

httpServer.listen(port, () => {
    console.log("server starting on port : " + port)
});