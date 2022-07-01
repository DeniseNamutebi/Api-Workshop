import express from "express";
import bodyParser from "body-parser";

const PORT  = 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () =>
console.log(`Server running on: http://localhost:${PORT}`))

// app.get(`/`, (request, response) => {
//     response.send ('Welcome to our CAKE API!')
// } )
   
let cakes = [
    {
        name: "Red Velvet",
        tierNumber: 2,
        price: "£6.99"
    }
]

app.get('/cakes', (request, response) => {
    response.json(cakes)
})

app.post('/addCakes', (request, response) => {
    const cakeNameBody = request.body.name
    const cakeTierBody = request.body.tierNumber
    const cakePriceBody = request.body.price

    let cakeInstance = {
        name: cakeNameBody,
        tierNumber: cakeTierBody,
        price: cakePriceBody
    }

    const cakeAlreadyExists = cakes.some (cake => cake.name === cakeNameBody &&
         cake.tierNumber === cakeTierBody && cake.price === cakePriceBody)

        if (cakeAlreadyExists)
        return response.send ("Cake instance already exists")

        cakes.push(cakeInstance)
        return response.send (`New cake instance: ${cakeInstance.name}, has been added`)

})

