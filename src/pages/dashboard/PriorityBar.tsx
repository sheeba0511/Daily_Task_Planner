import { Card, Typography } from "antd";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function PriorityBar() {
  const { Title } = Typography;

  const barData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Number of Tasks",
        data: [6, 5, 4], // High, Medium, Low
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // High = Red
          "rgba(255, 206, 86, 0.7)", // Medium = Yellow
          "rgba(76, 175, 80, 0.7)", // Low = Green
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(76, 175, 80, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Card>
        <Typography>
          <Title level={4}>Task Priority Distribution</Title>
        </Typography>
        <div className="chart_card">
          <Bar data={barData} options={barOptions} />
        </div>
      </Card>
    </div>
  );
}

export default PriorityBar;
