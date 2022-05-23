import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About";
import AllProduct from "./Component/Pages/AllProduct";
import Blog from "./Component/Pages/Blog";
import Login from "./Component/Pages/Login";
import Notpound from "./Component/Pages/Notpound";
import Registar from "./Component/Pages/Registar";
import Footer from "./Component/Shared/Footer";
import Loading from "./Component/Shared/Loading";
import Navber from './Component/Shared/Navber';

function App() {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    {loading ? (
      <Loading></Loading>
    ) : (
      <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product" element={<AllProduct></AllProduct>}></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registar" element={<Registar></Registar>}></Route>
        <Route path="*" element={<Notpound></Notpound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
    )}
    </>
  );
}

export default App;
