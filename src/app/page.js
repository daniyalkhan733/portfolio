"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
 
  
    const navigate = useRouter();

return(
<>
<h2>Home</h2>

<button className="bg-violet-600 rounded " onClick={() =>navigate.push("/aboutme") }>Click me for about me</button>
</>
)
}