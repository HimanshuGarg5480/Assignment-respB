import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "../utils/constants";
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
          <div className="flex flex-col justify-end h-full">
            <Line
              options={options}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    fill: true,
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(88, 156, 237, 1)",
                    backgroundColor: "rgba(121, 174, 212, 0.5)",
                  },
                ],
              }}
            />
          </div>{" "}
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-white text-center">
            <p className="text-xl uppercase font-medium">Efficiency</p>
            <p className="text-md">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">1.1921</p>
            <p className="text-md">+0.0015 (+0.13%)</p>
            <p className="text-sm mt-2">0.00 USD</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#14827B]">
          <div className="flex flex-col justify-end h-full">
            <Line
              options={options}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    fill: true,
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(88, 156, 237, 1)",
                    backgroundColor: "rgba(5, 95, 89, 1)",
                  },
                ],
              }}
            />
          </div>{" "}
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-white text-center">
            <p className="text-xl uppercase font-medium">time to market</p>
            <p className="text-md text-[#FFEEB2]">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">327176</p>
            <p className="text-md">-97,914.00 (-23.03%)</p>
            <p className="text-sm text-[#FFEEB2] mt-2">131,040,723,108 JPY</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#FFFFFF]">
          <div className="flex flex-col justify-end h-full">
            <Line
              options={options}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    fill: true,
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(255, 79, 82, 1)",
                    backgroundColor: "rgba(255, 196, 201, 1)",
                  },
                ],
              }}
            />
          </div>{" "}
          <div className="absolute inset-0 left-5 flex flex-col justify-center items-start text-black text-center">
            <p className="text-xl uppercase font-medium">Tech debt</p>
            <p className="text-md text-[#939699]">Lorem Ipsum</p>
            <p className="text-3xl font-semibold">1.1763</p>
            <p className="text-md">+0.0015 (+0.13%)</p>
            <p className="text-sm mt-2 text-[#939699]">0.00 USD</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-7 rounded-lg bg-[#FF4F52]">
          <div className="flex flex-col justify-end h-full">
            <Line
              options={options}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    fill: true,
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(222, 55, 58, 1)",
                    backgroundColor: "rgba(222, 55, 58, 0.5)",
                  },
                ],
              }}
            />
          </div>{" "}
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
