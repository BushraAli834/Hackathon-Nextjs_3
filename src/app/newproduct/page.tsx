

import { sanityFetch } from '@/sanity/lib/live';
import Query from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url'; 
import Link from 'next/link';
import React from 'react';

type Pro = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'avasnuuo',
    dataset: 'production',
});

function urlFor(source: any) {
    return builder.image(source); // This will generate the correct image URL
}

export default async function page() {
    const productResponse = await sanityFetch({ query: Query });
    const products: Pro[] = productResponse.data;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
            {
                products.map((product) => (
                    <Link href={`/newproduct/${product._id}`}>
                    <div 
                        key={product.name} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
                    >
                        <img 
                            src={urlFor(product.image).url()} 
                            alt={product.name} 
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                                <span className="text-sm text-gray-500">{product.category}</span>
                            </div>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    </Link>
                ))
            }
        </div>
    );
}