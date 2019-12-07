const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

const vehicles = []
let page;

router.get('/', async (req, res) => {
    if( page === 5){
        console.log('vehicles ready')
    }else{
        for(page = 1; page < 5; page ++){
            const vehiclesFetch = await fetch(`https://swapi.co/api/vehicles/?page=${page}&format=json`)
            const allvehicles = await vehiclesFetch.json()
            vehicles.push(allvehicles.results)
        }
    }
    res.json(vehicles)
    console.log(vehicles.length)
})

module.exports = router