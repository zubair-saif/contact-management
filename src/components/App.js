import { useState, useEffect } from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetails from "./ContactDetail";
import api from "../api/contact";

function App() {
  const [contacts, setContacts] = useState([]);

  //retriveContact
  const retriveContact = async () => {
    const response = await api.get("/contacts");
    return response;
  };
  const addContactHandler = async(contact) => {
    const request={
      id: uuid(), ...contact
    }
    const response=await api.post('/contacts',request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContact();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                removeContactHandler={removeContactHandler}
              />
            )}
          ></Route>
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          ></Route>
          <Route path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
