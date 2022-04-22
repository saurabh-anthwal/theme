import React from "react";
import "./App.css";
import Items from "./Items";

const logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFprRJ230odCgHV6wB3fEUzwVzZnO92PyTNw&usqp=CAU";
export default function Product() {
  return (
    <div className="container px-24">
      <div className="flex justify-between pt-5">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            stroke="yellow"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <span>
          {" "}
          <img
            src={`${logo}`}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
        </span>
      </div>

      <div className=" ">
        <div className="p-2 border-gray-200 border-2 bg-gray-100 ">
          <span>
            <svg
              style={{ display: "inline" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="gray"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="search"
            className="h-10 p-5"
            placeholder="search"
            style={{ width: "95%", outline: "none", background: "transparent" }}
          />
          <span>
            <svg
              style={{ display: "inline" }}
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              stroke="gray"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </div>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
      
      </div>
    </div>
  );
}
