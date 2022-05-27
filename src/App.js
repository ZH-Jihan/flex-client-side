import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Order from "./chack";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About";
import AllProduct from "./Component/Pages/AllProduct";
import Blog from "./Component/Pages/Blog";
import Chackout from "./Component/Pages/Chackout";
import Addproduct from "./Component/Pages/Dashbord/Addproduct";
import Addreview from "./Component/Pages/Dashbord/Addreview";
import Dashbord from "./Component/Pages/Dashbord/Dashbord";
import MakeAdmin from "./Component/Pages/Dashbord/MakeAdmin";
import OrderTabel from "./Component/Pages/Dashbord/OrderTabel";
import Pofile from "./Component/Pages/Dashbord/Pofile";
import Login from "./Component/Pages/Login";
import Payment from "./Component/Pages/Modal/Payment";
import Notpound from "./Component/Pages/Notpound";
import ProductDetail from "./Component/Pages/ProductDetail";
import Registar from "./Component/Pages/Registar";
import Footer from "./Component/Shared/Footer";
import Loading from "./Component/Shared/Loading";
import Navber from './Component/Shared/Navber';
import RequireAuth from "./Component/Shared/RequireAuth";

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
        <Route path="/check" element={<Order></Order>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/product" element={<AllProduct></AllProduct>}></Route>
        <Route path="/dashbord" element={<RequireAuth><Dashbord></Dashbord></RequireAuth>}>
          <Route index element={<Pofile></Pofile>}></Route>
          <Route path="/dashbord/myprofile" element={<Pofile></Pofile>}></Route>
          <Route path="/dashbord/myreview" element={<Addreview></Addreview>}></Route>
          <Route path="/dashbord/addproduct" element={<Addproduct></Addproduct>}></Route>
          <Route path="/dashbord/makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="/dashbord/myorder" element={<OrderTabel></OrderTabel>}></Route>
        </Route>
        <Route path="/product/:id" element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path="/chackout" element={<RequireAuth>
          <Chackout></Chackout>
        </RequireAuth>}></Route>
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
