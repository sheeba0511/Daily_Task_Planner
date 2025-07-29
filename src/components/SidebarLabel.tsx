import React from "react";
//import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

function SidebarLabel(props) {
  const { route, label } = props;
  return <NavLink to={route}>{label}</NavLink>;
}

export default SidebarLabel;
