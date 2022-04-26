const { Router } = require('express')
const { movieModel } = require('../models/movie');

const router = Router()

router.get('/movies/:movieTitle', (req, res) => {
    movieModel
        .find({
            Title: {
                $regex: req.params.movieTitle,
                '$options': 'i'
            }
        })
        .select({
            Title: true,
            Director: true,
            Runtime: true,
            Plot: true,
            Language: true,
            Poster: true
        })
        .lean()
        .then((docs) => {
            if(docs.length === 0) {
                throw new Error("Movie does not Exist in database.")
            } else {
                res.status(200).send({
                    response: true,
                    message: docs
                })
            }
        })
        .catch((error) => {
            res.status(200).send({
                response: false,
                message: error.message
            })
        })
});

module.exports = router;