import React from "react";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";

const CarousalSection = () => {
  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-poppins text-[#2F667F]">
        <div className="border border-[#6C6F6B] rounded-full p-2 text-center hover:text-white hover:bg-[#2F667F]">
          {" "}
          + Create Report
        </div>
        <div className="border border-[#6C6F6B] rounded-full p-2 text-center hover:text-white hover:bg-[#2F667F]">
          Share this dashboard
        </div>
        <div className="border border-[#6C6F6B] rounded-full p-2 text-center hover:text-white hover:bg-[#2F667F]">
          Select Duration
        </div>
        <div className="border border-[#6C6F6B] rounded-full p-2 text-center hover:text-white hover:bg-[#2F667F]">
          Compare with Duration
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#539BBB]  ">
          <img className="object-cover w-full h-full" src={c1} alt="Image 1" />
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-white text-center">
            <p className="text-xl uppercase font-medium">Efficiency</p>
            <p className="text-md">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">1.1921</p>
            <p className="text-md">+0.0015 (+0.13%)</p>
            <p className="text-sm mt-2">0.00 USD</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#14827B]">
          <img className="object-cover w-full h-full" src={c2} alt="Image 2" />
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-white text-center">
            <p className="text-xl uppercase font-medium">time to market</p>
            <p className="text-md text-[#FFEEB2]">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">327176</p>
            <p className="text-md">-97,914.00 (-23.03%)</p>
            <p className="text-sm text-[#FFEEB2] mt-2">131,040,723,108 JPY</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#FFFFFF]">
          <img className="object-cover w-full h-full" src={c3} alt="Image 3" />
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-black text-center">
            <p className="text-xl uppercase font-medium">Tech debt</p>
            <p className="text-md text-[#939699]">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">1.1763</p>
            <p className="text-md">+0.0015 (+0.13%)</p>
            <p className="text-sm mt-2 text-[#939699]">0.00 USD</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#FF4F52]">
          <img className="object-cover w-full h-full" src={c4} alt="Image 4" />
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-white text-center">
            <p className="text-xl uppercase font-medium">Predictability</p>
            <p className="text-md">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">0.00313010</p>
            <p className="text-md">-0.00050430 (-13.88%)</p>
            <p className="text-sm mt-2">1,566 BTC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarousalSection;
