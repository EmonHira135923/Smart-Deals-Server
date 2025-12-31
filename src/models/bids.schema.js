import { ObjectId } from "mongodb";

// Create Bid Schema
export const createBid = (data) => {
  return {
    product: data.product ? new ObjectId(data.product) : null,

    buyer_image: {
      url: data.buyer_image?.url || data.buyer_image || null,
    },

    buyer_name: data.buyer_name,
    buyer_contact: data.buyer_contact,
    buyer_email: data.buyer_email,

    bid_price: data.bid_price,
    status: data.status || "pending",

    createdAt: new Date(),
    updatedAt: null,
  };
};
