import React from 'react'

export default function Items() {
  return (
    <div>
        <div class="grid grid-cols-3 gap-4 p-5">
          <div>
            <div className="p-5 flex justify-center">
              <img
                src={
                  "https://m.media-amazon.com/images/I/61+hXDh7oIL._UL1000_.jpg"
                }
                style={{ height: "160px" }}
                alt=""
              />
            </div>
            <div className="pb-10 px-12 ">
              <div className="p-2 flex justify-between  rounded-md text-xl">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>1</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className=" col-span-2 p-5">
            <h2 className="my-3 text-gray-800 font-mono text-2xl">
              Querty Watch Lether Strap
            </h2>
            <p className="px-2 mb-2">
              <span>₹</span>
              <strong className="text-2xl font-bold">12,000</strong>
            </p>
            <p className="my-2">
              <strong className="text-gray-800 mr-1 text-xl">Color:</strong>
              <span className="text-gray-500 text-lg">Brown</span>
            </p>
            <p className="text-green-300 font-bold">in stock</p>
            <div>
              <button className="px-6 py-1 border-4 border-yellow-300 rounded-3xl text-yellow-400 font-bold my-5 mr-3">
                Delete
              </button>
              <button className="px-6 py-1 border-4 border-yellow-300 rounded-3xl bg-yellow-400 text-white font-bold my-5 mr-3">
                See more like this
              </button>
            </div>
          </div>
         
        </div>
        <div className="color-white border-b-2 border-gray-200"></div>
    </div>
    
  )
}
