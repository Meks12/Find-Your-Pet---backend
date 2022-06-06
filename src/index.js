import express from "express";
import data from './store';


const app = express()
const port = 3000;

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Hello!");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port${port}`)
})


app.get('/ljubimci', (req, res)=> res.json(data.ljubimci));

