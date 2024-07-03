import React, { useRef, useState } from "react";
import { IoFlash, IoRocketSharp } from "react-icons/io5";
import { PiCursorClickFill } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { flagImage, logoImage, tandymImage } from "../assets";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/*
  TODO: refactor using the composable pattern
    - add the proper type for event
    - extract the input change logic into its own function
    - use formik for form handling
*/

const Decision = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef(null);

  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    let formattedNumber = input;
    if (input.length > 6) {
      formattedNumber = `(${input.slice(0, 3)}) ${input.slice(
        3,
        6
      )} - ${input.slice(6, 10)}`;
    } else if (input.length > 3) {
      formattedNumber = `(${input.slice(0, 3)}) ${input.slice(3, 6)}`;
    } else if (input.length > 0) {
      formattedNumber = `(${input}`;
    }
    setPhoneNumber(formattedNumber);
    if (input.length >= 10) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    if (input.length > 0) {
      setInputFocused(true);
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    if (phoneNumber.length === 0) {
      setInputFocused(false);
    }
  };

  return (
    <main className="w-full sm:w-[24rem] mx-auto">
      <div className=" pt-4 text-center">
        <div className="mx-auto px-3">
          <div className="relative">
            <img src={logoImage} className="w-24 mx-auto" />
          </div>
        </div>
        <div className="border-y border-gray-200 mt-5 text-xs font-medium text-gray-500 py-1 flex justify-center items-center gap-1">
          <span>
            <CiLock fontSize={15} />
          </span>
          Secured and powered by <img src={tandymImage} className="h-3" />
        </div>
        <section className="text-black px-3">
          <p className="text-[1.4rem] sm:text-2xl leading-8 text-black font-bold  mt-8 text-left">
            Your phone number is your digital card
          </p>
          <p className="mt-4 text-left text-base text-TextColor font-medium w-[90%]">
            We use your phone number to securely identify you only when you log
            in and pay.
          </p>
          <div className="relative border-t-[16px] rounded-t-md input-container mt-5">
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-4 ${
                isInputFocused ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={flagImage} className="w-5 h-4" />
            </span>
            <input
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              ref={inputRef}
              type="text"
              name="phone"
              id="phone"
              value={phoneNumber}
              className="peer h-10 text-sm w-full bg-transparent pl-10  text-gray-900 placeholder-transparent focus:outline-none  border-b  border-gray-500 focus:border-b-2 focus:border-black font-normal"
              placeholder="(200) 106 - 2105"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 -top-2  text-xs transition-all peer-placeholder-shown:text-sm  peer-placeholder-shown:top-2 peer-focus:-top-2  peer-focus:text-xs input-label"
            >
              Mobile Phone Number
            </label>
          </div>

          <div className="mt-6 text-base text-start border border-gray-500 rounded-lg">
            {/* List of images and text */}
            <ul className="pl-1 sm:pl-3 mt-5 text-TextColor font-medium text-[15px] sm:text-base">
              <li className="flex items-start space-x-1 sm:space-x-3">
                <IoFlash className="w-5 h-5" />
                <p>Get a decision with no hard credit pull</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                <PiCursorClickFill className="w-5 h-5" />
                <p>Fast & digital - no more plastic cards</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                <FaGift className="w-6 h-6" />
                <p>1% of every order donated to global conservation efforts</p>
              </li>
            </ul>
            <div
              className="flex items-center justify-start pl-1 sm:pl-3 py-3 space-x-3 mt-4 rounded-b-lg text-TextColor"
              style={{
                backgroundImage: "linear-gradient(to right, #d6e4e2, #ffceb2)",
              }}
            >
              <IoRocketSharp className="w-5 h-5" />
              <p>
                <span className="font-semibold">5X</span> points on your first
                order
              </p>
            </div>
          </div>

          {showButton ? (
            <button
              className="bg-black  cursor-pointer border-none  mx-auto text-base font-semibold mt-8 w-full text-white rounded-3xl py-2  mb-8"
              onClick={() => navigate("/verify")}
            >
              Get a Decision Now
            </button>
          ) : (
            <button className="bg-disableBtn opacity-[0.5] hover:opacity-100 hover:bg-[#8a9a9b] cursor-default border-none  mx-auto text-base font-semibold mt-8 w-full text-white rounded-3xl py-2  mb-8">
              Get a Decision Now
            </button>
          )}
        </section>
      </div>
    </main>
  );
};

export default Decision;
