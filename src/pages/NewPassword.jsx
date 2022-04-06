import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function NewPassword() {

  const [password, setPassword] = useState('')
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const query = useQuery()
  const navigate = useNavigate();

  // console.log(query.get('mode'), query.get('oobCode'))

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(query.get('oobCode'), password)
      console.log(password);
      
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Authentication - New password --> */}
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
                src="assets/media/logos/logo-2-dark.svg"
                className="h-45px"
              />
            </div>
            {/* <!--end::Logo--> */}
            {/* <!--begin::Wrapper-->/ */}
            <div className="w-lg-550px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {/* <!--begin::Form--> */}
              <form
                className="form w-100"
                noValidate="novalidate"
                id="kt_new_password_form"
                onSubmit={handleSubmit}
              >
                {/* <!--begin::Heading--> */}
                <div className="text-center mb-10">
                  {/* <!--begin::Title--> */}
                  <h1 className="text-dark mb-3">Setup New Password</h1>
                  {/* <!--end::Title-->/ */}
                  {/* <!--begin::Link--> */}
                  <div className="text-gray-400 fw-bold fs-4">
                    Already have reset your password ?
                    <Link to="/login" className="link-primary fw-bolder">
                      Sign in here
                    </Link>
                  </div>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--begin::Heading--> */}
                {error && <Alert variant="danger">{error}</Alert>}
                {/* <!--begin::Input group--> */}
                <div className="mb-10 fv-row" data-kt-password-meter="true">
                  {/* <!--begin::Wrapper--> */}
                  <div className="mb-1">
                    {/* <!--begin::Label--> */}
                    <label className="form-label fw-bolder text-dark fs-6">
                      Password
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Input wrapper--> */}
                    <div className="position-relative mb-3">
                      <input
                        className="form-control form-control-lg form-control-solid"
                        type="password"
                        placeholder=""
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* <!--end::Input wrapper--> */}
                  </div>
                  {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--end::Input group=--> */}
                {/* <!--begin::Action--> */}
                <div className="text-center">
                  <button
                    type="submit"
                    id="kt_new_password_submit"
                    className="btn btn-lg btn-primary fw-bolder"
                  >
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
                {/* <!--end::Action--> */}
              </form>
              {/* <!--end::Form--> */}
            </div>
            {/* <!--end::Wrapper--> */}
          </div>
          {/* <!--end::Content-->/ */}
          {/* <!--begin::Footer-->/ */}
          <div className="d-flex flex-center flex-column-auto p-10">
            {/* <!--begin::Links--> */}
            <div className="d-flex align-items-center fw-bold fs-6">
              <a
                href="https://keenthemes.com"
                className="text-muted text-hover-primary px-2"
              >
                About
              </a>
              <a
                href="mailto:support@keenthemes.com"
                className="text-muted text-hover-primary px-2"
              >
                Contact
              </a>
              <a
                href="https://1.envato.market/EA4JP"
                className="text-muted text-hover-primary px-2"
              >
                Contact Us
              </a>
            </div>
            {/* <!--end::Links--> */}
          </div>
          {/* <!--end::Footer--> */}
        </div>
        {/* <!--end::Authentication - New password--> */}
      </div>
    </>
  );
}

export default NewPassword;
