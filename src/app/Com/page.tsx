"use client"

import React, { useState,useEffect } from 'react'


interface Component{
  name: string,
  image: string,
  description: string,
  price: number,
  sizes:string,
  shipmentstatus:string,
  trackingnumbers:number,
  id:string,
  

}
export default function product() {

  const [product,SetProduct] = useState<Component[]>([]);

  useEffect(()=>{

    const data = async () => {
      try{
        const response = await fetch('https://677ee6ff94bde1c1252df2e7.mockapi.io/inventory');
        const json = await response.json();
        SetProduct(json);
      }
      catch(error){
        console.error('Error:', error);
      }
    } 
    data();

  } ,[]) ;

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
  {product.map((item) => (
    <div className="bg-white rounded-lg shadow-lg w-64 overflow-hidden transform transition-transform hover:translate-y-2" key={item.id}>
      <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{item.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        <p className="font-semibold text-gray-800 mb-2">Price: ${item.price}</p>
        <p className="text-sm text-gray-600 mb-2">Sizes: {item.sizes}</p>
        <p className="text-sm text-gray-600 mb-2">Shipment Status: {item.shipmentstatus}</p>
        <p className="text-sm text-gray-600">Tracking Numbers: {item.trackingnumbers}</p>
      </div>
    </div>
  ))}
</div>

  )
}
