import React from "react";
import { Link } from "react-router-dom";

function ContactDetails(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div className="mx-auto">
      <div className="card col-md-3 mt-4 mx-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          className=" img-fluid img-thumbnail "
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 mx-auto">
        <Link to="/">
          <button className="btn btn-primary">Go back to Contact List</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
