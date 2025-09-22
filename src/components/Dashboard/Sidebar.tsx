'use client';

import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from "next/image";

export default function Sidebar() {
  const [active, setActive] = useState('Expenses');
  const [sidebar, setSidebar] = useState(false);

  const MenuItems = ['Dashboard', 'Expenses', 'Wallets', 'Summary', 'Account', 'Settings'];

  return (
    <>
      {/* Mobile menu icon */}
      
      <div className="md:hidden fixed top-0 left-0 w-full shadow h-15 bg-gray-900 flex justify-between items-center">
        
        <Menu
        className="w-8 h-8 text-white cursor-pointer"
        onClick={() => setSidebar(!sidebar)}
        />

        <Image
        src="/Samantha.png"
        alt="profile"
        width={32}
        height={32}
        className="rounded-full"
          />
      

      </div>

    

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 flex flex-col justify-around items-center
          transform ${sidebar ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:relative`}
      >
        {/* Close button on mobile */}
        <button
          className="absolute top-2 right-4 md:hidden"
          onClick={() => setSidebar(false)}
        >
          <X className="w-8 h-8 text-white cursor-pointer" />
        </button>

        {/* Profile section */}
        <div className="flex flex-col items-center gap-2 mt-10">
        <div className="relative">
          <Image
            src="/Samantha.png"
            alt="profile"
            width={72}
            height={72}
          />
            {/* Notification badge */}
          <p className="absolute -top-2 -right-2 flex justify-center items-center w-6 h-6 rounded-full text-white text-xs bg-red-600">
            4
          </p>
        </div>
          <h3 className="text-white font-bold text-lg">Somantha</h3>
          <small className="text-white opacity-50">Somantha@email.com</small>
        </div>

        {/* Menu section */}
        <div className="flex flex-col gap-6 mt-10">
          {MenuItems.map((item) => (
            <ul
              key={item}
              onClick={() => setActive(item)}
              className={`${active === item
                ? "text-white font-bold text-lg"
                : "text-white font-semibold opacity-50"} cursor-pointer`}
            >
              {item}
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
}
