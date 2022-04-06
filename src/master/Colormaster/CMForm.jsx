import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function CMForm() {
  const navigate = useNavigate();
  const [colorMasters, setColorMasters] = useState({
    cname: "",
    weight: "",
  });

  const { cname, weight } = colorMasters;

  const onInputChange = (e) => {
    setColorMasters({ ...colorMasters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "ColorMaster"), {
      cname,
      weight,
    });
    console.log("Document written with ID: ", docRef.id);
    await axios.post("http://localhost:3003/CMdata", colorMasters);
    load();
  };

  const load = () => {
    window.location.reload();
  };

  return (
    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Color Master Details</h5>
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
              <label className="required form-label">Color Name</label>
              <input
                className="form-control form-control-solid"
                placeholder="Red/1234"
                type="text"
                name="cname"
                value={cname}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Weight</label>
              <input
                className="form-control form-control-solid"
                placeholder="0.22"
                type="number"
                name="weight"
                value={weight}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
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
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMForm;
