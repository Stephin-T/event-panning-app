import { MongoClient } from "mongodb";
  
 

async function handler(req, res){

    const eventId = req.query.eventId;

    const client = await  MongoClient.connect("mongodb+srv://stephint:1929@cluster0.gwf9coi.mongodb.net/newsletter?retryWrites=true&w=majority");


    if(req.method==="POST"){

        const {email, name, text} =req.body;

        if(!email.includes("@") || !name || name.trim()==="" || !text || text.trim() ===""){
          res.status(422).json({message : "Invalid Input!"});
            return;
        }
           console.log(email, name, text);

           const newComment = {
            id: new Date().toISOString,
            email,
            name,
            text,
            eventId
           };

           const db = client.db();
       const result = await db.collection("comments").insertOne(newComment);

         console.log(result);
         newComment.id= result.insertedId;



           res.status(201).json({message: "Added Comment", comment: newComment})
         

    }

    if(req.method==="GET"){
         const db= client.db();
          const documents = await db.collection("comments").find().sort({_id:-1}).toArray();  //-1 means to list in descending order

        res.status(200).json({comments: documents})

    }
          client.close();

}

export default handler; 