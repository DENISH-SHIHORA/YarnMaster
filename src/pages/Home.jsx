import React from "react";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar />
        <Wrapper />
      </div>
    </>
  );
}

export default Home;
