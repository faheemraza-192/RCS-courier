// "use client";
import React from 'react';
import Header from "./components/Header"; // correct path
import Link from "next/link";
export default function page() {


  return (


    <div style={{ padding: "20px" }}>
      <Header />
      <h1>Home Page</h1>

      {/* Navigation to Page 2 */}
      <Link href="/page2">
        <button style={{ marginTop: "10px" }}>Go to Page 2</button>
      </Link>
      <br />

      <Link href="/page3"><button><h2>Go to Page 3</h2></button></Link>
    </div>
  )
}

