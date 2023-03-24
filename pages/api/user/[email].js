import { MongoClient } from "mongodb"
import connection from './../../../middleware/mongoose';
import User from './../../../models/user';

async function handler(req, resp){
    if (req.method === "GET"){
    const {name, image, email, college, filename} = req.body

    

    const client = await MongoClient.connect(`${process.env.MONGODB_URI}`)
    const db = client.db("wtf")
    const collection = db.collection("users")

    const result = await collection.findOne({email: email})
    client.close()
    return resp.status(200).json({
        result
    })


}
else {
    return resp.status(500).json("method not allowed")
}
}
export default connection(handler)