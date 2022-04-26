module.exports = (app) => {
    app.use('/API', require('./routes/movie'))
}