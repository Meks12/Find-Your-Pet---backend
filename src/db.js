import mongo, { Db } from 'mongodb'

let connection_string = "mongodb+srv://admin:admin@cluster0.upjf8.mongodb.net/?retryWrites=true&w=majority";

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null

export default () =>{
    return new Promise((resolve, reject) =>{


        client.connect(err =>{
            if (err) {
                reject("Došlo je do greske prilikom spajanja" + err)
            }
            else {
                console.log("Uspješno spajanje na bazu")
                 db = client.db("petfinder")
                resolve(db)
            }
        })
    })
} 