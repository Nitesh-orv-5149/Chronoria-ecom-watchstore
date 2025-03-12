import React from 'react'
import Card from '../../shopnowcomps/Card'
import products from '../../data/products.json'
import { useEffect, useState } from 'react'

function Orders() {
    // Get all purchased items from localStorage
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [hasPurchases, setHasPurchases] = useState(false);

    // Function to load purchased items
    const loadPurchasedItems = () => {
        // Get the purchased items array from localStorage
        const purchasedIndexes = JSON.parse(localStorage.getItem("purchasedItems")) || [];
        console.log("Loading purchased items:", purchasedIndexes);
        
        // Convert indices to actual product objects
        const purchasedProducts = purchasedIndexes.map(index => {
            if (index >= 0 && index < products.length) {
                return products[index];
            }
            return null;
        }).filter(item => item !== null); // Remove any invalid products
        
        setPurchasedItems(purchasedProducts);
        setHasPurchases(purchasedProducts.length > 0);
    };

    useEffect(() => {
        // Load items on component mount
        loadPurchasedItems();
        
        // Add event listener to update when localStorage changes
        const handleStorageChange = (e) => {
            if (e.key === "purchasedItems") {
                console.log("purchasedItems changed in localStorage, reloading");
                loadPurchasedItems();
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    

    return (
        <>
           <h1 className="flex justify-center items-center mt-[1rem] p-[1rem] text-[2.5rem] ">You can view your orders here</h1>
           
           {hasPurchases ? (
                <div className="flex flex-wrap justify-center items-center mt-[2rem]">
                    {purchasedItems.map((product, index) => (
                        <Card 
                            key={index} 
                            cart={false} 
                            prdname={product.prdname} 
                            image={product.image} 
                            price={product.price} 
                        />
                    ))}
                </div>
           ) : (
                <div className="flex justify-center items-center h-[50vh]">
                    <h2 className="text-xl">No orders yet. Start shopping to see your orders here!</h2>
                </div>
           )}
        </>
    )
}

export default Orders;