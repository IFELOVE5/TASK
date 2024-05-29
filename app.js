const express = require('express')
const app = express()
const mongoose = require(`mongoose`)
const port = process.env.PORT || 9000
const morgan = require(`morgan`)
const router = require(`./task_route.js`)
const errorhandler = require(`./error_handling.js`)

require(`dotenv/config`)
app.use(morgan(`dev`))
app.use(express.json())


app.use(`/api/v1`, router)
app.use(errorhandler)



mongoose.connect(process.env.CONNECTION_STRING,)
.then(() => { console.log(`database connected`)})
.catch((err) => {console.log(err)})


app.listen(port, () => console.log(`app listening on port ${port}!`))