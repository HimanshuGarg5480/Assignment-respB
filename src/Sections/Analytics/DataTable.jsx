import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { options, segregateKeys } from "../../utils/constants";
const DataTable = ({ data }) => {
  const [graphData, setGraphData] = useState({});
  useEffect(() => {
    setGraphData(segregateKeys(data));
  }, []);
  const createGradient = (color) => {
    const ctx = document.createElement("canvas").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(1000,800,800,0)");
    return gradient;
  };
  const labels = graphData.page;

  return (
    <div className="container mx-auto overflow-x-auto h-[60vh] mb-12 bg-white">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b border-gray-200 sticky top-0 z-10 bg-white">
            <th className="py-1 px-6 w-2/12">Page</th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Pageviews</div>
              <div>356,928</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: graphData.pageviews,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>
            </th>
            <th className="py-1 px-6 w-3/12 text-right">
              <div>Unique pageviews</div>
              <div>275,588</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: graphData.uniquePageviews,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>{" "}
            </th>
            <th className="py-1 px-6 w-3/12 text-right ml-auto">
              <div>Avg. time on page</div>
              <div>00:03:51</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: [3.51, 4.15, 4.59, 5.15],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>{" "}
            </th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Entrances</div>
              <div>315,643</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: graphData.entrances,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>{" "}
            </th>
            <th className="py-1 px-6 w-1/12 text-right">
              <div>% Exit</div>
              <div>39,84%</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: [39.84, 31.45, 29.67, 27.89],
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>{" "}
            </th>
            <th className="py-1 px-6 w-2/12 text-right">
              <div>Page value</div>
              <div>$19,983</div>
              <div className="flex justify-end h-[40px]">
                <Line
                  options={options}
                  data={{
                    labels,
                    datasets: [
                      {
                        fill: true,
                        label: "",
                        data: graphData.pageValue,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: createGradient(
                          "rgb(53, 162, 235,0.5)"
                        ),
                      },
                    ],
                  }}
                />
              </div>{" "}
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
                <td className="py-2 px-6 text-center">
                  {row.pageviews}
                  <span className=" ml-2 text-gray-500">
                    ({row.pageviewsPercentage})
                  </span>
                </td>
                <td className="py-2 px-6 text-center">
                  {row.uniquePageviews}{" "}
                  <span className=" ml-2 text-gray-500">
                    ({row.uniquePageviewsPercentage})
                  </span>
                </td>
                <td className="py-2 px-6 text-center">{row.avgTimeOnPage}</td>
                <td className="py-2 px-6">
                  {row.entrances}
                  <span className=" ml-2 text-gray-500">
                    ({row.entrancesPercentage})
                  </span>
                </td>
                <td className="py-2 px-6 text-center">{row.exitRate}</td>
                <td className="py-2 px-6 text-center">
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
