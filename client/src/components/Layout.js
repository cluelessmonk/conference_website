import React from "react";
import "../styles/LayoutStyles.css";
import banner from "../images/banner.png";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const SidebarMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Committee",
      path: "/committee",
    },
    {
      name: "Program Schedule",
      path: "/program_schedule",
    },
    {
      name: "Keynote Speakers",
      path: "/keynote_speakers",
    },
    {
      name: "Tutorial Speakers",
      path: "/tutorial_speakers",
    },
    {
      name: "Track Chairs",
      path: "/track_chairs",
    },
    {
      name: "Special Session",
      path: "/special_session",
    },
  ];
  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <h6 className="text-light">Conference Site</h6>
            <hr />
          </div>
          <div className="menu">
            {SidebarMenu.map((menu, index) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  key={index}
                  className={`menu-item ${isActive && "active"}`}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            <img src={banner} alt="Banner" />
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Copyright © MNNIT Allahabad. All rights reserved.</p>
          <p>Best viewed in Firefox 3.6 & Internet Explorer 6.0 onwards.</p>
          <p>Developed and Managed by Jitendra Kumar and Divyansh Patel</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
