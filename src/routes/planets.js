const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

const planets = []
let page;

router.get('/', async (req, res) => {
    if(page === 8){
        console.log('planets ready')
    }else{
        for(page = 1; page < 8; page ++){
            const planetsFetch = await fetch(`https://swapi.co/api/planets/?page=${page}&format=json`)
            const planet = await planetsFetch.json()
            planets.push(planet.results)
        }
    }
    res.json(planets)
})

module.exports = router