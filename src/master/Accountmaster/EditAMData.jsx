import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";

function EditAMData() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [accountMasters, setAccountMasters] = useState({
    pname: "",
    oaddress: "",
    daddress: "",
    mnumber: "",
    type: "",
  });

  useEffect(() => {
    load();
  }, []);

  const { pname, oaddress, daddress, mnumber, type } = accountMasters;

  const onInputChange = (e) => {
    setAccountMasters({ ...accountMasters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(e);
    await axios.put(`http://localhost:3003/AMdata/${id}`, accountMasters);
    navigate("/amaster");
  };

  const load = async () => {
    const result = await axios.get(`http://localhost:3003/AMdata/${id}`);
    //  console.log(result.data);
    setAccountMasters(result.data);
  };

  return (
    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Account Master Details</h5>
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
              <label className="required form-label">Party Name</label>
              <input
                className="form-control form-control-solid"
                placeholder="John Smith"
                type="text"
                name="pname"
                value={pname}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Office Address</label>
              <input
                className="form-control form-control-solid"
                placeholder="Ex:  243, Icon mall, Surat, Gujarat, India"
                type="text"
                name="oaddress"
                value={oaddress}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Delivery Address</label>
              <input
                className="form-control form-control-solid"
                placeholder="Ex:  7865,Girnar mall,Vadodara , Gujarat, India"
                type="text"
                name="daddress"
                value={daddress}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Mobile Number</label>
              <input
                className="form-control form-control-solid"
                placeholder="7098960530"
                type="tel"
                name="mnumber"
                value={mnumber}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-10">
              <label className="required form-label">Choose Type</label>
              <select
                className="form-select form-select-solid"
                aria-label="Select example"
                placeholder="Choose Type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value="Creditor">Creditor</option>
                <option value="Debitor">Debitor</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="reset"
              className="btn btn-light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAMData;
