import React from "react";
import { Link } from "react-router-dom";
import "./App";

// import bg from './img/download.jpeg';
import "./App.css";

const logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFprRJ230odCgHV6wB3fEUzwVzZnO92PyTNw&usqp=CAU";
const bg =
  "https://image.shutterstock.com/image-photo/beautiful-young-woman-long-brown-600w-599357489.jpg";
export default function Input() {
  return (
    <div
      className="container mx-auto px-10  w-full h-screen "
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        width: "screen",
      }}
    >
      {/* navbar */}
      <div className="h-10 flex justify-end p-2">
        <img
          src={`${logo}`}
          alt="logo"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      {/* body */}
      <div className="h-screen flex items-center justify-center">
        <div className=" px-16 py-16  rounded-3xl" id="transp">
          <div className="p-2 mb-2 txt">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                stroke="gray"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input type="text" className="usrform px-1" placeholder="Email" />
          </div>
          <div className="p-2 mt-2 txt">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                stroke="gray"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input type="text" className="usrform px-1" placeholder="Password" />
          </div>
          <p className="flex justify-between vsmal">
            <span>Remember for me</span>
            <span>Remember for me</span>
          </p>
          <div className="m-5 flex justify-center">
            <Link to ="/product">
            <button className="px-12 py-2  bg-orange-600 rounded-xl text-white">
              Login
            </button>
            </Link>
          </div>
          <p className="flex justify-center">
            <span className="vsmal">
              Don't have an account?<u>sign up</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
