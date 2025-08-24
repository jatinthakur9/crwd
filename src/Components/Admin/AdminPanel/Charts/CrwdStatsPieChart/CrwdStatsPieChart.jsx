import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28"];

const CrwdStatsPieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const totalUsers = users.length;

    const allEvents = users.flatMap((user) => user.events || []);
    const totalCrwds = allEvents.length;

    const joinedCrwds = allEvents.filter(
      (event) =>
        Array.isArray(event.joinedUsers) && event.joinedUsers.length > 0
    ).length;

    setChartData([
      { name: "Total Users", value: totalUsers },
      { name: "Total Crwds", value: totalCrwds },
      { name: "Crwds Joined", value: joinedCrwds },
    ]);
  }, []);

  return (
    <div
      style={{ textAlign: "center", marginLeft: "400px", marginTop: "50px" }}
    >
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CrwdStatsPieChart;
