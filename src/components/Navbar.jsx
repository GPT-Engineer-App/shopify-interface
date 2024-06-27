import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/product" className="mr-4">Product</Link>
          <Link to="/about" className="mr-4">About Us</Link>
        </div>
        <div className="text-white">
          <Link to="/purchase-history" className="mr-4">Purchase History</Link>
          <Link to="/product-upload" className="mr-4">Product Upload</Link>
          <Link to="/purchase-record" className="mr-4">Purchase Record</Link>
          <Link to="/traffic-report" className="mr-4">Traffic Report</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;