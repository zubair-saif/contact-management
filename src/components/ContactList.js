import React, { useRef } from "react";
import ContactCards from "./ContactCards";
import { Link } from "react-router-dom";

function ContactList(props) {
  const inputEl = useRef("");
  const deleteConactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const getSearchTerm = () => {
    props.searchKeywords(inputEl.current.value);
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
    <div className="mt-4">
      <div className="d-flex justify-content-between">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="btn btn-primary mb-4">Add Contact</button>
        </Link>
      </div>
      <div className="col mb-3">
        <input
          ref={inputEl}
          type="text"
          placeholder="Search.."
          className="col-12"
          onChange={getSearchTerm}
          value={props.term}
        />
      </div>
      {renderList.length > 0 ? renderList : "there is no contact Available"}
    </div>
  );
}

export default ContactList;
