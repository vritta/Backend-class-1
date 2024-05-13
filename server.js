const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("server started at port no 3000")
});

app.get('/', (req, res)=>{
    res.send("Hellow world!!!");
}); 

app.post('/api/cars', (req,res)=>{
    const {name, brand} = req.body;
    console.log(name,brand);
    res.send("Car submitted successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cars', {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection established successfully")})
.catch((err)=>{console.log("Received an error - ",err)});