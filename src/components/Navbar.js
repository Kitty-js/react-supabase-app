// import { Link } from "react-router-dom";
import { useState } from "react";
import control from "../assets/control.png";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "Inbox" },
    { title: "Accounts", gap: true },
    { title: "Schedule" },
    { title: "Search" },
    { title: "Analytics" },
    { title: "Files ", gap: true },
    { title: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 w-72 h-screen p-4 pt-8 bg-dark-purple relative`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center">
          <img src={logo} className={`cursor-pointer duration-500`} alt="" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            React Supabase App
          </h1>
        </div>
        <ul className="pt-8">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              }`}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
