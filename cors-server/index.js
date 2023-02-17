const express=require('express');
const app=express();
const PORT=5000;
app.get('/',(req,res)=>{
res.send("Welcome to CORS server! 😁")
})
app.get('/prod',(req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.json([
        {"name": "Prod 1","description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry","price": "1.05","quantity": "5","date": "2023/02/1"},
        {"name": "Prod 2","description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry","price": "1.05","quantity": "5","date": "2023/02/1"}
    ])
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))



