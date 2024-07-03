import React from "react";
import { FaGift, FaHandHoldingUsd, FaLock } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { IoFlash } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import { MdLock } from "react-icons/md";


/*
  TODO: Refactor using the composable pattern
    - Reutilize the CSS styles for repeated components
    - Extract the repeated components into their own components
*/

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/decision");
  };

  return (
    <main className="w-full sm:w-[24rem] mx-auto">
      <div className=" pt-4">
        <div className=" px-2 sm:px-5">
          <div className="mx-auto">
            <div className="relative">
              <img src={LogoImage} className="w-24 mx-auto" />
            </div>
          </div>
          <section className="text-black">
            <p className="text-[1.4rem] sm:text-2xl leading-8 text-black font-bold mt-8">
              A digital credit or debit card with best-in-class rewards
            </p>
            <ul className="mt-6 text-base text-start  font-medium">
              {/* List of images and text */}
              <li className="flex items-start space-x-1 sm:space-x-3">
                <FaHandHoldingUsd className="w-5 h-5" />
                <p>Earn 5 points per $ on every order</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                
                <FaGift className="w-6 h-6" />
                <p>1% of every order donated to global conservation efforts</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                <FaLock className="w-5 h-5" />
                <p>Connect your bank for secure repayment</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                <MdLock className="w-5 h-5" />
                <p>Support Sonic</p>
              </li>
              <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
                <IoFlash className="w-5 h-5" />
                <p>Get a decision with no hard credit pull</p>
              </li>
            </ul>
            {/* Two boxes */}
            <div className="flex gap-2 sm:gap-5 mt-6 text-black w-full text-base">
              {/* Box 1 */}
              <div className={boxCss} onClick={handleNavigation}>
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <FaCreditCard className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold">Credit</h3>
                  </div>
                  <p className="text-base  text-start mt-2">
                    Pay over time. Credit lines up to $5,000, subject to
                    approval.
                  </p>
                </div>
                <button className="mt-4 bg-black rounded-b-lg font-bold text-white py-2 text-sm">
                  Apply Now
                </button>
              </div>

              {/* Box 2 */}
              <div
                className={boxCss}
                onClick={() => navigate("/signup-decision")}
              >
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <RiHomeSmile2Fill
                      fontSize={22}
                      className=" text-yellow-500"
                    />
                    <h3 className="font-semibold">Debit </h3>
                  </div>
                  <p className="text-base mt-2">
                    Connect your bank and pay all at once up to $10,000.
                  </p>
                </div>
                <button className="mt-4 bg-black rounded-b-lg font-bold text-white py-2 text-sm">
                  Sign Upzdergth
                </button>
              </div>
            </div>
          </section>
        </div>
        <Link to="/verify-signin">
          <p className="text-base mt-10 cursor-pointer text-center">
            Already have an account?{" "}
            <span className="font-bold underline">Sign In</span>
          </p>
        </Link>
        <div
          className="flex items-center justify-center mt-10 space-x-3 py-3 rounded-b-xl mb-4"
          style={{
            backgroundImage: "linear-gradient(to right, #d6e4e2, #ffceb2)",
          }}
        >
          <IoRocketSharp className="w-5 h-5" />
          <p>
            <span className="font-semibold">5X</span> points on your first order
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;

const boxCss =
  " border border-black text-left rounded-lg flex flex-col justify-between w-1/2 cursor-pointer";
