import { BrowserRouter, Routes, Route} from "react-router";

import Index from "./Pages/Index1.jsx";
import Index2 from "./Pages/Index2";
import Index3 from "./Pages/Index3";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogGrid from "./Pages/BlogGrid";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ErrorPjs from "./Pages/ErrorPjs";
import ErrorPjsNoImage from "./Pages/ErrorPjsNoImage";
import Faq from "./Pages/Faq";
import Shop from "./Pages/Shop";
import ShopDetials from "./Pages/ShopDetials";
import Testimonial from "./Pages/Testimonial";
import WishList from "./Pages/WishList";
import Category from "./Pages/Category.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Index/>}/>
        <Route  path="/index2" element={<Index2/>}/>
        <Route  path="/index3" element={<Index3/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/blog" element={<Blog/>}/>
        <Route  path="/blogrid" element={<BlogGrid/>}/>
        <Route  path="/blogdetails" element={<BlogDetails/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/checkout" element={<CheckOut/>}/>
        <Route  path="/errorpjs" element={<ErrorPjs/>}/>
        <Route  path="/errorpjsno-image" element={<ErrorPjsNoImage/>}/>
        <Route  path="/faq" element={<Faq/>}/>
        <Route  path="/shop" element={<Shop/>}/>
        <Route  path="/category" element={<Category/>}/>
        <Route  path="/shopdetails/:id" element={<ShopDetials/>}/>
        <Route  path="/testimonail" element={<Testimonial/>}/>
        <Route  path="/wishlist" element={<WishList/>}/>


      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
