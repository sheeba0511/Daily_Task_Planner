import { Card, Typography } from "antd";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const { Title } = Typography;
  const pieData = {
    labels: [
      "Personal",
      "Festival",
      "Professional",
      "Social",
      "Miscsellaneous",
      "Custom",
    ],
    datasets: [
      {
        label: "Event Types",
        data: [4, 2, 3, 2, 3, 1],
        backgroundColor: [
          "rgba(76, 175, 80, 0.7)", // Personal - green
          "rgba(255, 206, 86, 0.7)", // Festival - yellow
          "rgba(25, 118, 210, 0.7)", // Professional - blue
          "rgba(255, 99, 132, 0.7)", // Social - red/pink
          "rgba(255, 165, 0, 0.7)", // Miscellaneous - orange
          "rgba(153, 102, 255, 0.7)", // Custom - purple
        ],
        borderColor: [
          "rgba(76, 175, 80, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 118, 210, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
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
          <Title level={4}>Events by Type</Title>
        </Typography>
        <div className="chart_card">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </Card>
    </div>
  );
}

export default PieChart;
