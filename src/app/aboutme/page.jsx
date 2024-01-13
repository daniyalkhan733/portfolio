"use client"
import React from "react"
// import Header from"../../../components/header"
import Slider from "../../../components/Slider"

export default function Home() {
  return (
    <>
    {/* <Header/> */}
     <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <iframe
                  src="/videos/intro.mp4"
                  alt=""
                  className="controls autoplay   relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                <div className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-14 h-14 bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg> */}
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="relative">
                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                  Daniyal{" "}
                </h1>
                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                  Intro
                </h1>
              </div>
              <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Meet a dynamic B. Engineering student with a passion for
                crafting immersive digital experiences. This frontend virtuoso
                thrives in the realm of React development, seamlessly navigating
                Next.js, Astro, Vite, and more. Armed with a creative flair,
                they've sculpted multiple websites, transforming ideas into
                captivating, user-centric realities. Innovation is their code,
                and the web is their canvas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="dark:bg-gray-700">
      <h1 className="flex justify-center w-full font-bold text-6xl text-white p-10">Highlights</h1>

<Slider/>




     
        </div>
        
    </>
  );
}
