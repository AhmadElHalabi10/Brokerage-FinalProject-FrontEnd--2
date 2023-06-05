import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import SideBar from "../../../components/sidebar";
import "./dashboard.css";

export default function Dashboard() {
  const barChartData = [
    { name: "Jan", value: 2400 },
    { name: "Feb", value: 1800 },
    { name: "Mar", value: 3200 },
    { name: "Apr", value: 2800 },
    { name: "May", value: 4000 },
    { name: "Jun", value: 3200 },
    { name: "Jul", value: 4100 },
  ];

  const pieChartData = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-container">
        <div className="chart-container">
          <h2>Bar Chart</h2>
          <BarChart width={500} height={300} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="chart-container">
          <h2>Pie Chart</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
