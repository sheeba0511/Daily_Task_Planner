import ContentArea from "./ContentArea";
import LeftSideBar from "./LeftSideBar";

function MainContent() {
  return (
    <div className="main-content">
      <LeftSideBar />
      <ContentArea />
    </div>
  );
}

export default MainContent;
