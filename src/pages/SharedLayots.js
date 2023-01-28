import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const SharedLayots = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </div>
  );
};

export default SharedLayots;
