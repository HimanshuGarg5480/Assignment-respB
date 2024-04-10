import React, { useState } from "react";
import DatePicker from "./DatePicker";
import DataTable from "./DataTable";

const AnalyticsData = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const dataForPeriod = {
    today: [
      {
          page: "/Defect Arrival Rate",
          pageviews: "356,928",
          pageviewsPercentage: "12.34%",
          uniquePageviews: "275,588",
          uniquePageviewsPercentage: "9.45%",
          avgTimeOnPage: "00:03:51",
          entrances: "315,643",
          entrancesPercentage: "10.23%",
          exitRate: "39.84%",
          pageValue: "$19,983",
          pageValuePercentage: "8.23%",
      },
      {
          page: "/Defect Resolution Rate",
          pageviews: "656,123",
          pageviewsPercentage: "15.67%",
          uniquePageviews: "245,678",
          uniquePageviewsPercentage: "11.78%",
          avgTimeOnPage: "00:04:15",
          entrances: "389,234",
          entrancesPercentage: "12.67%",
          exitRate: "31.45%",
          pageValue: "$23,456",
          pageValuePercentage: "9.78%",
      },
      {
          page: "/Defect Density",
          pageviews: "543,234",
          pageviewsPercentage: "18.67%",
          uniquePageviews: "432,789",
          uniquePageviewsPercentage: "14.78%",
          avgTimeOnPage: "00:04:59",
          entrances: "456,789",
          entrancesPercentage: "14.67%",
          exitRate: "29.67%",
          pageValue: "$27,891",
          pageValuePercentage: "11.67%",
      },
      {
          page: "/Defect Leakage",
          pageviews: "654,321",
          pageviewsPercentage: "22.45%",
          uniquePageviews: "543,234",
          uniquePageviewsPercentage: "18.67%",
          avgTimeOnPage: "00:05:15",
          entrances: "567,890",
          entrancesPercentage: "18.45%",
          exitRate: "27.89%",
          pageValue: "$31,234",
          pageValuePercentage: "13.45%",
      },
      {
          page: "/Defect Removal Efficiency",
          pageviews: "765,432",
          pageviewsPercentage: "26.34%",
          uniquePageviews: "654,321",
          uniquePageviewsPercentage: "22.45%",
          avgTimeOnPage: "00:05:31",
          entrances: "678,901",
          entrancesPercentage: "22.34%",
          exitRate: "25.67%",
          pageValue: "$34,567",
          pageValuePercentage: "15.67%",
      },
  ],
  yesterday: [
      {
          page: "/Dummy Page 1",
          pageviews: "745,678",
          pageviewsPercentage: "11.78%",
          uniquePageviews: "134,567",
          uniquePageviewsPercentage: "8.67%",
          avgTimeOnPage: "00:04:20",
          entrances: "187,654",
          entrancesPercentage: "6.78%",
          exitRate: "35.76%",
          pageValue: "$12,789",
          pageValuePercentage: "7.89%",
      },
      {
          page: "/Dummy Page 2",
          pageviews: "456,789",
          pageviewsPercentage: "15.67%",
          uniquePageviews: "345,678",
          uniquePageviewsPercentage: "11.78%",
          avgTimeOnPage: "00:03:45",
          entrances: "210,987",
          entrancesPercentage: "7.89%",
          exitRate: "28.43%",
          pageValue: "$14,567",
          pageValuePercentage: "8.67%",
      },
      {
          page: "/Dummy Page 3",
          pageviews: "456,789",
          pageviewsPercentage: "15.67%",
          uniquePageviews: "345,678",
          uniquePageviewsPercentage: "11.78%",
          avgTimeOnPage: "00:03:45",
          entrances: "210,987",
          entrancesPercentage: "7.89%",
          exitRate: "28.43%",
          pageValue: "$14,567",
          pageValuePercentage: "8.67%",
      },
      {
          page: "/Dummy Page 4",
          pageviews: "456,789",
          pageviewsPercentage: "15.67%",
          uniquePageviews: "345,678",
          uniquePageviewsPercentage: "11.78%",
          avgTimeOnPage: "00:03:45",
          entrances: "210,987",
          entrancesPercentage: "7.89%",
          exitRate: "28.43%",
          pageValue: "$14,567",
          pageValuePercentage: "8.67%",
      },
      {
          page: "/Dummy Page 5",
          pageviews: "456,789",
          pageviewsPercentage: "15.67%",
          uniquePageviews: "345,678",
          uniquePageviewsPercentage: "11.78%",
          avgTimeOnPage: "00:03:45",
          entrances: "210,987",
          entrancesPercentage: "7.89%",
          exitRate: "28.43%",
          pageValue: "$14,567",
          pageValuePercentage: "8.67%",
      },
  ],
    week: [
      {
        page: "/Top Defects",
        pageviews: "1,283,782",
        pageviewsPercentage: "43.56%",
        uniquePageviews: "945,343",
        uniquePageviewsPercentage: "32.45%",
        avgTimeOnPage: "00:06:38",
        entrances: "1,139,281",
        entrancesPercentage: "37.56%",
        exitRate: "25.13%",
        pageValue: "$51,243",
        pageValuePercentage: "21.34%",
      },
      {
        page: "/Defect Arrival Rate",
        pageviews: "356,928",
        pageviewsPercentage: "12.34%",
        uniquePageviews: "275,588",
        uniquePageviewsPercentage: "9.45%",
        avgTimeOnPage: "00:03:51",
        entrances: "315,643",
        entrancesPercentage: "10.23%",
        exitRate: "39.84%",
        pageValue: "$19,983",
        pageValuePercentage: "8.23%",
      },
      {
        page: "/Defect Resolution Rate",
        pageviews: "456,123",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:04:15",
        entrances: "389,234",
        entrancesPercentage: "12.67%",
        exitRate: "31.45%",
        pageValue: "$23,456",
        pageValuePercentage: "9.78%",
      },
      {
        page: "/Defect Density",
        pageviews: "543,234",
        pageviewsPercentage: "18.67%",
        uniquePageviews: "432,789",
        uniquePageviewsPercentage: "14.78%",
        avgTimeOnPage: "00:04:59",
        entrances: "456,789",
        entrancesPercentage: "14.67%",
        exitRate: "29.67%",
        pageValue: "$27,891",
        pageValuePercentage: "11.67%",
      },
      {
        page: "/Defect Leakage",
        pageviews: "654,321",
        pageviewsPercentage: "22.45%",
        uniquePageviews: "543,234",
        uniquePageviewsPercentage: "18.67%",
        avgTimeOnPage: "00:05:15",
        entrances: "567,890",
        entrancesPercentage: "18.45%",
        exitRate: "27.89%",
        pageValue: "$31,234",
        pageValuePercentage: "13.45%",
      },
    ],
    month: [
      {
        page: "/Dummy Page 3",
        pageviews: "345,678",
        pageviewsPercentage: "11.78%",
        uniquePageviews: "234,567",
        uniquePageviewsPercentage: "8.67%",
        avgTimeOnPage: "00:04:20",
        entrances: "187,654",
        entrancesPercentage: "6.78%",
        exitRate: "35.76%",
        pageValue: "$12,789",
        pageValuePercentage: "7.89%",
      },
      {
        page: "/Dummy Page 4",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 5",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 6",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 7",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
    ],
    quarter: [
      {
        page: "/Dummy Page 5",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 6",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 7",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 8",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 9",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
    ],
    year: [
      {
        page: "/Dummy Page 7",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 8",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 9",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 10",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
      {
        page: "/Dummy Page 11",
        pageviews: "456,789",
        pageviewsPercentage: "15.67%",
        uniquePageviews: "345,678",
        uniquePageviewsPercentage: "11.78%",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        entrancesPercentage: "7.89%",
        exitRate: "28.43%",
        pageValue: "$14,567",
        pageValuePercentage: "8.67%",
      },
    ],
  };

  return (
    <div>
      <DatePicker handlePeriodChange={handlePeriodChange} />
      <DataTable data={dataForPeriod[selectedPeriod]} />
    </div>
  );
};

export default AnalyticsData;
