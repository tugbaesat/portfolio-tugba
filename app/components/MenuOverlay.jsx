import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMobileMenu, menuOpen }) => {
  return (
    <ul className="flex flex-col items-center py-4 md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={closeMobileMenu}
            menuOpen={menuOpen}
            isLast={index + 1 === links.length}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
