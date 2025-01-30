import { defineQuery } from "next-sanity";

// Define the query for food products
const Query = defineQuery(`
*[_type == "products"] {
  _id,
  name,
  description,
  price,
  image,
  category
}


`);

export default Query;