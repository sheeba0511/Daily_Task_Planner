import { Layout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

function MainLayout() {
  // I have chenged main components name Layout.tsx to MainLayout.tsx
  return (
    <Layout>
      <Navbar />
      <MainContent />
      <Footer />
    </Layout>
  );
}

export default MainLayout;
