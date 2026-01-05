import { ObjectId } from "mongodb";
import { getBidsCollection } from "../config/db.js";

// created bids
export const bidsCreatedController = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const query = req.body;
    // Convert product ID to ObjectId if it exists
    if (query.product) {
      query.product = new ObjectId(query.product);
    }
    const result = await bidsCollection.insertOne(query);
    res.status(201).json({
      message: "Bid created succsfully",
      success: true,
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: "Bids not created yet",
      success: false,
      err,
    });
  }
};

// get bids
export const bidsGetController = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const query = {};
    if (query.email) {
      query.buyer_email = email;
    }
    const cursor = bidsCollection.find(query);
    const result = await cursor.toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// get bids by using id
export const bidsGetControllerbyId = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await bidsCollection.findOne(query);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// GetbidsusingProductID
// GetbidsusingProductID
export const GetbidsusingProductID = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const productid = req.params.productid;

    // ✅ Field name should match your inserted data (productId)
    const query = { productId: productid }; // String comparison, ObjectId na lagbe jodi tumi string hisabe pathao
    const cursor = bidsCollection.find(query).sort({ bid_price: -1 });
    const result = await cursor.toArray();

    res.status(200).send(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// update bids by using id
export const bidsUpdateControllerbyId = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const id = req.params.id;
    const bidsdata = req.body;
    const query = { _id: new ObjectId(id) };
    const updatebidsdata = {
      $set: bidsdata,
    };
    const option = {};
    const result = await bidsCollection.updateOne(
      query,
      updatebidsdata,
      option
    );
    res.status(200).json({
      message: "Updated Data Succesfully",
      success: true,
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: "Not Updated Data",
      success: false,
      err,
    });
  }
};

// delete bids by using id
export const bidsDeleteControllerbyId = async (req, res) => {
  try {
    const bidsCollection = getBidsCollection();
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await bidsCollection.deleteOne(query);
    res.status(200).json({
      message: "Bids Deleted Successfully",
      success: true,
      result,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};
