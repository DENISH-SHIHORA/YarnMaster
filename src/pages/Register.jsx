import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { sendEmailVerification } from "firebase/auth";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setError("");
    try {
      await signUp(email, password).then((e) => {
        console.log(e);
        console.log(e.user.auth.currentUser);
        sendEmailVerification(e.user.auth.currentUser).then(() => {
          console.log("email sent");
          const docRef = addDoc(collection(db, "RegisterData"), {
            firstname,
            lastname,
            email,
            password,
            confirmpassword,
          });
          console.log("Document written with ID: ", docRef.id);
        });
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Authentication - Sign-up --> */}
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
            <div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {/* <!--begin::Form--> */}
              <form
                className="form w-100"
                noValidate="novalidate"
                id="kt_sign_up_form"
                action=""
                onSubmit={handleSubmit}
              >
                {/* <!--begin::Heading--> */}
                <div className="mb-10 text-center">
                  {/* <!--begin::Title--> */}
                  <h1 className="text-dark mb-3">Create an Account</h1>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Link--> */}
                  <div className="text-gray-400 fw-bold fs-4">
                    Already have an account?
                    <Link to="/login" className="link-primary fw-bolder">
                      Sign in here
                    </Link>
                  </div>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Heading-->/ */}
                {error && <Alert variant="danger">{error}</Alert>}
                {/* <!--begin::Input group--> */}
                <div className="row fv-row mb-7">
                  {/* <!--begin::Col--> */}
                  <div className="col-xl-6">
                    <label className="form-label fw-bolder text-dark fs-6">
                      First Name
                    </label>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      placeholder=""
                      name="first-name"
                      autoComplete="off"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  {/* <!--end::Col--> */}
                  {/* <!--begin::Col--> */}
                  <div className="col-xl-6">
                    <label className="form-label fw-bolder text-dark fs-6">
                      Last Name
                    </label>
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      placeholder=""
                      name="last-name"
                      autoComplete="off"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  {/* <!--end::Col--> */}
                </div>
                {/* <!--end::Input group--> */}
                {/* <!--begin::Input group--> */}
                <div className="fv-row mb-7">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Email
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* <!--end::Input group--> */}
                {/* <!--begin::Input group--> */}
                <div className="mb-10 fv-row">
                  {/* <!--begin::Wrapper-->/ */}
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
                {/* <!--end::Input group=-->/ */}
                {/* <!--begin::Input group--> */}
                <div className="fv-row mb-5">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Confirm Password
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    placeholder=""
                    name="onfirm-password"
                    autoComplete="off"
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </div>
                {/* <!--end::Input group--> */}
                {/* <!--begin::Actions--> */}
                <div className="text-center">
                  <button
                    type="submit"
                    id="sign_up_submit"
                    className="btn btn-lg btn-primary"
                    // onClick={handleClick}
                  >
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="reset"
                    id="kt_sign_up_reset"
                    className="btn btn-lg btn-primary"
                  >
                    <span className="indicator-label">Reset</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
                {/* <!--end::Actions--> */}
              </form>
              {/* <!--end::Form--> */}
            </div>
            {/* <!--end::Wrapper--> */}
          </div>
          {/* <!--end::Content--> */}
          {/* <!--begin::Footer-->/ */}

          {/* <!--end::Footer--> */}
        </div>
        {/* <!--end::Authentication - Sign-up--> */}
      </div>
    </>
  );
}

export default Register;
