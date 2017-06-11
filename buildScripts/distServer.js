import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(request, response) {
    // hard cooding for simplicitay sake. pretend this hits a real database
    response.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tam@gmail.com" },
        { "id": 3, "firstName": "Jane", "lastName": "Lee", "email": "lee@gmail.com" }
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});