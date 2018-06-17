const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { MysqlConnect } = require('./src/models')
require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/passport')

require('./src/routes')(app)

MysqlConnect.sync({ force: false })
  .then(() => {
    const port = process.env.SERVER_PORT
    app.listen(port, () => console.log('Server started on port ' + port))
  })
