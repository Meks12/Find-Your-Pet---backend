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
