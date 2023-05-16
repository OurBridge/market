import React from "react";

const Navbar = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Active
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
