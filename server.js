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
  console.log(req)
  try{
    let rates =  [
        {
            "service_name": "Bluexpress-MD",
            "service_code": "MD",
            "total_price": "2990",
            "description": "",
            "currency": "CLP",
            "min_delivery_date": "2024-03-13T21:00:00",
            "max_delivery_date": "2024-03-13T21:00:00",
            "working_times": {
                "mondayToFriday": {
                    "init": "21:00",
                    "end": "19:59"
                },
                "sameday": {
                    "init": "00:00",
                    "end": "12:00"
                },
                "nextday": {
                    "init": "00:00",
                    "end": "12:00"
                },
                "executionTime": "2024-03-10T02:02:44"
            }
        }
    ]
    
    res.send(rates)
    return rates
  
  }catch(error){
    console.log(error)
    console.log(error.message)
    res.send(error)
  }

});

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});
