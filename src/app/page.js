"use client";
import React from "react";
export default function Home() {
  return (
    <div>
<User name="Daniyal" />
<User name="Khan" />



    </div>
  );
}
const User=(props)=>{

return(
<div>
<h1> this is {props.name}</h1>


</div>



)



}