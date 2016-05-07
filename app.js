import express from 'express';
import {json as jsonParser, urlencoded as urlEncodedParser} from 'body-parser';
import morgan from 'morgan';
import api from './api';

const app = express();

// Logging
app.use(morgan('dev'));

// Body Parsers
app.use(jsonParser());
app.use(urlEncodedParser({extended: true}));

// Static Files
app.use('/static', express.static('static'));

// API
app.use('/api', api);

// Index Page
app.get('/', (req, res) => res.sendFile(`${__dirname}/static/html/index.html`));

// Start Server
const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App listening at http://${host}:${port}`);
});
