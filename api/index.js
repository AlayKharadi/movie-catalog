const express = require('express');
const cors = require('cors')
const mongoDB = require('./config/db');
const routes = require('./routes');

const ports = [
    3001,
    3002
];

// Only handle GET requests
// Receive request and pass to handler method
const launchServer = (port, index) => {
    const app = express()

    const corsOptions = {
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200
    }
    app.use(cors(corsOptions));

    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))

    routes(app)

    app.get('*', (req, res) => {
        res.status(200).send('Invalid Route')
    })

    app.listen(port, (err) => {
        err ?
            console.log(`Failed to listen on PORT ${port}`) :
            console.log(`Application Server listening on PORT ${port}`);
    })
}

ports.forEach((port, index) => launchServer(port, index))