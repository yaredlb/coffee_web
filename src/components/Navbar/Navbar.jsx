import React, { useState } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* logo section  */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          {/* Links section  */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  {" "}
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
            <button className="sm:hidden text-2xl" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar for small screens  */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondary transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center gap-6 mt-10">
          {Menus.map((data) => (
            <a
              key={data.id}
              href={data.link}
              className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
              onClick={toggleSidebar}
            >
              {data.name}
            </a>
          ))}
          <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
            Order
            <FaCoffee className="text-xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
