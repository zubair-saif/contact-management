import React from "react";
import { Link } from "react-router-dom";

function ContactCards(props) {
  const { id, name, email } = props.contact;
  return (
    <div>
      <ul className="list-group">
        <li
          className="list-group-item d-flex justify-content-between align-items-start border-0"
          key={id}
        >
          <i className="bi bi-person-circle"></i>

          <div className="ms-2 me-auto">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="fw-bold">{name}</div>
              {email}
            </Link>
          </div>

          <span className="badge mt-2">
            <i
              className="bi bi-trash"
              onClick={() => props.clickHander(id)}
            ></i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactCards;
