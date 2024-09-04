import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-[22%] h-full bg-[#1C2434] text-[#8A99AF] p-5">
      <div className="sticky top-5 mb-2 flex items-center bg-[#1C2434] p-5 z-10">
        <div className="w-8 h-8 bg-[#3C50E0] rounded mr-3 flex items-center justify-center">
          <span className="text-white text-xl font-bold">Ⲷ</span>
        </div>
        <h1 className="text-white text-3xl font-semibold">Rofabs Hotels</h1>
      </div>

      <nav className='p-10'>
        <h3 className="text-xs font-semibold mb-4 text-[#8A99AF]">MENU</h3>
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className="block py-2 text-lg font-medium hover:text-white">
              Dashboard
            </NavLink>
            <NavLink to="/ecommerce" className="block py-2 text-lg pl-4 hover:text-white">
              eCommerce
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className="block py-2 text-lg font-medium hover:text-white">
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/subscriptions" className="block py-2 text-lg font-medium hover:text-white">
            Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" className="block py-2 text-lg font-medium hover:text-white">
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" className="block py-2 text-lg font-medium hover:text-white">
              Tables
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="block py-2 text-lg font-medium hover:text-white">
              Settings
            </NavLink>
          </li>
        </ul>

        <h3 className="text-xs font-semibold mt-8 mb-4 text-[#8A99AF]">OTHERS</h3>
        <ul className="space-y-2">
          <li>
            <NavLink to="/chart" className="block py-2 text-lg font-medium hover:text-white">
              Chart
            </NavLink>
          </li>
          <li>
            <NavLink to="/ui" className="block py-2 text-lg font-medium hover:text-white">
              UI Elements
            </NavLink>
          </li>
          <li>
            <NavLink to="/ui/alerts" className="block py-2 text-lg pl-4 hover:text-white">
              Alerts
            </NavLink>
          </li>
          <li>
            <NavLink to="/ui/buttons" className="block py-2 text-lg pl-4 hover:text-white">
              Buttons
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
