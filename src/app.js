const express = require('express')
const foodRouter = require('./routes/foods')
const cartRouter = require('./routes/cart');
//Midleware
const app = express()

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


app.use(express.json())
app.use(express.static(__dirname+('/public')))

app.use('/foods', foodRouter)
app.use('/carts', cartRouter)

