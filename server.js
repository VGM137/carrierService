const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express')

require('dotenv').config();


var corsOptions = {
  origin: ['https://dev-allcheckout-extensibility.myshopify.com', 'https://dev.allnutrition.cl', 'https://allnutrition.cl'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
const host = 'localhost'
const port = 8080;

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send('Hola rates')
})

app.post('/generate-rates', async (req, res) => {
  console.log(req.body)
  try{
    let rates = { "rates": [ { "service_name": "canadapost-overnight", "service_code": "ON", "total_price": "1295", "description": "This is the fastest option by far", "currency": "CAD", "min_delivery_date": "2013-04-12 14:48:45 -0400", "max_delivery_date": "2013-04-12 14:48:45 -0400" }, { "service_name": "fedex-2dayground", "service_code": "2D", "total_price": "2934", "currency": "USD", "min_delivery_date": "2013-04-12 14:48:45 -0400", "max_delivery_date": "2013-04-12 14:48:45 -0400" }, { "service_name": "fedex-priorityovernight", "service_code": "1D", "total_price": "3587", "currency": "USD", "min_delivery_date": "2013-04-12 14:48:45 -0400", "max_delivery_date": "2013-04-12 14:48:45 -0400" } ] }
    
    res.send(rates)
    return rates
  
  }catch(error){
    console.log(error)
    console.log(error.message)
    res.send(error)
  }

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
