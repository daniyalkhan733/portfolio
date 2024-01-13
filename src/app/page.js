"use client";
import React from "react";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] =useState("Pathaan");

  const apple = () => {
    setName("jawan");
  };

  return (
    <div>
      <h1>This is updated name {name}</h1>
      <button onClick={()=>apple()}>Click to update</button>
    </div>
  );
}
