import React from "react";
import ContactCards from "./ContactCards";
import { Link } from "react-router-dom";

function ContactList(props) {
  
  const deleteConactHandler = (id) => {
    props.removeContactHandler(id);
  };

  const renderList = props.contacts?.map((contact) => {
    
    return (
      <div className="card">
        <ContactCards
          key={contact.id}
          contact={contact}
          clickHander={deleteConactHandler}
        />
      </div>
    );
  });
  return (
    <div className="mt-4" >
      <div className="d-flex justify-content-between">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="btn btn-primary mb-4">Add Contact</button>
        </Link>
      </div>
      {renderList}
    </div>
  );
}

export default ContactList;
