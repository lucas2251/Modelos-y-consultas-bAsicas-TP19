const moment = require('moment');
const db = require('../database/models')

module.exports = 
{
    list: (req, res) => 
    {
        db.Movie.findAll()
            .then((movies) =>
            {
                return res.render('moviesList', {movies})
            })
            .catch(err => console.log(err));
    },
    new: (req, res) => 
    {
        const queryOps =
        {
            order: [['release_date', 'DESC']]
        };

        db.Movie.findAll(queryOps)
            .then(movies => res.render('moviesList', {movies}))
            .catch(err => console.log(err));
    },
    recommended: (req, res) => 
    {
        const queryOps =
        {
            order: [['release_date', 'DESC']],
            limit: 5
        }

        db.Movie.findAll(queryOps)
            .then(movies => res.render('moviesList', {movies}))
            .catch(err => console.log(err));
    },
    detail: (req, res) => 
    {
        db.Movie.findByPk(req.params.id)
            .then(movie => res.render('moviesDetail', {movie}))
            .catch(err => console.log(err));
    }
}