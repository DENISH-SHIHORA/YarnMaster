import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import AMForm from "./AMForm"
import { Link } from "react-router-dom";
import axios from "axios";

function Accountmaster() {
  const [accountMaster, setAccountMaster] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const result = await axios.get("http://localhost:3003/AMdata");
    //  console.log(result);
    setAccountMaster(result.data);
  };  

  const editAM = async (id) => {
    const x = await axios.get(`http://localhost:3003/AMdata/${id}`);
    console.log(x.data);
  };

  const deleteAM = async (id) => {
    await axios.delete(`http://localhost:3003/AMdata/${id}`);
    load();
  };

  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar />
        <div className="wrapper d-flex flex-column flex-column-fluid ">
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
                    Account Master
                  </h1>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                >
                  Add Details
                </button>
              </div>
            </div>
            <div className="post d-flex flex-column-fluid " id="kt_post">
              <div id="kt_content_container" className="container">
                <div className="kt_content_container">  
                  <div className="card card-flush shadpw-sm ">
                    <div className="card-body p-0 ">
                      <div className="card-px text-center py-10 my-50">
                        <div className="py-5">
                          <table className="table gs-8 gy-8 gx-8">
                            <thead>
                              <tr className="fw-bold fs-7 text-gray-800 border-bottom border-gray-200">
                                <th>Customer</th>
                                <th>Party Name</th>
                                <th>Order Address</th>
                                <th>Delivery Address</th>
                                <th>Mobile Number</th>
                                <th>Creditor/Debitor</th>
                              </tr>
                            </thead>
                            <tbody>
                              {accountMaster.map((am, index) => (
                                <tr key={am}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{am.pname}</td>
                                  <td>{am.oaddress}</td>
                                  <td>{am.daddress}</td>
                                  <td>{am.mnumber}</td>
                                  <td>{am.type}</td>
                                  <td style={{ padding: "10px" }}>
                                    <Link
                                      to={`/amaster/edit/${am.id}`}
                                      onClick={() => editAM(am.id)}
                                    >
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
                                      onClick={() => deleteAM(am.id)}
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

                        <p className="text-gray-400 text-center fs-4 fw-bold mb-10">
                          There are no details of Account Master added yet.
                        </p> */}
                      </div>
                      <AMForm />
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

export default Accountmaster;
