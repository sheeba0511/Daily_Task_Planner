// import { theme } from "antd";
import { Switch, Typography, Avatar, notification } from "antd";
import React from "react";
import { toggleThemeMode } from "../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Navbar() {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const theme = useSelector((state: RootState) => state.theme);
  
  const handleThemeToggle = () => {
    dispatch(toggleThemeMode());
    const newMode = theme.themeMode === 'dark' ? 'light' : 'dark';
    api.success({
      message: "Theme Changed",
      description: `Switched to ${newMode} theme.`,
      placement: "topRight",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="navbar pr-24">
        <Switch defaultChecked onChange={handleThemeToggle} />
        <Avatar>U</Avatar>
        <Typography.Title level={2}>User Name</Typography.Title>
      </div>
    </>
  );
}

export default Navbar;
