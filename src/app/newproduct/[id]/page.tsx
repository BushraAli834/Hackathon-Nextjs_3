// // // import { sanityFetch } from '@/sanity/lib/live';
// // // import Query from '@/sanity/lib/queries';
// // // import imageUrlBuilder from '@sanity/image-url';
// // // import { notFound } from 'next/navigation';

// // // // Create an image URL builder instance
// // // const builder = imageUrlBuilder({
// // //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2cc93py9',
// // //   dataset: 'production',
// // // });

// // // function urlFor(source: any) {
// // //   return builder.image(source); // This will generate the correct image URL
// // // }

// // // // Define Product type
// // // type Product = {
// // //   _id: string;
// // //   name: string;
// // //   description: string;
// // //   price: number;
// // //   image: string;
// // //   category: string;
// // // };

// // // export default async function ProductDetailPage({ params }: { params: { id: string } }) {
// // //   const { id } = params;

// // //   // Fetch products
// // //   const productResponse = await sanityFetch({ query: Query });
// // //   const products: Product[] = productResponse.data;

// // //   // Find the product by ID
// // //   const product = products.find((item) => item._id === id);

// // //   if (!product) {
// // //     notFound(); // If product is not found, show 404 page
// // //   }

// // //   return (
// // //     <div className="p-8">
// // //       {/* Product Image */}
// // //       <div>
// // //         <img
// // //           src={product?.image ? urlFor(product.image).url() : "/placeholder.jpg"} // Fallback image
// // //           alt={product?.name || "Unnamed Item"}
// // //           className="w-full h-64 object-cover"
// // //         />
// // //       </div>

// // //       {/* Product Details */}
// // //       <div className="mt-6">
// // //         <h1 className="text-3xl font-bold text-gray-800">{product?.name || "Unnamed Item"}</h1>

// // //         {/* Product Category */}
// // //         <p className="text-gray-600 mt-2">{product.category}</p>

// // //         {/* Product Description */}
// // //         <p className="text-lg text-gray-700 mt-4">{product.description}</p>

// // //         {/* Price */}
// // //         <div className="flex items-center justify-between mt-4">
// // //           <span className="text-xl font-bold text-green-600">
// // //             ${product.price.toFixed(2)}
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { sanityFetch } from '@/sanity/lib/live';
// // import Query from '@/sanity/lib/queries';
// // import imageUrlBuilder from '@sanity/image-url';
// // import { notFound } from 'next/navigation';

// // // Create an image URL builder instance
// // const builder = imageUrlBuilder({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2cc93py9',
// //   dataset: 'production',
// // });

// // function urlFor(source: any) {
// //   return builder.image(source); // This will generate the correct image URL
// // }

// // // Define Product type
// // type Product = {
// //   _id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   image: string;
// //   category: string;
// // };

// // export default async function ProductDetailPage({ params }: { params: { id: string } }) {
// //   const { id } = params;

// //   // Fetch products
// //   const productResponse = await sanityFetch({ query: Query });
// //   const products: Product[] = productResponse.data;

// //   // Find the product by ID
// //   const product = products.find((item) => item._id === id);

// //   if (!product) {
// //     notFound(); // If product is not found, show 404 page
// //   }

// //   return (
// //     <div className="container mx-auto p-8 shadow-md shadow-black">
// //       <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
// //         {/* Product Image */}
// //         <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
// //           <img
// //             src={product?.image ? urlFor(product.image).url() : "/placeholder.jpg"} // Fallback image
// //             alt={product?.name || "Unnamed Item"}
// //             className="w-full h-96 object-cover rounded-lg shadow-md"
// //           />
// //         </div>

// //         {/* Product Details */}
// //         <div className="w-full lg:w-1/2 lg:pl-8">
// //           <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product?.name || "Unnamed Item"}</h1>
          
// //           {/* Product Category */}
// //           <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          
// //           {/* Product Description */}
// //           <p className="text-base text-gray-700 mb-6">{product.description}</p>
          
// //           {/* Price */}
// //           <div className="flex items-center justify-between mb-6">
// //             <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import { sanityFetch } from '@/sanity/lib/live';
// import Query from '@/sanity/lib/queries';
// import imageUrlBuilder from '@sanity/image-url';
// import { notFound } from 'next/navigation';

// // Create an image URL builder instance
// const builder = imageUrlBuilder({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2cc93py9',
//   dataset: 'production',
// });

// function urlFor(source: any) {
//   return builder.image(source); // This will generate the correct image URL
// }

// // Define Product type
// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
// };

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const { id } = params;

//   // Fetch products
//   const productResponse = await sanityFetch({ query: Query });
//   const products: Product[] = productResponse.data;

//   // Find the product by ID
//   const product = products.find((item) => item._id === id);

//   if (!product) {
//     notFound(); // If product is not found, show 404 page
//   }

//   return (
//     <div className="container mx-auto p-8 max-w-4xl mt-10 rounded-lg shadow-md">
//       <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
//         {/* Product Image */}
//         <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
//           <img
//             src={product?.image ? urlFor(product.image).url() : "/placeholder.jpg"} // Fallback image
//             alt={product?.name || "Unnamed Item"}
//             className="w-full h-96 object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="w-full lg:w-1/2 lg:pl-8">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product?.name || "Unnamed Item"}</h1>
          
//           {/* Product Category */}
//           <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          
//           {/* Product Description */}
//           <p className="text-base text-gray-700 mb-6">{product.description}</p>
          
//           {/* Price */}
//           <div className="flex items-center justify-between mb-6">
//             <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }









"use client"; // Ensure it's a client component

import { useState } from "react";
import { sanityFetch } from '@/sanity/lib/live';
import Query from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import { notFound } from 'next/navigation';

// Create an image URL builder instance
const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'avasnuuo',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source); // This will generate the correct image URL
}

// Define Product type
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch products
  const productResponse = await sanityFetch({ query: Query });
  const products: Product[] = productResponse.data;

  // Find the product by ID
  const product = products.find((item) => item._id === id);

  if (!product) {
    notFound(); // If product is not found, show 404 page
  }

  // Function to add product to cart
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl mt-10 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={product?.image ? urlFor(product.image).url() : "/placeholder.jpg"} // Fallback image
            alt={product?.name || "Unnamed Item"}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product?.name || "Unnamed Item"}</h1>
          
          {/* Product Category */}
          <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          
          {/* Product Description */}
          <p className="text-base text-gray-700 mb-6">{product.description}</p>
          
          {/* Price */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={addToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
