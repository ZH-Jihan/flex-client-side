import React from 'react';
import { Link } from 'react-router-dom';
import SocileLogin from '../Shared/SocileLogin';

const Registar = () => {
    return (
<section class=" bg-blueGray-50">
<div class="w-full lg:w-6/12 px-4 mx-auto pt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
    
    <div class="rounded-t mb-0 px-6 py-6">
    <div class="flex-auto px-4 lg:px-10">
    <div class="text-center mb-3">
        <h6 class="text-blueGray-500 text-3xl font-bold">
          Sign up with
        </h6>
      </div>
      <form>
        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password"> Name</label>
          <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name"/>
        </div>

        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Email</label>
          <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"/>
        </div>

        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Password</label>
          <input type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"/>
        </div>

        <div className='pb-4'>
          <label class="inline-flex items-center cursor-pointer">
            <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
            <span class="ml-2 text-sm font-semibold text-blueGray-600">
              I agree with the
              <a href="javascript:void(0)" class="text-pink-500">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
        <span class="ml-2"
            >You have an account?
            <Link
              to='/login'
              class="text-xs ml-2 text-blue-500 font-semibold"
              >Login here</Link>
              </span>
        <div class="text-center mt-6">
          <button class="btn text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
            Create Account
          </button>
        </div>
      </form>
    </div>
    <div class="divider">OR</div>
      <SocileLogin></SocileLogin>
    </div>
  </div>
</div>
</section>
    );
};

export default Registar;