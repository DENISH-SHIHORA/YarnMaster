import { React, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import axios from "axios";

function Matchingmaster() {
  const [matchingMaster, setMatchingMaster] = useState([]);
  const [matchingMaster1, setMatchingMaster1] = useState([]);
  const [dmname, setDmname] = useState();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const result = await axios.get("http://localhost:3003/DMdata");
    const result1 = await axios.get("http://localhost:3003/CMdata");
    setMatchingMaster(result.data);
    setMatchingMaster1(result1.data);
  };

  // const getInitialState = () => {
  //   const value = "Select";
  //   return value;
  // };
  // const [value, setValue] = useState(getInitialState);
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  // var html = "";
  // for (var i = 1; i < value; i++) {
  //   console.log(i + " " + value);
  //   var element = document.getElementById("fed").innerHTML;
  //   html += element;
  //   console.log(element);
  // }
  // if (html) document.getElementById("output").innerHTML = html;

  const handleChange1 = (e) => {
    document
      .getElementById("change")
      .setAttribute("class", "wrapper d-flex flex-column");

    var count = e.target.value;
    var html = "";
    var x = `<div class="row justify-center">
              <div class="col-sm-3">
                <label class="required form-label ">Select</label>
                <select class="form-select xyz" aria-label="Select example" value="select">
                  <option disabled selected>
                    Select
                  </option>  
                  <option value="G">G</option>
                  <option value="P">P</option>
                </select>
              </div>
              <div class="col-sm-3">
                <label class="required form-label">Feder</label>
                <select
                  class="form-select"
                  aria-label="Select example"
                  disabled
                >
                  <option id="1" value="f1">F1</option>
                  <option id="2" value="f2">F2</option>
                  <option id="3" value="f3">F3</option>
                  <option id="4" value="f4">F4</option>
                </select>
              </div>
              <div class="col-sm-5">
                <label class="required form-label">Color Selection</label>
                <select class="form-select abc" aria-label="Select example" value="color">
                  <option disabled selected>
                  Select Color
                  </option>
                    ${matchingMaster1.map(
                      (cm) =>
                        `<option id="cname">
                          ${cm.cname}
                        </option>`
                    )}
                </select>
              </div>
            </div>`;
    for (var j = 1; j <= count; j++) {
      html += x;
      document.getElementById("output").innerHTML = html;
    }
    document.getElementById("output1").innerHTML = html;
    document.getElementById("output2").innerHTML = html;
    document.getElementById("output3").innerHTML = html;
    document.getElementById("output4").innerHTML = html;
    document.getElementById("output5").innerHTML = html;
    const a = document.querySelectorAll(".xyz");
    a.forEach((q) => {
      q.addEventListener("change", function handleChange(e) {
        console.log(e.target.value);
      });
    });

    const b = document.querySelectorAll(".abc");
    b.forEach((p) => {
      p.addEventListener("change", function handleChange(e) {
        console.log(e.target.value);
      });
    });

    console.log(document.querySelectorAll(".xyz").length);
    setDmname(e.target.value);
  };

  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar />
        <div
          id="change"
          className="wrapper d-flex flex-column flex-column-fluid"
        >
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
                    Matching Master
                  </h1>
                </div>
              </div>
            </div>
            <div className="post d-flex flex-column-fluid" id="kt_post">
              <div id="kt_content_container" className="container">
                <div id="kt_content_container">
                  <div className="card card-flush shadpw-sm ">
                    <div className="card-body p-0">
                      <div className="card-px py-10 my-50 ">
                        <div className="row py-5">
                          <div className="col-md-4 mb-6">
                            <label className="required form-label">
                              Design Name
                            </label>
                            <select
                              className="form-select"
                              aria-label="Select example"
                              value={dmname}
                              onChange={handleChange1}
                            >
                              <option disabled selected>
                                Select Design
                              </option>
                              {matchingMaster.map((dm) => (
                                <>
                                  <option value={dm.feder} key={dm}>
                                    {dm.dname}
                                  </option>
                                </>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-4 mb-6">
                            <label className="required form-label">Feder</label>
                            <select
                              className="form-select"
                              aria-label="Select example"
                              id="foption"
                            >
                              <option value="Auto" disabled selected>
                                Auto
                              </option>
                            </select>
                          </div>
                          <div className="col-md-4 mb-6">
                            <label className="required form-label">Pick</label>
                            <select
                              className="form-select"
                              aria-label="Select example"
                            >
                              <option value="Auto" disabled selected>
                                Auto
                              </option>
                            </select>
                          </div>
                          <div className="col-md-4 mb-6" id="output"></div>
                          <div className="col-md-4 mb-6" id="output1"></div>
                          <div className="col-md-4 mb-6" id="output2"></div>
                          <div className="col-md-4 mb-6" id="output3"></div>
                          <div className="col-md-4 mb-6" id="output4"></div>
                          <div className="col-md-4 mb-6" id="output5"></div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
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
export default Matchingmaster;

// var multipal = (e) => {
//   return `<div className="row justify-content-center">
//     <div className="col-sm-3">
//       <label className="required form-label ">Select</label>
//       <select className="form-select" aria-label="Select example" value=${select} onchange=${e=>onInputChange(e)}>
//         <option value="" disabled selected>
//           Select
//         </option>
//         <option value="G">G</option>
//         <option value="P">P</option>
//       </select>
//     </div>
//     <div className="col-sm-3">
//       <label className="required form-label ">Feder</label>
//       <select
//         className="form-select"
//         aria-label="Select example"
//         disabled
//       >
//         <option value="f1">F1</option>
//         <option value="f2">F2</option>
//         <option value="f3">F3</option>
//         <option value="f4">F4</option>
//       </select>
//     </div>
//     <div className="col-sm-5">
//       <label className="required form-label ">Color Selection</label>
//       <select className="form-select" aria-label="Select example" value=${color} onChange=${onInputChange}>
//         <option value="" disabled selected>
//         Select Color
//         </option>
//           ${matchingMaster1.map(
//             (cm) =>
//               `<option>
//                 ${cm.cname}
//               </option>`
//           )}
//       </select>
//     </div>
// </div>`;
// };

// var html = "";
// var html1 = "";
// for (var i = 0; i < 10; i++) {
//   if (e.target.value === matchingMaster[i].dname) {
//     console.log(i + " " + matchingMaster[i].feder);
//     for (var k = 1; k <= 4; k++) {
//       for (var j = 1; j <= matchingMaster[i].feder; j++) {
//         html += document.getElementById("fed").innerHTML;
//         document.getElementById("output").innerHTML = html;
//         console.log(html);
//       }
//       html1 = document.getElementById("fed1").innerHTML;
//       document.getElementById("output1").innerHTML = html1;
//     }
//   }
// }
