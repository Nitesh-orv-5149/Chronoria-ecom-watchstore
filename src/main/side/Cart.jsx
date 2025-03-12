import { useState, useEffect } from "react";
import Card from "../../shopnowcomps/Card";
import products from "../../data/products.json";
import { Link } from "react-router-dom";

function Cart() {
    const [Count, setCount] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([]);
    const [List, setList] = useState([]);

    // ✅ Load cart count
    useEffect(() => {
        const savedCount = Number(localStorage.getItem("cartCount")) || 0;
        setCount(savedCount);
    }, []);

    // ✅ Load `selectedIndexes` from `localStorage` and update when changed
    useEffect(() => {
        const syncCart = () => {
            const savedIndexes = JSON.parse(localStorage.getItem("selectedIndexes")) || [];
            setSelectedIndexes(savedIndexes);
        };

        syncCart(); // ✅ Load on mount
        window.addEventListener("storage", syncCart); // ✅ Listen for storage updates
        return () => window.removeEventListener("storage", syncCart);
    }, []);

    // ✅ Fetch selected products, filter out invalid indexes
    useEffect(() => {
        if (selectedIndexes.length > 0) {
            const selectedProducts = selectedIndexes
                .map(index => products[index])
                .filter(product => product !== undefined); // ✅ Remove invalid indexes
            setList(selectedProducts);
        }
    }, [selectedIndexes]);

    const uniqueList = List.filter(
        (product, index, self) => 
          index === self.findIndex((p) => p.prdname === product.prdname)
      );

    const countMap = {};
    List.forEach((product) => {
        countMap[product.prdname] = (countMap[product.prdname] || 0) + 1;
    })

    const addToCart = (index) => {
        const productToAdd = uniqueList[index];
        const originalIndex = products.findIndex((product) => product.prdname === productToAdd.prdname);

        if (originalIndex !== -1) {
            const savedIndexes = JSON.parse(localStorage.getItem("selectedIndexes")) || [];
            const updatedIndexes = [...savedIndexes, originalIndex]; // ✅ Append the original index
            
            // Update localStorage
            localStorage.setItem("selectedIndexes", JSON.stringify(updatedIndexes));
            localStorage.setItem("cartCount", String(updatedIndexes.length));
            
            // Update state
            setSelectedIndexes(updatedIndexes);
            setCount(updatedIndexes.length);
        }
    };

    const removeFromCart = (index) => {
        const productToRemove = uniqueList[index];
        const savedIndexes = JSON.parse(localStorage.getItem("selectedIndexes")) || [];
        const productIndex = savedIndexes.findIndex(idx => products[idx] && products[idx].prdname === productToRemove.prdname )
        if (productIndex !== -1) {
            const updatedIndexes = [
                ...savedIndexes.slice(0, productIndex),
                ...savedIndexes.slice(productIndex + 1)
            ];
            localStorage.setItem('selectedIndexes', JSON.stringify(updatedIndexes));
            localStorage.setItem('cartCount', String(updatedIndexes.length));

            // Update state
            setSelectedIndexes(updatedIndexes);
            setCount(updatedIndexes.length);
            
        }
    }

    return (
        <div className="flex flex-col m-[1rem] gap-[2rem] justify-center items-center lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] text-[1.7rem] ">
            <div className="w-full flex items-center justify-between px-8">
                <h2 className=" mx-auto">View Your Cart</h2>
                <div className="flex gap-4 items-center">
                    <p>home</p>
                    <Link to="/" className="fa-solid fa-house hover:text-[var(--sec)]"></Link>
                </div>
            </div>

            <p className="">You can view the {Count} items you added here:</p>

            <section className="p-[1rem] pt-[1rem] gap-[2rem] flex flex-wrap justify-center">
                {uniqueList.map((product, index) => (
                    <Card key={index} cart={true} add={() => addToCart(index)} sub={() => removeFromCart(index)} percount={countMap[product.prdname]} prdname={product.prdname} image={product.image} price={product.price} />
                ))}
            </section>

            {uniqueList.length === 0 && (
                <div className=" text-center p-6">
                    <p>Your cart is empty</p>
                    <Link to="/shopnow" className=" underline mt-4 block">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
