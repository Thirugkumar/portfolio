import React from "react";
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/HeroImg2.png";

const Hero = () => {
  return (
    <>
      <section className="flex justify-center relative py-14 px-8 bg-gray-800">
        <div className=" relative flex justify-between items-center w-full max-w-5xl">
          <div className="w-full order-1 " id="Left">
            <span className="text-white text-5xl font-bold">
              Hi, I am <br />
              <span className="flex pt-4">Thirugkumar</span>
            </span>
            <div className="text-white font-bold pt-4 text-4xl flex gap-2">
              I am a
              <span className=" text-red-600  cursor-pointer">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Software Developer.!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Software Engineer.!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Programmer.!")
                      .start();
                  }}
                />
              </span>
            </div>
            <div className="text-gray-400 font-semibold pt-4 text-2xl mb-10">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </div>
            <button
              href="/"
              target="display"
              className=" uppercase text-xl font-bold text-white bg-red-600 hover:bg-red-800 hover:shadow-lg hover:shadow-slate-950 hover:scale-105 duration-300 rounded-3xl py-4 px-16"
            >
              Check Resume
            </button>
          </div>

          <div className="w-full flex order-2 justify-end gap-3" id="Right">
            <img
              src={HeroImg}
              alt="hero-image"
              className=" relative w-full h-full max-w-sm max-h-sm rounded-full border-2 border-red-500 shadow-sm shadow-red-600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
