import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  PointElement,
} from "chart.js";
import { Card, Typography } from "antd";
// Register chart elements

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  PointElement
);

function Dashboard() {
  const { Title, Text } = Typography;
  // Donut data
  const donutData = {
    labels: ["Completed", "Pending", "In Progress", "Cancelled", "On Hold"],
    datasets: [
      {
        label: "Task Status",
        data: [4, 2, 4, 3, 2], // completed, pending, in progress
        backgroundColor: [
          "rgba(76, 175, 80, 0.7)", // greenish for completed
          "rgba(255, 206, 86, 0.7)", // for pending yellow
          "rgba(75, 192, 192, 0.7)", // blue for in progress
          "rgba(255, 99, 132, 0.7)", // red for cancelled
          "rgba(255, 165, 0, 0.7)", // orange for on hold
        ],
        borderColor: [
          "rgba(76, 175, 80, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 165, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  //  Bar chart
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

  // Pie Chart
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
        position: "bottom" as const,
        display: true,
      },
      title: {
        display: false,
      },
    },
  };

  // assignee chart
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

  // Line Chart
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
    <div className="chart_main_container">
      <div>
        <Typography>
          <Title level={4}>Dashboard</Title>
        </Typography>
      </div>
      {/* Four Card */}
      <div className="represntive_card">
        <Card className="show_Card">
          <Typography>
            <Title level={4}>Total Tasks</Title>
            <Text style={{ display: "flex", justifyContent: "center" }}>
              15
            </Text>
          </Typography>
        </Card>
        <Card className="show_Card">
          <Typography>
            <Title level={4}>Completed Tasks</Title>
            <Text style={{ display: "flex", justifyContent: "center" }}>4</Text>
          </Typography>
        </Card>
        <Card className="show_Card">
          <Typography>
            <Title level={4}>Total Events</Title>
            <Text style={{ display: "flex", justifyContent: "center" }}>
              15
            </Text>
          </Typography>
        </Card>
        <Card className="show_Card">
          <Typography>
            <Title level={4}>Pending Events</Title>
            <Text style={{ display: "flex", justifyContent: "center" }}>7</Text>
          </Typography>
        </Card>
      </div>
      {/*  Main Chart Container */}
      <div className="chart_container">
        {/* Donut Chart */}
        <Card>
          <Typography>
            <Title level={4}>Task Status Distribution</Title>
          </Typography>
          <div className="chart_card">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </Card>
        {/* Bar chart */}
        <Card>
          <Typography>
            <Title level={4}>Task Priority Distribution</Title>
          </Typography>
          <div className="chart_card">
            <Bar data={barData} options={barOptions} />
          </div>
        </Card>
        {/* Pie Chart */}
        <Card>
          <Typography>
            <Title level={4}>Events by Type</Title>
          </Typography>
          <div className="chart_card">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </Card>

        {/* Bar chart */}

        <Card>
          <Typography>
            <Title level={4}>Task by Assignee</Title>
          </Typography>
          <div className="chart_card">
            <Bar data={assigneeData} options={assigneeOptions} />
          </div>
        </Card>
      </div>
      {/* Line Chart */}
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

export default Dashboard;
