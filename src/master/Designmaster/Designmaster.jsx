import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import DMForm from "./DMForm";
import axios from "axios";

function Designmaster() {
  const [designMaster, setDesignMaster] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const result = await axios.get("http://localhost:3003/DMdata");
    //  console.log(result);
    setDesignMaster(result.data);
  };

  const deleteDM = async (id) => {
    await axios.delete(`http://localhost:3003/DMdata/${id}`);
    load();
  };

  // const [dname, setDname] = useState("");
  // const [pick, setPick] = useState("");
  // const [mtype, setMtype] = useState("");
  // const [feder, setFeder] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   const docRef = addDoc(collection(db, "DesignMaster"), {
  //     dname,
  //     pick,
  //     mtype,
  //     feder,
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  //   navigate("/home");
  // };

  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar />
        <div className="wrapper d-flex flex-column flex-row-fluid">
          <Topbar />
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
                    Design Master
                  </h1>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                >
                  Add Design
                </button>
              </div>
            </div>
            <div className="post d-flex flex-column-fluid " id="kt_post">
              <div id="kt_content_container" className="container">
                <div className="kt_content_container">
                  <div className="card card-flush shadpw-sm">
                    <div className="card-body p-0">
                      <div className="card-px text-center py-10 my-50">
                        <div className="py-5">
                          <table className="table gs-8 gy-8 gx-8">
                            <thead>
                              <tr className="fw-bold fs-7 text-gray-800 border-bottom border-gray-200">
                                <th>ID</th>
                                <th>Design Name</th>
                                <th>Pick</th>
                                <th>Machine Type</th>
                                <th>Feder</th>
                              </tr>
                            </thead>
                            <tbody>
                              {designMaster.map((dm, index) => (
                                <tr key={dm}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{dm.dname}</td>
                                  <td>{dm.pick}</td>
                                  <td>{dm.mtype}</td>
                                  <td>{dm.feder + ""}</td>
                                  <td style={{ padding: "10px" }}>
                                    <Link to={`/dmaster/edit/${dm.id}`}>
                                      <button
                                        className="btn btn-icon btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_1"
                                      >
                                        <i className="far fa-edit"></i>
                                      </button>
                                    </Link>
                                    <Link
                                      to="#"
                                      onClick={() => deleteDM(dm.id)}
                                    >
                                      <button className="btn btn-icon btn-primary m-2">
                                        <i className="fas fa-trash-alt"></i>
                                      </button>
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {/* <h2 className="fs-2x fw-bolder mb-10">Welcome!</h2>
                    <p className="text-gray-400 fs-4 fw-bold mb-10">
                      There are no details of Design added yet.
                    </p> */}
                      </div>
                      <DMForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Designmaster;
