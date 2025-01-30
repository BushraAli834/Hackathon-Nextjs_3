"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';


let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>]

function Products() {
 const products =   useSelector((state:any)=>state.product)
     
  return (
        <div className='mt-28'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around '>
                {
                  products.map((item:any,i:any)=>{
                    return(
                        <div key={i}>
                          <Link href={`/products/${item.slug}`}>
                          <Image src={item.image[0]} className='w-[290px] h-[290px] rounded-[20px]'  alt={item.title} width={200} height={200}></Image>
                          </Link>
                           <h2 className='font-bold'>{item.title}</h2>
                           {/* stars */}
                           <p className='flex justify-start items-center text-yellow-400'>{stars}</p>
                          <div className='flex space-x-3'>
                          <p className='font-bold'>{item.price}</p>
                          <p className='font-bold text-gray-400 line-through'>{item.discount}</p>
                          </div>
                        </div>
                    )
                  })  
                }
            </div>
        </div>
  )
}

export default Products