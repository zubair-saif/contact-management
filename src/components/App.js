import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <AddContact/> 
     <ContactList/>
    </div>
  );
}

export default App;
