import React from "react";
import { Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
//import { NavLink } from "react-router-dom";
import SidebarLabel from "./SidebarLabel";

function LeftSideBar() {
  const sideBarMenus: MenuProps["items"] = [
    {
      key: "dashboard",
      label: <SidebarLabel route="dashboard" label="Dashboard" />,
    },
    {
      key: "task",
      label: <SidebarLabel route="task" label="Task" />,
    },
    {
      key: "event",
      label: <SidebarLabel route="event" label="Event" />,
    },
    {
      key: "setting",
      label: <SidebarLabel route="setting" label="Setting" />,
    },
  ];
  return (
    <Sider collapsible collapsed={false} trigger={null}>
      <Menu mode="inline" items={sideBarMenus} />
    </Sider>
  );
}

export default LeftSideBar;
