const mongoose = require('mongoose')

// Import the Envorinment variable 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//To stop mongoose from modifying collection name
mongoose.pluralize(null)

//connect to our database
mongoose.connect(process.env.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('[mongoDB] connected to database')
});

mongoose.connection.on('disconnected', () => {
    console.log('[mongoDB] disconnected from database')
});

mongoose.connection.on('error', (error) => {
    console.log('[mongoDB] error in the database')
    console.error.bind(console, 'connection error:')
})

module.exports = {
    mongoDB: mongoose.connection
}