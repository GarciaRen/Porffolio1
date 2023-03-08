import React, { useState } from "react";
import { logo } from "../../assets/index";
import { navLinksData } from "../../assets/constants/index";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between items-center mx-auto h-20 px-6 bg-bodyColor text-white border-b border-b-gray-500 fixed w-full z-50">
      <div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="logo" className="h-16 w-28 cursor-pointer" />
        </Link>
      </div>
      <ul className="md:flex gap-8 hidden">
        {navLinksData.map(({ title, id, link }) => (
          <li
            key={id}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor"
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden block">
        {!open ? (
          <BiMenu size={30} className="cursor-pointer" onClick={handleMenu} />
        ) : (
          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        )}
      </div>
      <ul
        className={
          open
            ? "fixed left-0 top-0 w-[40%] border-r-2 border-r-gray-300 h-full bg-transparent/10 backdrop-blur-lg ease-in duration-100"
            : "ease-out duration-1000 fixed h-full top-0 left-[-100%]"
        }
      >
        <div className="flex flex-col gap-5 pt-6">
          <div className="flex justify-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={logo} alt="logo" className="h-16 w-30 cursor-pointer" />
            </Link>
          </div>
          <div className="flex flex-col">
            {navLinksData.map(({ title, id, link }) => (
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                key={id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor p-4 border-b-gray-300 border-b  uppercase hover:bg-transparent/10"
              >
                {" "}
                <li>{title}</li>
              </Link>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
