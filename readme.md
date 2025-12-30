Database Collections

1. Products Collection (Product Listings)
   Field Type Description
   \_id ObjectId Auto-generated ID
   title String Item name
   price_min Number Minimum acceptable price
   price_max Number Maximum asking price
   email String Seller's email
   category String e.g., Electronics, Furniture
   created_at ISODate Timestamp of posting
   image String (URL) Item photo
   status String pending / sold
   location String City or area
   seller_image String (URL) Seller profile pic
   seller_name String Seller’s full name
   condition String fresh / used
   usage String e.g., "6 months old"
   description String Full details
   seller_contact String Phone or contact

2. Bids Collection (Buyer Offers)
   Field Type Description
   \_id ObjectId Unique bid ID
   product ObjectId Reference to Products.\_id
   buyer_image String (URL) Buyer’s profile pic
   buyer_name String Buyer’s name
   buyer_contact String Buyer’s phone
   buyer_email String Buyer’s email
   bid_price Number Offer amount
   status String pending / confirmed
