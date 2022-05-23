import { Link } from "react-router-dom";
import SocileLogin from '../Shared/SocileLogin';
 
const Login = () => {
  return (
    <section class="bg-blueGray-50">
      <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6 pb-0">
            <div class="text-center mb-6">
              <h6 class="text-blueGray-500 text-3xl font-bold">Log In with</h6>
            </div>
            <SocileLogin></SocileLogin>
            <div class="divider">OR</div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form className="pb-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <span class="text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div class="text-center mt-6">
                <button
                  class="btn text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
            </form>
            <span class="ml-2"
            >You don't have an account?
            <Link
              to="/registar"
              class="text-xs ml-2 text-blue-500 font-semibold"
              >Please Registar</Link>
              </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
