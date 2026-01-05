import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@smart-deals-db.tav1enm.mongodb.net/?appName=Smart-Deals-DB`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
let productsCollection;
let bidsCollection;

export const connectDB = async () => {
  try {
    // await client.connect();
    db = client.db("Smart_Deals_Management");
    productsCollection = db.collection("products");
    bidsCollection = db.collection("mybids");
    console.log("MongoDb Conneted succesfully");
  } catch (err) {
    console.log("MongoDB not connected", err.message);
    // process.exit(1);
  }
};

export const getDb = () => db;
export const getProductCollection = () => productsCollection;
export const getBidsCollection = () => bidsCollection;
