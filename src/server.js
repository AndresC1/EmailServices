import http from 'http';
import app from '../app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3001;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})