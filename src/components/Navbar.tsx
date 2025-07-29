// import { theme } from "antd";
import { Switch, Typography, Avatar } from "antd";
import React from "react";

function Navbar() {
  // const { token } = theme.useToken();
  return (
    <>
      {/* <div className="navbar" style={{ background: token.colorBgBase }}> */}
      <div className="navbar pr-24">
        <Switch defaultChecked />
        <Avatar>U</Avatar>
        <Typography.Title level={2}>User Name</Typography.Title>
      </div>
    </>
  );
}

export default Navbar;
