import { useEffect } from 'react'
import './App.css'
import FullscreenPremiumBackground from '../maincomps/FullscreenPremiumBackground.jsx'
import Header from '../maincomps/Header'
import Footer from '../maincomps/Footer'
import Navbox from '../maincomps/Navbox'
import { motion } from 'framer-motion'

function App() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden"; 
    document.body.style.overflow = "hidden"; 

    return () => {
      document.documentElement.style.overflow = "auto"; 
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <FullscreenPremiumBackground>
        <main className=" flex flex-col min-h-screen overflow-hidden "  >
          
          
          <motion.header  initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ease:'easeInOut', duration: 1 }} className='flex justify-center items-start '>
            <Header />
          </motion.header>
          <motion.section initial={{ opacity: 0}}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }} className="flex-grow flex justify-center items-center ">
            <Navbox />
          </motion.section>
          <motion.footer  initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0}}
                          transition={{ease:'easeInOut',  duration: 1 }} className=' p-5 flex justify-center items-end'>
            <Footer />
          </motion.footer>
        </main>
      </FullscreenPremiumBackground>
    </>
  )
}

export default App;
