import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import App from "./GoogleLogin";

function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  //   useEffect
  useEffect(() => {
    if (user) {
      navigate("/welcome");
      toast("test");
    }
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/welcome");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(register(userData));
  };
  return (
    <div>
      <body class="m-0 p-0 justify-center items-center font-['Jost',sans-serif] overflow-hidden flex">
        <div class="h-screen">
          <div class="login w-[320px] h-[370px] mt-20 bg-[#fff] shadow-[0_10px_15px_rgba(179,179,179,0.7)]">
            <form onSubmit={handleLogin}>
              <label class="flex ml-10 font-bold pt-4 pb-1 text-3xl">
                Sign in
              </label>
              <p class="ml-10 pb-3 text-sm ">
                Explore the infinite possibilities
              </p>
              <input
                class="w-60 h-10 mx-auto my-3 text-[#573b8a] justify-center flex rounded-[4px] font-medium indent-1.5 border-[1px] border-b-[1px] border-b-[#949090] border-[#b4adad] mb-6 focus:bg-[#e0dede]"
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                required="required"
                onChange={onChange}
              />
              <input
                class="w-60 h-10 mx-auto my-3 text-[#573b8a] justify-center flex rounded-[4px] font-medium indent-1.5 border-[1px] border-b-[1px] border-b-[#949090] border-[#b4adad] mb-6 focus:bg-[#e0dede]"
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                required="required"
                onChange={onChange}
              />
              <input
                class="w-60 h-10 mx-auto my-3 mb-2 text-[#573b8a] justify-center flex rounded-[4px] font-medium indent-1.5 border-[1px] border-b-[1px] border-b-[#949090] border-[#b4adad] focus:bg-[#e0dede]"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                required="required"
                onChange={onChange}
              />

              <button
                class="mt-4 w-60 h-[40px] bg-gray-700 rounded block  mx-auto p-[10px] text-[1em]  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out font-medium text-white"
              >
                Sign in
              </button>
            </form>

            <App />
          </div>
        </div>
      </body>
    </div>
  );
}
export default SignIn;
