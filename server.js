const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    console.log("Hii");
    //res.status(500).send("Error Occured")
    //res.status(200).send({error:"Error Message"})
    //res.json({expess : "Learning Express"})
    res.send("Hello World")
    res.render("index",{textk : "World"});
});
const userRoute = require('./routes/user');
app.use('/user',userRoute);

app.listen(3000);