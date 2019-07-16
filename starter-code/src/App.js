import React, { useState } from 'react';
import { Container, Table } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import fullListOfContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));
  const [contactId, setcontactId] = useState(0);

  function handleClick() {
    // let random = Math.floor(Math.random(useState(fullListOfContacts)))
    // setcontactId(random);
  }


  return (
    <div className="App">
      <Container>
        <h1>Olá</h1><br/>
        <button className="btn btn-primary" onClick={handleClick}>One More Random Dude</button> <br /><br/>
        <Table hover> 
          <thread>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thread>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td><img src={c.pictureUrl} alt="" width="100"/></td>
                <td>{c.name}</td>
                <td>{c.popularity}</td>

                
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
