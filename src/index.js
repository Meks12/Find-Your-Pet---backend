import express from "express";
import cors from "cors";
import connect from './db.js'


const app = express()
const port = 3000;

app.use(cors())

app.use(express.json());


app.post('/prijavanestanka', async (req,res) =>{
    let db = await connect()

    let cursor = await db.collection("prijavanestanka").find().sort({postedAt: -1})
    let results = await cursor.toArray()

    res.json(results)
})


// HARDKODANI BEKEND OD LINIJE 26 NA DALJE

app.get("/",(req, res)=>{
    res.send("Hello!");
});
// Linija 9 - 16 -> hello world primjer
app.listen(port, ()=>{
    console.log(`Example app listening on port${port}`)
})

// "Hard kodirani" podaci izgubljenih ljubimaca
app.get('/ljubimac', (req, res)=> {
    let ljubimac = [
        {id:"1",ime: 'Livijo', lokacija: '-44.91244, 81.34243', spol: 'M', datum_nestanka: '6.6.2022', vrsta_psa: 'Zlatni retriver', dob: "4", slika: "livijo.jpg",desc:"Ovdje dolazi dodatan opis ljubimca"},
        {id:"2",ime: 'Tara', lokacija: '-23.4343, 16.54545', spol: 'Ž', datum_nestanka: '30.5.2015', vrsta_psa: 'Border collie', dob: "14", slika: "tara.jpg",desc:"Ovdje dolazi dodatan opis ljubimca"},
        {id:"3",ime: 'Lana', lokacija: '23.355332, -39.213123', spol: 'Ž', datum_nestanka: '30.5.2014', vrsta_psa: 'Buldog', dob: "10", slika: "lana.jpg",desc:"Ovdje dolazi dodatan opis ljubimca"},
        {id:"4",ime: 'Čiz', lokacija: "54.3434, -21. 4324234", spol: 'M', datum_nestanka: "30.4.2022", vrsta_psa: 'Njemački ovčar', dob: "2", slika: "čiz.jpg",desc:"Ovdje dolazi dodatan opis ljubimca"}
    ];
    res.status(200);
    res.send(ljubimac);
    
});

// "Hard kodirani" podaci vlasnika
app.get('/vlasnik', (req, res) =>{
    let vlasnik = [
        {jmbag:"1",ime: 'Marko', prezime: 'Livaja', broj_mobitela: "023932434", adresa_stanovanja: 'Stancija Menengeti 42', grad: 'Buje'},
        {jmbag:"2",ime: 'Toni', prezime: 'Rikardo', broj_mobitela: "091232453", adresa_stanovanja: 'Foškići 32', grad: 'Pazin'},
        {jmbag:"3",ime: 'Ludvig', prezime: 'Markon', broj_mobitela: "098122332", adresa_stanovanja: 'Opatijska cesta 1', grad: 'Opatija'},
        {jmbag:"4",ime: 'Đeni', prezime: 'Tukonić', broj_mobitela: "099222333", adresa_stanovanja: 'Lipa 33', grad: 'Poreč'}
    ];
    res.status(200);
    res.send(vlasnik);
});


// Dodajen korisnike zato jer korisnici mogu koristit aplikaciju da traze ljubimce bez da su ih oni izgubili
app.get('/korisnik', (req,res) =>{
    let korisnik = [
        {jmbag:"5",ime: 'Ruby', prezime: 'Willow', broj_mobitela: "091343234", adresa_stanovanja: 'Belci 48', grad: 'Pazin'},
        {jmbag:"6",ime: 'Lana', prezime: 'Tadic', broj_mobitela: "091234222", adresa_stanovanja: 'Stancija Mrak 32', grad: 'Dubrovnik'}
    ];
    res.status(200);
    res.send(korisnik);
});


// Ova metoda služi za ispunjavanje "input text fieldov-a" od izgubljenog ljubimca
app.post('/prijavanestanka', (req,res) =>{
   // let poruka = req.body;
 //   console.log(poruka)
     console.log("Podaci",req.body);
    res.status(201);
    res.send();

});

// Ova metoda služi za ispunjavanje "input text fieldov-a" vlasnika
app.post('/podacivlasnika',(req,res) =>{
    console.log("Podaci",req.body);
    res.status(201);
    res.send();
});

// Ovaj "delete" sluzit ce za brisanje vlasnika u "frontendu"
app.delete('/vlasnik/:jmbag', (req,res) =>{
    console.log("Podaci",req.params.jmbag);
    res.status(200);
    res.send();
});

// Ovaj "delete" sluzit ce za brisanje ljubimaca
app.delete('/ljubimac/:id', (req,res) =>{
    console.log("Podaci",req.params.id);
    res.status(200);
    res.send();

});

// ... 
app.get('/pronadiljubimca',(req,res) =>{
    let infoljubimca = [
    {ime:"Livijo", dob:"5", spol:"M", ime_vlasnika:"Marko", broj_mobitela:"023932434", grad:"Buje",lokacija:"-44.91244, 81.34243"},
    {ime:"Čiz", dob:"2", spol:"M", ime_vlasnika:"Đeni", broj_mobitela:"099222333", grad:"Poreč",lokacija:"54.3434, -21. 4324234"}

    ];
    res.status(200);
    res.send(infoljubimca);
});

// Postojat ce nekakav gumb sa kojime cu podijelit određene podatke o ljubimcu, nisan siguran ako je ovo ok
app.post('/podijeli',(req,res) =>{
    let podijeli = [
    {ime:"Livijo", dob:"5", spol:"M", ime_vlasnika:"Marko", broj_mobitela:"023932434", grad:"Buje",lokacija:"-44.91244, 81.34243"},
    {ime:"Čiz", dob:"2", spol:"M", ime_vlasnika:"Đeni", broj_mobitela:"099222333", grad:"Poreč",lokacija:"54.3434, -21. 4324234"}
    ]
    console.log("Podaci",req.body);
    res.status(201);
    res.send(podijeli);
});
// Izmjena podataka o ljubimcu
app.patch('/ljubimac/:id', (req,res)=>{
   console.log("Podaci",req.params.id, req.body);
    res.status(200);
    res.send();
});

// Izmjena podataka o vlasniku
app.patch('/vlasnik/:jmbag', (req,res)=>{
    console.log("Podaci",req.params.jmbag, req.body);
    res.status(200);
    res.send();
});

// Podaci korisnika
app.post('/podacikorisnika',(req,res) =>{
    console.log("Podaci",req.body);
    res.status(201);
    res.send();
});

// Mijenjanje podataka korisnika
app.patch('/korisnik/:jmbag',(req,res)=>{
    console.log("Podaci",req.body);
    res.status(200);
    res.send();
});
