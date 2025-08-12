import { Card, Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const { Title } = Typography;

  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Events by Month",
        data: [5, 7, 6, 8, 4, 5, 9, 10, 6, 7, 8, 5],
        fill: true,
        backgroundColor: "rgba(25, 118, 210, 0.2)", // light blue fill
        borderColor: "rgba(25, 118, 210, 1)", // blue line
        tension: 0.3, // smooth curves
        pointBackgroundColor: "rgba(25, 118, 210, 1)",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Card>
        <Typography>
          <Title level={4}>Events by Month</Title>
        </Typography>
        <div className="chart_card">
          <Line data={lineData} options={lineOptions} />
        </div>
      </Card>
    </div>
  );
}

export default LineChart;
