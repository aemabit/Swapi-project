const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

let page;
let c = []

router.get('/', async (req, res) => {
    if( page === 10){
        console.log('character ready')
    }else{
        for(page = 1; page < 10; page ++){
            const characterFetch = await fetch(`https://swapi.co/api/people/?page=${page}&format=json`)
            const allPeople = await characterFetch.json()
            c = c.concat(allPeople.results)
        }
    }
    res.json({c})
})

module.exports = router