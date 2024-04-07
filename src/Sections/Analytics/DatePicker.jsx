import React from "react";
import { LuChevronDown, LuChevronLeftCircle } from "react-icons/lu";

const DatePicker = (props) => {
  return (
    <div className="flex items-center overflow-scroll justify-between mt-8 bg-white border-b-2 border-gray-200 py-2 ">
      <div className="text-lg ml-6 flex items-center">
        Pageviews <LuChevronDown className="ml-1" />
      </div>
      
      <div className="flex space-x-0">
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3 rounded-l-md focus:bg-blue-100 
                     font-medium ${
                       props.selectedPeriod === "today"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("today")}
        >
          Today
        </button>
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3   
                     font-medium focus:bg-blue-100  ${
                       props.selectedPeriod === "yesterday"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("yesterday")}
        >
          Yesterday
        </button>
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3   
                     font-medium focus:bg-blue-100  ${
                       props.selectedPeriod === "week"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("week")}
        >
          Week
        </button>
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3   
                     font-medium focus:bg-blue-100  ${
                       props.selectedPeriod === "month"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("month")}
        >
          Month
        </button>
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3   
                     font-medium focus:bg-blue-100  ${
                       props.selectedPeriod === "quarter"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("quarter")}
        >
          Quarter
        </button>
        <button
          className={` border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-gray-400 hover:bg-blue-100 duration-150 px-3 rounded-r-md  focus:bg-blue-100   
                     font-medium ${
                       props.selectedPeriod === "year"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("year")}
        >
          Year
        </button>
        <div className=" pl-4">
          <select
            className=" border-[1px] rounded-md text-[#939699] border-gray-400  px-3 py-2  
                     font-medium hover:bg-blue-100 hover:text-black duration-150 focus:outline-none focus:bg-blue-100 "
            value={props.selectedPeriod}
            onChange={(e) => props.handlePeriodChange(e.target.value)}
          >
            <option value="">Select Duration</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="quarter">Quarter</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
