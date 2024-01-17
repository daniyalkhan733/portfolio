'use client'
import React from "react"

export default function Project({params}) {
console.log(params)
return(<>

    <h1 className="flex justify-center">This is Projects page</h1>
    <h2>This is project page no:{params.project[0]}</h2>
    <h2>This is project data no:{params.project[1]}</h2>

    </>)





}