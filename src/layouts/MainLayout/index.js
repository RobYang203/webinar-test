import React from "react";
import TopBar from "./components/TopBar";

function MainLayout({children}) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
}



export default MainLayout;
