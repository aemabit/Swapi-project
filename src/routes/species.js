const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

const species = []
let page;

router.get('/', async (req, res) => {
    if( page === 5 ){
        console.log('species ready')
    }else{
        for(page = 1; page < 5; page ++){
            const speciesFetch = await fetch(`https://swapi.co/api/species/?page=${page}&format=json`)
            const allspecies = await speciesFetch.json()
            species.push(allspecies.results)
        }
    }
    res.json(species)
})

module.exports = router