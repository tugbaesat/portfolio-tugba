import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, onClick, isLast }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 pl-3 pr-4 md:p-0 uppercase ${
        isLast
          ? "text-slate-400  hover:text-blue-700"
          : "text-blue-700  hover:text-slate-400"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
