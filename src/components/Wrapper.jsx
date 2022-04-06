import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Topbar from "./Topbar";

function Wrapper() {
  return (
    <>
      <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <Topbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default Wrapper;
