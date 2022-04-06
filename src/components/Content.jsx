import React from "react";

function Content() {
  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div id="kt_toolbar" className="toolbar">
          <div
            id="kt_toolbar_container"
            className="container-fluid d-flex flex-stack"
          >
            <div
              className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            >
              <h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
                Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
