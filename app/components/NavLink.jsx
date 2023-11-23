import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, onClick, isLast }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 pl-3 pr-4 md:p-0 uppercase ${
        isLast ? "text-darkPurple dark:text-pinkOne" : "text-purpleTwo dark:text-purpleOne"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
