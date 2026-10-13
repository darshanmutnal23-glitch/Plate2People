"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div>✉ hello@plate2people.in &nbsp; | &nbsp; ☎ +91 98765 43210</div>
        <div className="social">Every plate counts. Every action matters.</div>
      </div>

      <nav className="nav">
        <a className="brand" href="#home" aria-label="Plate2People home">
          <span className="logo">♥</span>
          <div>
            Plate<span>2</span>People
            <small>Every Plate Counts</small>
          </div>
        </a>

        <button
          className="menu"
          id="menuBtn"
          aria-label="Open navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`navlinks ${open ? "open" : ""}`} id="navlinks">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#how" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#partners" onClick={closeMenu}>
            For Partners
          </a>
          <a href="#impact" onClick={closeMenu}>
            Impact
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="btn" href="#contact" onClick={closeMenu}>
            Partner With Us
          </a>
        </div>
      </nav>
    </>
  );
}
