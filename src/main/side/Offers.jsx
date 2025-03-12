function Offers() {
    return (
        <div className="mt-[2rem] text-[2rem] flex flex-col justify-center items-center ">
            <h1 className="text-[3.5rem]">Offers</h1>
            <ul className="list-disc mt-[3rem]">
                <li>
                    <h3>💎 Welcome Offer</h3>
                    <p>Use code: <strong>" WELCOME10 "</strong> to get <strong>10% OFF</strong> on your first purchase.<br/> 
                    (Valid for new customers only)</p>
                </li>
                <li>
                    <h3>🚀 Flash Sale</h3>
                    <p>Use code: <strong>" FLASH20 "</strong> to get <strong>20% OFF</strong> on select models.<br/> 
                    (Offer valid for 24 hours only)</p>
                </li>
                <li>
                    <h3>💳 EMI & Finance Offer</h3>
                    <p>Use code: <strong>" EMI2025 "</strong> to avail <strong>0% EMI</strong> on selected brands.<br/> 
                    (Terms & conditions apply)</p>
                </li>
                
            </ul>
            
        </div>
    )

}

export default Offers;