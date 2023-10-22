import React from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
        <Topbar />
        <Navbar />
        <Landing />
    </header>
  );
}
