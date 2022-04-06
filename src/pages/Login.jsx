import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password).then((e) => {
        console.log(e);
        console.log(e.user.auth.currentUser.emailVerified);
        if (e.user.auth.currentUser.emailVerified == true) {
          navigate("/home");
          window.location.reload();
        } else {
          console.log("Email is not verified !!!!");
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Authentication - Sign-in --> */}
        <div
          className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
          style={{
            backgroundImage:
              "url(assets/media/illustrations/development-hd.png)",
          }}
        >
          {/* <!--begin::Content--> */}
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            {/* <!--begin::Logo--> */}
            <div className="mb-12">
              <img
                alt="Logo"
                src="assets/media/logos/logo1.png"
                className="h-45px"
              />
            </div>
            {/* <!--end::Logo--> */}
            {/* <!--begin::Wrapper--> */}
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {/* <!--begin::Form--> */}
              <form
                className="form w-100"
                noValidate="novalidate"
                id="kt_sign_in_form"
                action="#"
                onSubmit={handleSubmit}
              >
                {/* <!--begin::Heading--> */}
                <div className="text-center mb-10">
                  {/* <!--begin::Title--> */}
                  <h1 className="text-dark mb-3">Sign In to Yarn Master</h1>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Link--> */}
                  <div className="text-gray-400 fw-bold fs-4">
                    New Here?
                    <Link to="/register" className="link-primary fw-bolder">
                      Create an Account
                    </Link>
                  </div>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--begin::Heading-->/ */}
                {error && <Alert variant="danger">{error}</Alert>}
                {/* <!--begin::Input group-->/ */}
                <div className="fv-row mb-10">
                  {/* <!--begin::Label--> */}
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Input--> */}
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <!--end::Input--> */}
                </div>
                {/* <!--end::Input group--> */}
                {/* <!--begin::Input group--> */}
                <div className="fv-row mb-10">
                  {/* <!--begin::Wrapper--> */}
                  <div className="d-flex flex-stack mb-2">
                    {/* <!--begin::Label--> */}
                    <label className="form-label fw-bolder text-dark fs-6 mb-0">
                      Password
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Link--> */}
                    <Link
                      to="/forgotpassword"
                      className="link-primary fs-6 fw-bolder"
                    >
                      Forgot Password ?
                    </Link>
                    {/* <!--end::Link--> */}
                  </div>
                  {/* <!--end::Wrapper--> */}
                  {/* <!--begin::Input--> */}
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <!--end::Input--> */}
                </div>
                {/* <!--end::Input group--> */}
                {/* <!--begin::Actions-->/ */}
                <div className="text-center">
                  {/* <!--begin::Submit button--> */}
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                  >
                    <span className="indicator-label">Continue</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                  {/* <!--end::Submit button--> */}
                </div>
                {/* <!--end::Actions--> */}
              </form>
              {/* <!--end::Form--> */}
            </div>
            {/* <!--end::Wrapper-->/ */}
          </div>
          {/* <!--end::Content--> */}
        </div>
        {/* <!--end::Authentication - Sign-in--> */}
      </div>
    </>
  );
}

export default Login;
