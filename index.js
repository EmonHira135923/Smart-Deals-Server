const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware Here
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@smart-deals-db.tav1enm.mongodb.net/?appName=Smart-Deals-DB`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const smartdb = client.db("Smart-Deals");
    const productcollection = smartdb.collection("allproducts");
    const bidscollection = smartdb.collection("mybids");

    // Product collection router all
    app.post("/products", async (req, res) => {
      const query = req.body;
      const result = await productcollection.insertOne(query);
      res.send(result);
    });

    app.get("/products", async (req, res) => {
      const cursor = productcollection.find();
      const allvalues = await cursor.toArray();
      res.send(allvalues);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productcollection.findOne(query);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productcollection.deleteOne(query);
      res.send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const newupdatedata = req.body;
      const updatedata = {
        $set: newupdatedata,
      };
      const options = {};
      const result = await productcollection.updateOne(
        query,
        updatedata,
        options
      );
      res.send(result);
    });

    // Bids Collection router all
    app.post("/bids", async (req, res) => {
      const query = req.body;
      const result = await bidscollection.insertOne(query);
      res.send(result);
    });

    app.get("/bids", async (req, res) => {
      const cursor = bidscollection.find();
      const allvalues = await cursor.toArray();
      res.send(allvalues);
    });

    app.get("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidscollection.findOne(query);
      res.send(result);
    });

    app.patch("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const newupdatebids = req.body;
      const updatebidsdata = {
        $set: newupdatebids,
      };
      const options = {};
      const result = await bidscollection.updateOne(
        query,
        updatebidsdata,
        options
      );
      res.send(result);
    });

    app.delete("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidscollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Smart Deals!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
