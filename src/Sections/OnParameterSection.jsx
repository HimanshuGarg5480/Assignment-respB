import React from "react";

const data = [
  {
    parameter: "On Time",
    status: "green",
    extraParam: {
      f: ["Completed iterations", "7"],
      s: ["Total iteration", "9"],
      t: ["% iterations Done", "77.8%"],
    },
  },
  {
    parameter: "On Scope",
    status: "green",
    extraParam: {
      f: ["Story Points Done", "3200"],
      s: ["Total Story Points", "4230"],
      t: ["% Stories Done", "70.9%"],
    },
  },
  {
    parameter: "On Velocity",
    status: "red",
    extraParam: {
      f: ["Average Velocity", "428.6"],
      s: ["Required Velocity", "615.0"],
    },
  },
];

const OnParameterSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Second Row: Carousal */}
      {data.map((i) => {
        return (
          <div className="font-poppins p-3 pb-6 relative rounded-lg border border-[#b8b3b3] flex flex-col justify-center items-start text-black text-center">
            <p className={`rounded-full ${i.status=="green"?"bg-green-500":"bg-red-500"} p-2 absolute right-4 top-6`}></p>
            <p className="text-base font-semibold mt-6">{i.parameter}</p>
            <div className="flex justify-between w-full mt-2">
            <p className="text-sm ">{i.extraParam.f[0]}</p>
            <p className="text-base font-semibold">{i.extraParam.f[1]}</p>
            </div>
            <div className="flex justify-between w-full">
            <p className="text-sm ">{i.extraParam.s[0]}</p>
            <p className="text-base font-semibold">{i.extraParam.s[1]}</p>
            </div>
            {
                i.extraParam.t&&(<div className="flex justify-between w-full">
                <p className="text-sm ">{i.extraParam.t[0]}</p>
                <p className="text-base font-semibold">{i.extraParam.t[1]}</p>
                </div>)
            }
          </div>
        );
      })}
    </div>
  );
};

export default OnParameterSection;
