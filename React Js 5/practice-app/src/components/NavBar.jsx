import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white text-navtext px-6 py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-orange text-2xl font-bold">-Logo-</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-orange">Home</a></li>
          <li><a href="#" className="hover:text-orange">About</a></li>
          <li><a href="#" className="hover:text-orange">Services</a></li>
          <li><a href="#" className="hover:text-orange">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
