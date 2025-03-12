import React from 'react'
import Card from './Card'
import products from '../data/products.json'
import { useEffect, useState  } from 'react'

const Buy = () => {

    const itemIndex = Number(localStorage.getItem('itemindex'));

    const [List,setList] = useState([]);
    useEffect(() => {
        setList([products[itemIndex]]);
    }, []);
    

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {List.map((product, index) => (
                    <Card key={index} cart={false} prdname={product.prdname} image={product.image} price={product.price} />
                ))}
      </div>
      
    </>
  )
}

export default Buy