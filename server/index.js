 const express = require('express');
 const res = require('express/lib/response');
 const data = require('./data');
 const app = express();
 const PORT = process.env.PORT || 2000;
 require("dotenv").config();
 const cloudinary = require("cloudinary").v2;
const cors = require('cors');


app.use(cors());
 cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });

  app.get('/', (req,res) => {
    res.status(200).json(data);
  });

 app.get('/:id', (req,res)=> {
    const { id } = req.params;
    const product = data.find((product) => product.id === parseInt(id));
    
    if(product) {
        res.status(200).json(product);

    } else {
        res.status(404).send('No product found')
    }
  });


 app.listen(PORT, (req,res) => {
     console.log(`bla bla ${PORT}`)
  });

