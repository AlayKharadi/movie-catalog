const http = require('http')
const { createProxyServer } = require('http-proxy')

// Import the Envorinment variable 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 4000;

const loadBalancerProxy = new createProxyServer()

const targets = [
    process.env.server1URL || 'http://localhost:3001',
    process.env.server2URL || 'http://localhost:3002'
];

const loadBalancer = http.createServer((req, res) => {
    // Add any needed fields to 
    loadBalancerProxy.web(req, res, {
        target: targets[
            (Math.floor(Math.random() * targets.length))
        ]
    })

    loadBalancerProxy.on('error', (error) => {
        console.log(error)
    })
})

loadBalancer.listen(PORT, () => {
    console.log(`Proxy server is running in port ${PORT}`)
})