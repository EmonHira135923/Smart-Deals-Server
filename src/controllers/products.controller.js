import { ObjectId } from "mongodb";
import { getProductCollection } from "../config/db.js";

// Create Products
export const createProductController = async (req, res) => {
  try {
    const productsCollection = getProductCollection();
    const query = req.body;
    const result = await productsCollection.insertOne(query);
    res.status(201).json({
      message: "Products Created Succesfully",
      success: true,
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: "Products not created yet.",
      success: false,
      err,
    });
  }
};

// Get Products
export const getProductController = async (req, res) => {
  const productsCollection = getProductCollection();
  const cursor = productsCollection.find();
  const result = await cursor.toArray();
  res.status(200).json(result);
};

// Get Products by id
export const getProductControllerbyID = async (req, res) => {
  const productsCollection = getProductCollection();
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.findOne(query);
  res.status(200).json(result);
};

// Update Products by id

export const updateProductControllerbyId = async (req, res) => {
  const productsCollection = getProductCollection();
  const id = req.params.id;
  const productsdata = req.body;
  const query = { _id: new ObjectId(id) };
  const updateproducts = {
    $set: productsdata,
  };
  const option = {};
  const result = await productsCollection.updateOne(
    query,
    updateproducts,
    option
  );
  res.status(200).json({ result });
};

// delete Products by id
export const deleteProductControllerbyId = async (req, res) => {
  const productsCollection = getProductCollection();
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.deleteOne(query);
  res.status(200).json({ result });
};

// latest-product
export const LatestProductController = async (req, res) => {
  try {
    const productsCollection = getProductCollection();
    const cursor = productsCollection.find().sort({ created_at: -1 }).limit(6);
    const result = await cursor.toArray();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const LatestProductControllerbyId = async (req, res) => {
  try {
    const productsCollection = getProductCollection();
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await productsCollection.findOne(query);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const MyProductController = async (req, res) => {
  try {
    const productsCollection = getProductCollection();
    const query = {};
    if (req.query.email) {
      query.email = req.query.email;
    }
    const cursor = productsCollection.find(query);
    const result = await cursor.toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};
