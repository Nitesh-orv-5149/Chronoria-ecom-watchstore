import Card from "../../shopnowcomps/Card";
import products from "../../data/products.json";
import './Shopnow.css' 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shopnow = () => {
    const [List,setList] = useState([]);
    useEffect(() => {
        setList(products);
    }, []);

    const [Count,setCount] = useState(() => Number(localStorage.getItem('cartCount')) || 0);
    useEffect(() => {
        localStorage.setItem('cartCount', Count);
    },[Count]);

    // ✅ Listen for changes to localStorage in other tabs/pages
    useEffect(() => {
      const syncCart = (event) => {
        if (event.key === "cartCount") {
          setCount(Number(event.newValue));
        }
      };
      
      window.addEventListener("storage", syncCart);
      return () => window.removeEventListener("storage", syncCart);
    }, []);

    const addToCart = (index) => {
        const savedIndexes = JSON.parse(localStorage.getItem("selectedIndexes")) || [];
        const updatedIndexes = [...savedIndexes, index]; // ✅ Append new index
        localStorage.setItem("selectedIndexes", JSON.stringify(updatedIndexes)); // ✅ Save updated array
        setCount(Count + 1); // ✅ Update cart count
    };

    const [Index,setIndex] = useState(0);
    useEffect(() => {
        localStorage.setItem('itemindex', Index);
    },[Index]);
    

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>  
        <div className="flex m-[1rem] gap-[2rem] justify-between items-center lg:text-[2rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem] ">
            <div className="flex flex-row items-center  ">
                <h1 className="" onClick={() => setIsOpen(true)}>SHOP</h1>
                <i className="fa-solid fa-store -mt-[1.2rem] ml-[1rem]" ></i>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
                <h2 className=" ">view your Cart</h2>
                <Link to="/cart"><div data-count={Count} id="carticon" className="hover:text-[var(--sec)] fa-solid fa-cart-shopping"></div></Link>
            </div>
            <div className="flex gap-[1rem]">
                <h2  className=''>home</h2 >
                <Link to={'/'} className="fa-solid fa-house hover:text-[var(--sec)]"></Link>
            </div>
            
            <div className="flex gap-[1rem]">
              <button  className="hover:scale-[1.2] transition-all duration-300 ease-in-out "><i className="fa fa-search"></i></button>
              <input placeholder="Search" type="search" name="search" className="text-[var(--dark)] text-start pl-[1rem] rounded-[2rem] bg-[var(--light)]"/>
            </div>
            
        </div>
        <div className="p-[1rem] pt-[1rem] gap-[2rem] flex flex-wrap justify-center ">
          {List.map((product, index) => (
              <Card fn={() => addToCart(index)}  // ✅ Now, index is correctly passed
              key={index} 
              cart={true}
              f2={() => localStorage.setItem('itemindex',index)}
              prdname={product.prdname} 
              image={product.image} 
              price={product.price}
              add={() => addToCart(index)}
              className={''}
                
               />
          ))}
        </div>

      </>
    )

}

export default Shopnow;