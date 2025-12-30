"use client";

import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  // Function to increase count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <header className="header">
      
      <div className="navbarContent">

        {/* Hamburger icon (mobile only) */}
        <div className="hamburger d-lg-none" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Left nav links (desktop only) */}
        <div className="nav-links d-none d-lg-flex col-4">
          <a href=""><button>Services</button></a>
          <a href=""><button>About Us</button></a>
          <a href=""><button>Contact Us</button></a>
        </div>

        {/* Center logo */}
        <div className="navbarBanner col-4">
          <img className="imgBanner" src="images/rapidimg.png" alt="Logo" />
        </div>

        {/* Right button (always visible) */}
        <div className="navbarQuoteBtn col-4">
          <a href=""><button className='getquotebtnn'>GET A QUOTE</button></a>
        </div>
      </div>

      {/* Mobile side menu */}
      <div className={`mobileMenu d-lg-none ${open ? 'open' : ''}`}>
        <a href="">Services</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </div>

      {/* Overlay when menu is open   this means  when  opened menu   click anywhere to close menu*/}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

{/* 
      <div style={{ textAlign: "center", marginTop: "50px" ,color:"white"}}>
      <h2>Count: {count}</h2>

     
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>
        Increase
      </button>

    
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      
    </div>
    
     */}
   {/* <h2 style={{color:"white"}}>Count: {count}</h2>
      <button onClick={increment} style={{ marginRight: "10px",color:"white" }}>Increase</button>
      <button onClick={decrement} style={{color:"white"}}>Decrease</button> */}
    </header>
  );
}
