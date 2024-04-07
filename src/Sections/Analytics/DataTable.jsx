import React from "react";

import chart1 from "../../assets/Chart1.png";
import chart2 from "../../assets/Chart2.png";
import chart3 from "../../assets/Chart3.png";
import chart4 from "../../assets/Chart4.png";
import chart5 from "../../assets/Chart5.png";
import chart6 from "../../assets/Chart6.png";

const DataTable = ({ data }) => {
  return (
    <div className="container mx-auto overflow-x-auto h-[60vh] mb-12 bg-white">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b border-gray-200 sticky top-0 z-10 bg-white">
            <th className="py-1 px-6 w-2/12">Page</th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Pageviews</div>
              <div>356,928</div>
              <img src={chart1} alt="bussiness" className=" w-20 h-6 ml-auto" />
            </th>
            <th className="py-1 px-6 w-3/12 text-right">
              <div>Unique pageviews</div>
              <div>275,588</div>
              <img src={chart2} alt="bussiness" className=" w-20 h-6 ml-auto" />
            </th>
            <th className="py-1 px-6 w-3/12 text-right ml-auto">
              <div>Avg. time on page</div>
              <div>00:03:51</div>
              <img src={chart3} alt="bussiness" className=" w-20 h-6 ml-auto" />
            </th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Entrances</div>
              <div>315,643</div>
              <img src={chart4} alt="bussiness" className=" w-20 h-6 ml-auto" />
            </th>
            <th className="py-1 px-6 w-1/12 text-right">
              <div>% Exit</div>
              <div>39,84%</div>
              <img src={chart5} alt="bussiness" className=" w-20 h-6 ml-auto" />
            </th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Page value</div>
              <div>$19,983</div>
              <img src={chart6} alt="bussiness" className="w-20 h-6 ml-auto" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-6 ">{row.page}</td>
                <td className="py-2 px-6">
                  {row.pageviews}
                  <span className=" ml-2 text-gray-500">
                    ({row.pageviewsPercentage})
                  </span>
                </td>
                <td className="py-2 px-6">
                  {row.uniquePageviews}{" "}
                  <span className=" ml-2 text-gray-500">
                    ({row.uniquePageviewsPercentage})
                  </span>
                </td>
                <td className="py-2 px-6">{row.avgTimeOnPage}</td>
                <td className="py-2 px-6">
                  {row.entrances}
                  <span className=" ml-2 text-gray-500">
                    ({row.entrancesPercentage})
                  </span>
                </td>
                <td className="py-2 px-6">{row.exitRate}</td>
                <td className="py-2 px-6">
                  {row.pageValue}
                  <span className=" ml-2 text-gray-500">
                    ({row.pageValuePercentage})
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
