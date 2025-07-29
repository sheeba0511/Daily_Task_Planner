import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

function ContentArea() {
  return (
    <div className="content-area">
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default ContentArea;
