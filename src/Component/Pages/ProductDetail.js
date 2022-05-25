import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetail from "../Hooks/useProductDetail";
import Booking from "./Modal/Booking";

const ProductDetail = () => {
  const { id} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useProductDetail(id);
  console.log(product);
  const [order , setOrder] = useState(null)
  return (
    <div class="bg-base-200">
      <h1 class="text-5xl font-bold">{product.productdetail?.detailhedar}</h1>
      <p>{product.productdetail?.smallhedar}</p>
      <div class="hero  bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div >
          <img
            src={product.img}
            className=" md:max-w-2xl rounded-lg shadow-2xl"
            alt=""
          />
          <div class="stats shadow gap-4 md:max-w-2xl rounded-lg">
            <div class="stat p-4">
              <img src={product.menuimg?.img1} alt="" />
            </div>
            <div class="stat p-4">
              <img src={product.menuimg?.img2} alt="" />
            </div>
            <div class="stat p-4">
              <img src={product.menuimg?.img3} alt="" />
            </div>
            <div class="stat p-4">
              <img src={product.menuimg?.img4} alt="" />
            </div>
            <div class="stat p-4">
              <img src={product.menuimg?.img5} alt="" />
            </div>
            <div class="stat p-4">
              <img src={product.menuimg?.img6} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <div class="stats shadow gap-4 md:max-w-2xl rounded-lg">
            <div class="stat">
              <img src={product.listimg?.img1} alt="" />
            </div>
            <div class="stat">
              <img src={product.listimg?.img2} alt="" />
            </div>
            <div class="stat">
              <img src={product.listimg?.img3} alt="" />
            </div>
            <div class="stat">
              <img src={product.listimg?.img4} alt="" />
            </div>
            <div class="stat">
              <img src={product.listimg?.img5} alt="" />
            </div>
            <div class="stat">
              <img src={product.listimg?.img6} alt="" />
            </div>
          </div>
          <ul class="py-6">
            <li>{product.productdetail?.detaildetail?.detail1}</li>
            <li>{product.productdetail?.detaildetail?.detail2}</li>
            <li>{product.productdetail?.detaildetail?.detail3}</li>
            <li>{product.productdetail?.detaildetail?.detail4}</li>
            <li>{product.productdetail?.detaildetail?.detail5}</li>
          </ul>
          <label for="booking-modal" onClick={()=>{setOrder(product)}} class="btn btn-primary">Order</label>
        </div>
      </div>
    </div>
    {order && <Booking product={product} order={order} setOrder={setOrder}></Booking>}
    </div>
  );
};

export default ProductDetail;
