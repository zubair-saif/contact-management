import React from "react";
import { Link } from "react-router-dom";

function ContactDetails(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <Link to="/">
            <button className="btn btn-primary">Go back to Contact List</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
