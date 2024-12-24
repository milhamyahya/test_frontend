import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-11/12 xl:w-4/5 m-auto bg-none p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      <a href="#home" className="text-3xl font-bold text-gray-800">👑 CARTRIDGE KINGS</a>
        <div className="flex items-center space-x-4">
        <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none"
        />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-none hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            CART (1)
          </button>
        </div>
      </div>
      <div className="flex w-full mt-8">
        <button className="flex-1 px-4 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          HOME
        </button>
        <button className="flex-1 px-4 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          INK CARTRIDGE
        </button>
        <button className="flex-1 px-4 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          TONER CARTRIDGE
        </button>
        <button className="flex-1 px-4 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          CONTACT US
        </button>
        <button className="flex-1 px-4 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          LOGIN / REGISTER
        </button>
      </div>
    </nav>
  );
};
