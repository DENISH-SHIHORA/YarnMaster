import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function DMForm() {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);
  const [designMasters, setDesignMasters] = useState({
    dname: "",
    pick: "",
    mtype: "",
    feder: "",
  });

  const { dname, pick, mtype, feder } = designMasters;

  const onInputChange = (e) => {
    setDesignMasters({ ...designMasters, [e.target.name]: e.target.value });
    console.log([e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "DesignMaster"), {
      dname,
      pick,
      mtype,
      feder,
    });
    console.log("Document written with ID: ", docRef.id);
    await axios.post("http://localhost:3003/DMdata", designMasters);
    load();
  };

  const load = () => {
    window.location.reload();
  };

  const handler = (e) => {
    var key = e.key;
    console.log("pressed: " + key);
    const values = [...fields];
    console.log(values);

    for (var i = 0; i <= key - 1; i++) {
      values.push({ value: "" });
      setFields(values);
    }
  };

  var tmp = 0;
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    console.log(event.target.value);
    setFields(values);
    var a = [];
    values.forEach((element) => {
      tmp = parseFloat(tmp) + parseFloat(element.value > 0 ? element.value : 0);
      a.push(parseFloat(element.value));
    });
    console.log(a);
    document.getElementById("total").innerHTML = tmp;
  }

  return (
    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Design Details</h5>
            <div
              className="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="mb-10">
              <label className="required form-label">Design Name</label>
              <input
                className="form-control form-control-solid"
                placeholder="YH129"
                type="text"
                name="dname"
                value={dname}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Pick</label>
              <input
                className="form-control form-control-solid"
                placeholder="34"
                type="number"
                name="pick"
                value={pick}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Machine Type</label>
              <input
                className="form-control form-control-solid"
                placeholder="Ex: 2688/5400"
                type="text"
                name="mtype"
                value={mtype}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Feder</label>
              <input
                className="form-control form-control-solid"
                placeholder="4"
                type="number"
                name="feder"
                value={feder}
                onChange={(e) => onInputChange(e)}
                onKeyPress={(e) => handler(e)}
              />
            </div>
            <div className="mb-10">
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <div className="mb-4 d-flex">
                      <input
                        className="form-control form-control-solid txtFeder"
                        type="number"
                        name="feader"
                        placeholder="Enter feder"
                        value={field.value}
                        onChange={(e) => handleChange(idx, e)}
                        required
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              id="total"
              className="mb-10"
              style={{
                color: "red",
                fontSize: "20px",
                fontFamily: "cursive",
              }}
            ></div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMForm;
