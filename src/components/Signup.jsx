import React, { useRef, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { hidesignpage } from "../utils/store/signSlice";
function Signup() {
  const dispatch = useDispatch();
  const [sign, setsign] = useState(true);
  const [showpassword, setshowpassword] = useState(false);
  const [error, seterror] = useState("");
  const name = useRef(null);
  const mail = useRef(null);
  const password = useRef(null);

  const Validate = (email, password) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }

    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    seterror(Validate(mail.current.value, password.current.value));
  };

  const handleSign = () => {
    dispatch(hidesignpage());
  };
  return (
    <div className="h-screen w-screen z-20 fixed top-0 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-1/2 lg:w-3/12 px-[3%] mt-52 md:mt-60 lg:mt-36 mx-[4%] md:mx-[25%] lg:mx-[35%] text-white absolute top-0 left-0 bg-black bg-opacity-70 rounded-3xl"
      >
        <div className="font-bold text-xl md:text-3xl mt-10 text-white">
          {sign ? "Create Account" : "Welcome Back"}
        </div>
        {sign && (
          <input
            ref={name}
            className="w-full mt-9 pl-6 h-14 bg-gray-600 outline-none rounded-xl"
            type="text"
            placeholder="Enter your name"
          />
        )}
        <input
          ref={mail}
          className="w-full mt-9 pl-6 h-14 bg-gray-600 outline-none rounded-xl"
          type="text"
          placeholder="Enter mail Id"
        />
        <div className="relative w-full overflow-hidden">
          <input
            ref={password}
            className="w-full mt-9 pl-6 h-14 bg-gray-600 outline-none rounded-xl"
            type={showpassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <div
            onClick={() => setshowpassword(() => !showpassword)}
            className=" absolute h-10 w-12 -mt-12 mb-4 ml-[84%] cursor-pointer"
          >
            {showpassword ? (
              <VscEye className="h-5 w-5 mt-3 ml-2" />
            ) : (
              <VscEyeClosed className="h-5 w-5 mt-3 ml-2" />
            )}
          </div>
        </div>
        <div className="ml-2 mt-1 text-red-500">{error}</div>
        <button className="w-full mt-9 mb-3 py-4 bg-violet-500 rounded-xl">
          {sign ? "Sign-Up" : "Sign-In"}
        </button>
        <div
          onClick={() => setsign(() => !sign)}
          className="mb-5 text-white cursor-pointer"
        >
          {sign ? "Already a user? Sign-In now" : "New to App? Sign-Up now"}
        </div>
      </form>
      <RxCross2
        onClick={handleSign}
        className="mt-44 md:mt-52 lg:mt-32 ml-[88%] md:mx-[76%] lg:mx-[60%] p-1 text-3xl text-white bg-gray-600 rounded-full"
      />
    </div>
  );
}
export default Signup;
