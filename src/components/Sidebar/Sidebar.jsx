import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import css from "./Sidebar.module.css";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const Sidebar = () => {
  return (
    <div className={css.wrapper}>
      <Link className={css.link} to="/">
        <div className={css.logo}>
          <div className={css.icon} />
          Admin
        </div>
      </Link>

      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
