import "./App.css";
import "./assets/Style/Layout.css";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import MainLayout from "./components/MainLayout";
import { mapThemes } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import type { RootState } from "./store/store";

import NotFound from "./pages/notFound/NotFound";
import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Task = lazy(() => import("./pages/task/Task"));
const Event = lazy(() => import("./pages/event/Event"));
const Setting = lazy(() => import("./pages/setting/Setting"));

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  // Create theme data from Redux state
  const themeData = {
    ...theme.colors,
    ...theme.fontSizes,
  };

  return (
    <>
      <ConfigProvider
        theme={{
          ...mapThemes(themeData),
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="task" element={<Task />} />
            <Route path="event" element={<Event />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
