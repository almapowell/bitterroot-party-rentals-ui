const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://almapowell:aWPYSxSewRXlbgLt@cluster0.wacp04q.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("party_rentals");
    const coll = db.collection("products");

    const result = await coll.deleteOne({ id: 7 });

    // display the results of your operation
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


