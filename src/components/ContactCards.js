import React from "react";

function ContactCards(props) {
    const {id,name,email}=props.contact;
  return (
    <div>
      <ul className="list-group">
        <li
          className="list-group-item d-flex justify-content-between align-items-start border-0"
          key={id}
        >
             <i class="bi bi-person-circle"></i>
          <div className="ms-2 me-auto">
         
            <div className="fw-bold">{name}</div>
            {email}
          </div>
          <span className="badge mt-2">
            <i className="bi bi-trash" onClick={() => props.clickHander(id)}></i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactCards;
