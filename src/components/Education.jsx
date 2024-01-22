import React from "react";
import uniLogo from "../assets/uniLogo.png";
import comLogo from "../assets/comLogo.png";

function Education() {
  return (
    <section className=" bg-gray-900 ">
      <div className=" py-10 w-4/6 mx-auto max-w-5xl">
        <div>
          <h1 className=" text-white font-bold text-4xl uppercase flex items-center justify-center py-4">
            <span className="text-red-600">Education_</span>_Experience
          </h1>
        </div>
        <div className="grid grid-cols-2 justify-between gap-4 py-4 text-white ">
          <div className="border-2 rounded-lg h-full p-6">
            <div className="relative">
              <h1 className="text-lg font-bold mb-2">
                BICT (Hons) in Software Engineering
              </h1>
              <p className=" text-base text-gray-400 font-bold mb-2">
                University of Kelaniya
              </p>
              <div className=" flex justify-between text-gray-600 font-semibold">
                <p>Jan, 2020 present</p>
                <p>Kelaniya</p>
              </div>
              <br />
              <hr />
              <h1 className=" mt-2 text-gray-300">Stream :-</h1>
              <h1 className=" ml-8 text-gray-400 font-bold">Software System</h1>
            </div>
            <div className=" absolute left-[670px] top-[850px]">
              <img src={uniLogo} alt="" className=" h-14" />
            </div>
          </div>
          <div className="border-2 rounded-lg p-6">
            <div className="relative">
              <h1 className="text-lg font-bold mb-2">
                Software Engineer (Intern)
              </h1>
              <p className=" text-base text-gray-400 font-bold mb-2">
                Infonits (pvt) Ltd
              </p>
              <div className=" flex justify-between text-gray-600 font-semibold">
                <p>Oct, 2023 present</p>
                <p>Jaffna</p>
              </div>
              <br />
              <hr />
              <h1 className=" mt-2 text-gray-300">Role :-</h1>
              <h1 className=" ml-8 text-gray-400 font-bold">
                FrontEnd Developer - Intern
              </h1>
            </div>
            <img
              src={comLogo}
              alt=""
              className=" absolute h-14 right-[270px] top-[850px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
