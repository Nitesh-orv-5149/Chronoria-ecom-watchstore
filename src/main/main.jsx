import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// importinglinks
import About from './About.jsx'
import Contact from './Contact.jsx'
import Terms from './Terms.jsx'
import Faqs from './Faqs.jsx'
import Cart from './side/Cart.jsx'
import Profile from './side/Profile.jsx'
import Categories from './side/Categories.jsx'
import Offers from './side/Offers.jsx'
import Orders from './side/Orders.jsx'
import Shopnow from './side/Shopnow.jsx'
import Services from './side/Services.jsx' 
import Buy from '../shopnowcomps/Buy.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const itemIndex = Number(localStorage.getItem('itemindex'));

const router = createBrowserRouter([
  {path: "/",element: <App />},
  {path: "/about",element: <About />},
  {path: "/contact",element: <Contact />},
  {path: "/terms",element: <Terms />},
  {path: "/faqs",element: <Faqs />},
  {path: "/cart",element: <Cart />},
  {path: "/profile",element: <Profile />},
  {path: "/categories",element: <Categories />},
  {path: "/offers",element: <Offers />},
  {path: "/orders",element: <Orders />},
  {path: "/shopnow",element: <Shopnow />},
  {path: "/services",element: <Services />},
  {path: "/shopnow/buy/:id",element: <Buy />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
