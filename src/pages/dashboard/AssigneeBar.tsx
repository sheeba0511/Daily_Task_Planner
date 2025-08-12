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

function AssigneeBar() {
  const { Title } = Typography;

  const assigneeData = {
    labels: [
      "Ravi Kumar Jain",
      "Amarnath Mishra",
      "Harshan Pandey",
      "Vijay Malhotra",
    ],

    datasets: [
      {
        label: "Assignee Task",
        data: [8, 7, 6, 5],
        backgroundColor: "rgba(25, 118, 210, 0.7)",
        borderColor: "rgba(25, 118, 210, 1)",
        borderWidth: 1,
      },
    ],
  };
  const assigneeOptions = {
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
          <Title level={4}>Task by Assignee</Title>
        </Typography>
        <div className="chart_card">
          <Bar data={assigneeData} options={assigneeOptions} />
        </div>
      </Card>
    </div>
  );
}

export default AssigneeBar;
