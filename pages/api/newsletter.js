  import { MongoClient } from "mongodb";

async function handler(req, res){
   
    if(req.method==="POST"){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes("@") ){
              res.status(422).json({message : "Invalid email address."})
            return;
        }

        const client = await MongoClient.connect("mongodb+srv://stephint:1929@cluster0.gwf9coi.mongodb.net/newsletter?retryWrites=true&w=majority");
        
            const db = client.db(); //we have alredy given the name for db in the url "newsletter"

          await db.collection("emails").insertOne({email : userEmail});

          client.close();
       

        console.log(userEmail);
        res.status(201).json({message: "Signed up!😊"}) 

    }



}


export default handler;