import React from 'react'
import { Link } from 'react-router-dom'
import Modal from "./Modal";
import products from '../data/products.json'
import { motion } from 'framer-motion';

const Card = ({className, fn, f2, prdname, image, price, cart, percount, add, sub }) => {
  
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [buyStatus,setbuyStatus] = React.useState(false);
    let status = buyStatus;

    // Get the current item index
    const itemIndex = Number(localStorage.getItem('itemindex'));

    const Cart = <>
                 <button onClick={fn} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-[1rem] md:text-[0.9rem] sm:text-[0.8rem] p-[0.3rem] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                 <div className='lg:-ml-[1rem] md:-ml-[1rem] sm:-ml-0 lg:text-[2rem] md:text-[1.5rem] sm:text-[1.3rem] text-[3rem] flex flex-row ' >
                    <button onClick={sub} className='hover:text-[var(--sec)]' >-</button>
                    <button onClick={add} className='hover:text-[var(--sec)]' >+</button>
                    <p>{percount}</p>
                 </div>
                 </>

    const handlePurchase = () => {
        setbuyStatus(true);

        let purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

        let indexToAdd = -1;

        // Find product index dynamically
        for (let i = 0; i < products.length; i++) {
            if (products[i].prdname === prdname) {
                indexToAdd = i;
                break;
            }
        }

        console.log("Trying to add product index:", indexToAdd); // Debugging log

        if (indexToAdd >= 0 && !purchasedItems.includes(indexToAdd)) {
            purchasedItems.push(indexToAdd);
            localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));

            console.log("Updated purchased items:", purchasedItems); // Debugging log

            // 🔥 Force update in Orders.jsx
            window.dispatchEvent(new Event("storage"));
        }
    };

  
    return (
    <>
      <motion.div   initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    
                    transition={{ duration: 0.5, delay: 0.5 }}
                className={`${className} w-[23rem] sm:w-1/3 md:w-1/4 lg:w-1/5 text-[1.5rem] p-2 font-sans bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}>

              <img className="sm:p-2 md:p-4 lg:p-6 rounded-t-lg" src={image} alt="product image" />
          <div className="px-5 pb-5">
              <Link to={`/shopnow/buy/${prdname}`} ><h2 onClick={f2}  className="lg:text-[1.2rem] md:text-[0.9rem] sm:text-[0.8rem] font-semibold tracking-tight">{prdname}</h2></Link>

              <div className="flex items-center mt-2.5 mb-5">
                  {/* stars */}
                  <div className="scale-75 -ml-3 flex items-center space-x-1 rtl:space-x-reverse">
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      {/* Rest of stars SVG code */}
                  
                  <span className="scale-75 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                  </div>
                  <span className="lg:text-[1.2rem] md:text-[0.9rem] sm:text-[0.8rem] font-bold">$ {price}</span>
              </div>
              
              <div className="flex gap-3 items-center justify-between">
                  {cart ? Cart : null }
                  <button onClick={() => setIsModalOpen(true)}  className="md:-ml-[1rem] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-[1.2rem] md:text-[0.9rem] sm:text-[0.8rem] p-2 text-center">BUY</button>
                  
              </div>

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
                  <div className='flex flex-col justify-center items-center'>
                      <h2 className="p-4 text-[3rem]">ARE YOU SURE <br /> TO BUY THIS</h2>
                      {buyStatus ? 
                        <div className='flex items-center justify-center p-2 text-[2rem] rounded-lg bg-emerald-600 text-[var(--dark)] font-sans'>thanks for purchasing</div> 
                        : 
                        <button 
                            onClick={handlePurchase}  
                            className='flex items-center justify-center p-2 text-[2rem] rounded-lg bg-emerald-600 text-[var(--dark)] font-sans hover:bg-emerald-300'
                        >
                            Yes buy
                        </button>
                      }
                  </div>
              </Modal>
          </div>
      </motion.div>
    </>
  )
}

export default Card