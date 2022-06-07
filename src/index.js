import express from "express";



const app = express()
const port = 3000;

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Hello!");
});
// Linija 9 - 16 -> hello world primjer
app.listen(port, ()=>{
    console.log(`Example app listening on port${port}`)
})

// "Hard kodirani" podaci izgubljenih ljubimaca
app.get('/ljubimci', (req, res)=> {
    let ljubimci = [
        {id:"1",ime: 'Livijo', lokacija: '-44.91244, 81.34243', spol: 'M', datum_nestanka: '6.6.2022', vrsta_psa: 'Zlatni retriver', dob: "4", slika: "livijo.jpg"},
        {id:"2",ime: 'Tara', lokacija: '-23.4343, 16.54545', spol: 'Ž', datum_nestanka: '30.5.2015', vrsta_psa: 'Border collie', dob: "14", slika: "tara.jpg"},
        {id:"3",ime: 'Lana', lokacija: '23.355332, -39.213123', spol: 'Ž', datum_nestanka: '30.5.2014', vrsta_psa: 'Buldog', dob: "10", slika: "lana.jpg"},
        {id:"4",ime: 'Čiz', lokacija: "54.3434, -21. 4324234", spol: 'M', datum_nestanka: "30.4.2022", vrsta_psa: 'Njemački ovčar', dob: "2", slika: "čiz.jpg"}
    ];
    res.status(200)
    res.send(ljubimci);
    
});

// "Hard kodirani" podaci vlasnika
app.get('/vlasnici', (req, res) =>{
    let vlasnici = [
        {jmbag:"1",ime: 'Marko', prezime: 'Livaja', broj_mobitela: "023932434", adresa_stanovanja: 'Stancija Menengeti 42', grad: 'Buje'},
        {jmbag:"2",ime: 'Toni', prezime: 'Rikardo', broj_mobitela: "091232453", adresa_stanovanja: 'Foškići 32', grad: 'Pazin'},
        {jmbag:"3",ime: 'Ludvig', prezime: 'Markon', broj_mobitela: "098122332", adresa_stanovanja: 'Opatijska cesta 1', grad: 'Opatija'},
        {jmbag:"4",ime: 'Đeni', prezime: 'Tukonić', broj_mobitela: "099222333", adresa_stanovanja: 'Lipa 33', grad: 'Poreč'}
    ];
    res.status(200)
    res.send(vlasnici);
});

// Ova metoda služi za ispunjavanje "input text fieldov-a" od izgubljenog ljubimca
app.post('/prijavanestanka', (req,res) =>{
    console.log("Podaci",req.body);
    res.status(201);
    res.send();
});

// Ova metoda služi za ispunjavanje "input text fieldov-a" vlasnika izgubljenog ljubimca
app.post('/podacivlasnika',(req,res) =>{
    console.log("Podaci",req.body);
    res.status(201);
    res.send();
})

// Ovaj "delete" sluzit ce za brisanje vlasnika u "frontendu"
app.delete('/vlasnici/:jmbag', (req,res) =>{
    console.log("Podaci",req.params.jmbag);
    res.status(200);
    res.send();
})