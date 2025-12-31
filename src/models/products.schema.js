// Create Product Schema
export const createProduct = (data) => {
  return {
    title: data.title,
    price_min: data.price_min,
    price_max: data.price_max,
    email: data.email,
    category: data.category,
    image: {
      url: data.image?.url || data.image || null,
    },
    status: data.status || "pending",
    location: data.location,
    seller_image: {
      url: data.seller_image?.url || data.seller_image || null,
    },
    seller_name: data.seller_name,
    condition: data.condition,
    usage: data.usage,
    description: data.description,
    seller_contact: data.seller_contact,
    createdAt: new Date(),
    updatedAt: null,
  };
};
