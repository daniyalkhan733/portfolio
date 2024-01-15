'use client'
import React from "react"

export default function Projects() {
const data={
name:"Daniyal Khan",
age:19


}


return(<>

    <h1 className="flex justify-center">This is Projects page</h1>
    <li><a href="/projects/">Project 1</a></li>
    <li><a href="/projects/2">Project 2</a></li>
    <li><a href="/projects/3">Project 3</a></li>
    <li><a href="/projects/4">Project 4</a></li>
    <h1>{data.name}</h1>
    
    
    </>)





}