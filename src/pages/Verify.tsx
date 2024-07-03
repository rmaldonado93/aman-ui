import React, { useRef, useState } from "react";
import { CiLock } from "react-icons/ci";
import { logoImage, tandymImage } from "../assets";
import { useNavigate } from "react-router-dom";

/*
    TODO: Refactor using the composable pattern
      - Add the proper type for event
      - Extract the input change logic into its own function
      - Use formik for form handling
      - use the user context to share the user data to fill the Phone Number
*/

const Verify = () => {
  const [showButton, setShowButton] = useState(false);
  const [pin, setPin] = useState(Array(6).fill("")); // Array to hold 6 digits
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (event, index) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value) {
      const newPin = [...pin];
      newPin[index] = value[0]; // Only take the first digit if multiple digits are pasted
      setPin(newPin);
      // Move to the next input field if current input is filled
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
      // Check if all inputs are filled
      if (newPin.every((digit) => digit !== "")) {
        setShowButton(true);
        navigate("/confirm-page");
      } else {
        setShowButton(false);
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const newPin = [...pin];
      if (newPin[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
        const previousPin = [...pin];
        previousPin[index - 1] = "";
      
        setPin(previousPin);
      } else {
        newPin[index] = "";
        setPin(newPin);
      }
      setShowButton(false);
    }
  };

  return (
    <main className="w-full sm:w-[24rem] mx-auto">
      <div className=" pt-4">
        <div className="mx-auto px-3">
          <div className="relative">
            <img src={logoImage} className="w-28 mx-auto" />
          </div>
        </div>
        <div className="border-y border-gray-200 mt-5 text-xs font-medium text-gray-500 py-1 flex justify-center items-center gap-1">
          <span>
            <CiLock fontSize={15} />
          </span>
          Secured and powered by <img src={tandymImage} className="h-3" />
        </div>
        <section className="text-black px-3">
          <p className="text-[1.5rem] sm:text-[1.6rem] leading-8 text-black font-bold mt-8 text-left">
            Verify your phone
          </p>
          <p className="mt-4 text-left text-base text-TextColor font-medium w-[90%]">
            Verify your phone by typing the 6-digit code sent to{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              231-231-2323.
            </span>
          </p>
          <div className="flex justify-evenly mt-6">
            {pin.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-8 h-11 sm:w-10 sm:h-14 text-center text-lg border border-gray-400 rounded-md focus:border-green-800"
              />
            ))}
          </div>
          <button className="text-blue-600 text-lg w-full mt-8">Resend Code</button>
        </section>
      </div>
    </main>
  );
};

export default Verify;
