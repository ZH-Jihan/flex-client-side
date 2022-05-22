import { Route, Routes } from "react-router-dom";
import About from "./Component/Pages/About";
import Blog from "./Component/Pages/Blog";
import Login from "./Component/Pages/Login";
import Home from "./Component/Shared/Home/Home";
import Navber from './Component/Shared/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
