const fs = require('fs');
const { MongoClient } = require('mongodb');
// const data = require("../output2.json");

async function processAnimeData() {
    const client = await MongoClient.connect("");
    const db = client.db();
    const collection = db.collection('admins');
    await collection.insertMany([{username: "admin1", password: ""}, {username: "admin2", password: ""}, {username: "admin3", password: ""}]);
    // let data = await collection.find({ Demographic: { $regex: /([A-z]{3,})\1+/ } }).toArray();
    // console.log(data.length)
    // for(let d of data){
    //     let updatedDemographic = d.Demographic.split(", ").map((genre)=>{
    //         if(genre.slice(0, Math.ceil(genre.length/2)) === genre.slice(Math.ceil(genre.length/2), genre.length)){
    //             return genre.slice(0, Math.ceil(genre.length/2))
    //         }
    //         return genre
    //     }).join(", ")
    //     await collection.updateOne(
    //         { _id: d._id }, // Match the document by its _id
    //         { $set: { Demographic: updatedDemographic } } // Set the updated Genres
    //     );
    // }
    // collection.bulkWrite
    await client.close();
}

// Call the function with the input and output file paths
processAnimeData();
