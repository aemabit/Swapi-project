const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

let films = []

router.get('/', async (req, res) => {
    if( films.length === 7){
        console.log('films ready')
    }else{
        const filmsFetch = await fetch(`https://swapi.co/api/films/?format=json`)
        const AllFilms = await filmsFetch.json()
        films = films.concat(AllFilms.results)
    }
    res.json(films)
    console.log(films.length)
})

module.exports = router