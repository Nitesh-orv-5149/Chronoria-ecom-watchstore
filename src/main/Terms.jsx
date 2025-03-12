import { motion } from "framer-motion";

function Terms() {
    return (
        <motion.div className="p-[1rem] flex justify-center items-center flex-col" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <h1 className="lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[3rem] p-[2rem] mt-[5rem] ">TERMS & CONDITIONS</h1>
            <motion.p  initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                            className=" text-[2rem] p-[5rem] pt-[rem]">
            Welcome to Chornoria. These Terms & Conditions govern your use of our website, products, and services. By accessing or purchasing from Chornoria, you agree to abide by these terms. <br />

            1. General Terms <br />

            By using our website, you confirm that you are at least 18 years old or have the permission of a legal guardian. We reserve the right to update, modify, or discontinue any part of our website or services without prior notice. Your use of this website and purchases from Chornoria indicate your acceptance of these terms. <br />

            2. Product Authenticity & Warranty <br />

            All watches sold by Chornoria are 100% authentic and sourced from authorized distributors or manufacturers. Every timepiece comes with a manufacturer’s warranty if applicable and an authenticity guarantee. Warranty terms vary depending on the brand. Customers are advised to review the specific warranty conditions provided with their purchase. <br />

            3. Pricing & Payments <br />

            All prices listed on our website are in Currency and include applicable taxes unless stated otherwise. We reserve the right to update prices at any time without prior notice. Payments must be made through our secure payment gateways. We accept Credit/Debit Cards, Net Banking, UPI, Wallets, etc. Orders will only be processed once full payment is received. <br />

            4. Orders & Shipping <br />

            Once an order is placed, you will receive an order confirmation via email. We aim to process and ship orders within 7 business days. However, delivery times may vary based on location and availability.. Shipping costs, delivery estimates, and tracking information will be provided at checkout. Chornoria is not responsible for delays caused by courier services, customs, or unforeseen circumstances. <br />

            5. Returns, Exchanges & Cancellations <br />

            We accept returns/exchanges within 1 week of delivery, provided the watch is unused, unworn, and in its original packaging with all tags and accessories. Refunds will be processed only after a thorough inspection of the returned product. Customers must cover the return shipping costs unless the product was defective or incorrectly shipped. Order cancellations can only be made before shipment. Once shipped, the order cannot be canceled. <br />

            6. Limitation of Liability <br />

            Chornoria is not responsible for any indirect, incidental, or consequential damages arising from the use of our website or products. While we strive for accuracy, we do not guarantee that all product descriptions, images, or pricing information are error-free. <br />

            7. Intellectual Property <br />

            All content on this website, including images, text, logos, and designs, is the intellectual property of Chornoria and may not be copied or used without permission. Unauthorized use of our brand name or materials may result in legal action. <br />

            8. Privacy Policy <br />

            We value your privacy and take necessary measures to protect your personal data. Please refer to our Privacy Policy for details on data collection, usage, and security. <br />

            9. Governing Law <br />

            These Terms & Conditions are governed by the laws of Your Country/State. Any disputes arising from these terms shall be resolved in the courts of Your Jurisdiction. <br />
            </motion.p>
        </motion.div>
    )

}

export default Terms;