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