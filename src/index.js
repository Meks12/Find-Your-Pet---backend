import express from "express";


const app = express()
const port = 3000;

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Hello!");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port${port}`)
})


app.get('/ljubimci', (req, res)=> {
    let ljubimci = [
        {ime: 'Livijo',  lokacija: '-44.91244, 81.34243',    spol: 'M',   datum_nestanka: '6.6.2022',   vrsta_psa: 'Zlatni retriver'}
    ];
    res.status(200)
    res.send(ljubimci);

});

