import React from "react";
import ContactCards from "./ContactCards";

function ContactList(props) {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <div className="card">
        <ContactCards key={contact.id} contact={contact} clickHander={deleteConactHandler}/>
      </div>
    );
  });
  return (
    <div className="mt-4">
      <h2>Contact List</h2>
      {renderList}
    </div>
  );
}

export default ContactList;
