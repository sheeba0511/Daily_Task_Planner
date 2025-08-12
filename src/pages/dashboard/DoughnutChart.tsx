import { Card, Typography } from "antd";
import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { taskList } from "../../utils/TaskJsonData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function DoughnutChart() {
  const { Title } = Typography;

  // const statusData = taskList.map((e) => e?.status);
  // console.log(statusData);
  // const completeData = taskList.filter(
  //   (data) => data.status === "COMPLETED"
  // ).length;
  // console.log("completeData", completeData);

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
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Card>
        <Typography>
          <Title level={4}>Task Status Distribution</Title>
        </Typography>
        <div className="chart_card">
          <Doughnut data={donutData} options={donutOptions} />
        </div>
      </Card>
    </div>
  );
}

export default DoughnutChart;
