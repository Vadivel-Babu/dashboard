import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [isYear, setIsYear] = useState("year");
  const data = [
    {
      name: "Jan",
      dollar: 750,
      $500: 500,
    },
    {
      name: "Feb",
      dollar: 350,
    },
    {
      name: "Mar",
      dollar: 1000,
    },
    {
      name: "Aug",
      dollar: 200,
    },
    {
      name: "Apr",
      dollar: 1200,
    },
    {
      name: "May",
      dollar: 500,
    },
    {
      name: "Jun",
      dollar: 300,
    },
    {
      name: "Jul",
      dollar: 250,
    },
    {
      name: "Aug",
      dollar: 1250,
    },
    {
      name: "Sep",
      dollar: 400,
    },
    {
      name: "Oct",
      dollar: 500,
    },
    {
      name: "Nov",
      dollar: 100,
    },
    {
      name: "Dec",
      dollar: 250,
    },
  ];
  return (
    <div className="w-full border border-bordercolor rounded-xl p-4 mt-2">
      <div className="flex justify-between">
        <h1 className="text-sm">Overview</h1>
        <button className="text-[#AD8EDD] flex gap-2 text-sm">
          <img src="download.svg" alt="download" />
          <span>Download Report</span>
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        <p
          className={` ${
            isYear === "month"
              ? "bg-[#F1EBF9] text-[#1D2939]"
              : "text-[#98A2B3]"
          } rounded-lg px-3 py-2 cursor-pointer`}
          onClick={() => setIsYear("month")}
        >
          Monthly
        </p>
        <p
          className={`${
            isYear === "year" ? "bg-[#F1EBF9] text-[#1D2939]" : "text-[#98A2B3]"
          } rounded-lg px-3 py-2 cursor-pointer`}
          onClick={() => setIsYear("year")}
        >
          Yearly
        </p>
      </div>
      <ResponsiveContainer width={"100%"} height={400} className="mt-4">
        <BarChart width={100} height={650} data={data}>
          <XAxis
            dataKey="name"
            color="#AD8EDD"
            axisLine={false}
            tickLine={false}
            axisType="number"
          />
          <YAxis
            tickLine={false}
            ticks={["0", "250", "500", "1000", "1500"]}
            tickMargin={5}
            tick={{ stroke: "#98A2B3", strokeWidth: 0.1 }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="dollar"
            barSize={25}
            fill="#AD8EDD"
            radius={[5, 5, 0, 0]}
            unit={"$"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
