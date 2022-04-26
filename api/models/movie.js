const { Schema, model } = require('mongoose')

// schema for the Tests collection

const mySchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Rated: {
        type: String,
        required: true
    },
    Released: {
        type: String,
        required: true
    },
    Runtime: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Director: {
        type: String,
        required: true
    },
    Writer: {
        type: String,
        required: true
    },
    Actors: {
        type: String,
        required: true
    },
    Plot: {
        type: String,
        required: true
    },
    Language: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Awards: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    },
    imdbRating: {
        type: String,
        required: true
    }
}, {
    collection: 'movie'
})


const myModel = model('movies', mySchema);

module.exports = {
    movieModel: myModel
}