import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Topbar() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id="kt_header" style={{}} className="header align-items-stretch">
      {/* <!--begin::Container--> */}
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        {/* <!--begin::Aside mobile toggle--> */}
        <div
          className="d-flex align-items-center d-lg-none ms-n3 me-1"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            {/* <!--begin::Svg Icon | path: icons/duotone/Text/Menu.svg--> */}
            <span className="svg-icon svg-icon-2x mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect x="0" y="0" width="24" height="24" />
                  <rect
                    fill="#000000"
                    x="4"
                    y="5"
                    width="16"
                    height="3"
                    rx="1.5"
                  />
                  <path
                    d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
            {/* <!--end::Svg Icon--> */}
          </div>
        </div>
        {/* <!--end::Aside mobile toggle--> */}
        {/* <!--begin::Mobile logo--> */}
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="../../demo1/dist/index.html" className="d-lg-none">
            <img
              alt="Logo"
              src="assets/media/logos/logo-3.svg"
              className="h-30px"
            />
          </a>
        </div>
        {/* <!--end::Mobile logo--> */}
        {/* <!--begin::Wrapper--> */}
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          {/* <!--begin::Navbar--> */}
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            {/* <!--begin::Menu wrapper--> */}
            <div
              className="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              {/* <!--begin::Menu--> */}
              <div
                className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <div className="menu-item me-lg-1">
                  <Link to="/home" className="menu-link py-3">
                    <span className="menu-title">Dashboard</span>
                  </Link>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <Link to="/amaster">
                      <span className="menu-title">Account Master</span>
                    </Link>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <Link to="/cmaster">
                      <span className="menu-title">Color Master</span>
                    </Link>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <Link to="/dmaster">
                      <span className="menu-title">Design Master</span>
                    </Link>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <Link to="/mmaster">
                      <span className="menu-title">Matching Master</span>
                    </Link>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
                {/* <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">{user && user.email}</span>

                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div> */}
              </div>
              {/* <!--end::Menu--> */}
            </div>
            {/* <!--end::Menu wrapper--> */}
          </div>
          {/* <!--end::Navbar--> */}
        </div>
        {/* <!--end::Wrapper--> */}
      </div>
      {/* <!--end::Container--> */}
    </div>
  );
}

export default Topbar;
