import React from "react";

import { taskList } from "../../utils/TaskJsonData";
import { eventJsonList } from "../../utils/EventJsonData";

import { Card, Typography } from "antd";
import LineChart from "./LineChart";
import AssigneeBar from "./AssigneeBar";
import PieChart from "./PieChart";
import PriorityBar from "./PriorityBar";
import DoughnutChart from "./DoughnutChart";

function Dashboard() {
  const { Title, Text } = Typography;

  const completeData = taskList.filter(
    (data) => data?.status === "COMPLETED"
  ).length;
  // console.log("completeData", completeData);

  const pendingData = eventJsonList.filter(
    (e) => e?.eventStatus === "PENDING"
  ).length;
  console.log("pendingData", pendingData);

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
            <Text style={{ display: "flex", justifyContent: "center" }}>
              {completeData}
            </Text>
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
            <Text style={{ display: "flex", justifyContent: "center" }}>
              {pendingData}
            </Text>
          </Typography>
        </Card>
      </div>

      <div className="chart_container">
        <DoughnutChart />
        <PriorityBar />
        <PieChart />
        <AssigneeBar />
      </div>

      <LineChart />
    </div>
  );
}

export default Dashboard;
