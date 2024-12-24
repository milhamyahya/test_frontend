import React, { useState } from "react";

export const Hero = () => {
  const [selectedMenu, setSelectedMenu] = useState('menu1');

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="w-full h-96 bg-cover bg-center relative mt-8" style={{ backgroundImage: "url('img/bghero.jpg')" }}>
        {/* Form Section - Positioned over the hero image */}
        <div className="w-11/12 xl:w-4/5 m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-center text-white p-5 space-y-5">
            <h1 className="text-4xl font-semibold">FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</h1>
          </div>

          {/* Form Container */}
          <form className="space-y-6 bg-white">
            {/* Top Menu - Two Options */}
            <div className="flex w-full">
              <button
                onClick={() => setSelectedMenu('menu1')}
                className={`font-semibold w-full py-4 ${selectedMenu === 'menu1' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                3-Step Easy Search&reg;
              </button>
              <button
                onClick={() => setSelectedMenu('menu2')}
                className={`font-semibold w-full py-4 ${selectedMenu === 'menu2' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                Search By Serial Number
              </button>
            </div>

            {/* Dropdowns - Only show if a menu is selected */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
              <div className="col-span-1">
                <select className="w-full px-4 py-2 border border-gray-300 ">
                  <option>Select Option 1</option>
                  <option>Option 1.1</option>
                  <option>Option 1.2</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="w-full px-4 py-2 border border-gray-300 ">
                  <option>Select Option 2</option>
                  <option>Option 2.1</option>
                  <option>Option 2.2</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="w-full px-4 py-2 border border-gray-300 ">
                  <option>Select Option 3</option>
                  <option>Option 3.1</option>
                  <option>Option 3.2</option>
                </select>
              </div>
              <div className="col-span-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 border bg-orange-500 text-white rounded-none hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
