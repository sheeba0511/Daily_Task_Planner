import "./App.css";
import "./assets/Style/Layout.css";
import { ConfigProvider } from "antd";
import MainLayout from "./components/MainLayout";
import { mapThemes, themeColors } from "./utils/theme";
import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/notFound/NotFound";
import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Task = lazy(() => import("./pages/task/Task"));
const Event = lazy(() => import("./pages/event/Event"));
const Setting = lazy(() => import("./pages/setting/Setting"));

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          ...mapThemes({ ...themeColors }),
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
