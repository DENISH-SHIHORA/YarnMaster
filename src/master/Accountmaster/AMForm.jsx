import axios from "axios";
import React, { useState } from "react";

function AMForm() {
  const [accountMasters, setAccountMasters] = useState({
    pname: "",
    oaddress: "",
    daddress: "",
    mnumber: "",
    type: "",
  });

  const { pname, oaddress, daddress, mnumber, type } = accountMasters;

  const onInputChange = (e) => {
    e.preventDefault();
    setAccountMasters({ ...accountMasters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    await axios.post("http://localhost:3003/AMdata", accountMasters);
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
            <h5 className="modal-title">Add Account Master Details</h5>
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
              onClick={(e) => handleSubmit(e)}
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

export default AMForm;
