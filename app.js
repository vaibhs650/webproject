const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3001;
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views')); 

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
})
app.get('/services',(req,res)=>{
    res.send('This is Services Portal.')
})
app.get('/contact',(req,res)=>{
    res.render('contact.pug');
})
app.post('/',(req,res)=>{
    df = req.body.names
    age = req.body.age
    gender = req.body.gender
    let result = `Name is ${df}, age is ${age}, gender is ${gender}`
    fs.writeFileSync('output45.txt',result)
})
app.listen(port,()=>{
    console.log('This Web Is succesfully Run on port 80');
})


