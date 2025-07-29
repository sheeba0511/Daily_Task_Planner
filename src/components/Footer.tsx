import React from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;
function Footer() {
  return (
    <div className="footer">
      <div className="loggedIcon">
        <PoweroffOutlined />
      </div>
      <div className="reservedText">
        <Text strong type="secondary">
          &copy; 2025 Developed by Sheeba Nasreen. All rights reserved.
        </Text>
      </div>
    </div>
  );
}

export default Footer;
