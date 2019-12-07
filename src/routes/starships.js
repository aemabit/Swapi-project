const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

let starships = []
let page;

router.get('/', async (req, res) => {
    if(page === 5){
        console.log('starships ready')
    }else{
        for(page = 1; page < 5; page ++){
            const starshipsFetch = await fetch(`https://swapi.co/api/starships/?page=${page}&format=json`)
            const allships = await starshipsFetch.json()
            starships = starships.concat(allships.results)
        }
    }
    res.json(starships)
    console.log(starships.length)
})

module.exports = router