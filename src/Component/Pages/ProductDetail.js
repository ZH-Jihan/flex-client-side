import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetail from "../Hooks/useProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useProductDetail(id);
  return (
    <div class="bg-base-200">
      <h1 class="text-5xl font-bold">Box Office News!</h1>
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
              <img src="" alt="" />
            </div>
            <div class="stat p-4">
              <img src="" alt="" />
            </div>
            <div class="stat p-4">
              <img src="" alt="" />
            </div>
            <div class="stat p-4">
              <img src="" alt="" />
            </div>
            <div class="stat p-4">
              <img src="" alt="" />
            </div>
            <div class="stat p-4">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={()=>{navigate('/chackout')}} class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
