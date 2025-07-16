import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./Pages/Index1.jsx";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Faq from "./Pages/Faq";
import Shop from "./Pages/Shop";
import ShopDetials from "./Pages/ShopDetials";
import Testimonial from "./Pages/Testimonial";
import AgeFilter from "./Pages/AgeFilter.jsx";
import CategoryFilter from "./Pages/CategoryFilter.jsx";
import Events from "./Pages/Events.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/agefilter" element={<AgeFilter />} />
          <Route path="/categoryfilter" element={<CategoryFilter />} />
          <Route path="/shopdetails/:id" element={<ShopDetials />} />
          <Route path="/testimonail" element={<Testimonial />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
