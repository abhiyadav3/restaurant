const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
require('dotenv').config();

app.use(bodyParser.json());  
const PORT = process.env.PORT || 3000;


app.get('/', function(req,res){
    res.send('Welcome to our Restaurant')
})

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log("Server is live listening of port 3000")
});