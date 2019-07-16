import React, { useState } from "react";
import { Container, Table } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import fullListOfContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));
  // const [contactId, setcontactId] = useState(0);

  function handleClick() {
    return Math.floor(Math.random() * 195) + 5;
  }

  function addActor() {
    setContacts([...contacts, fullListOfContacts[handleClick()]]);
  }

  function sortPopularity() {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  }

  function sortNames() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function deleteActor(z) {
    let key = z.target.id;
    let newOne = [...contacts];
    newOne.splice(key, 1);
    setContacts(newOne);
  }

  return (
    <div className="App">
      <Container>
        <h1>Olá</h1>
        <br />

        <tr>
          <th>
            <button className="btn btn-primary" onClick={addActor}>
              One More Random Dude
            </button>
          </th>{" "}
          <br />
          <br />
          <th>
            <button className="btn btn-primary" onClick={sortPopularity}>
              Sort Popularity
            </button>{" "}
          </th>
          <br />
          <br />
          <th>
            <button className="btn btn-primary" onClick={sortNames}>
              Sort Names
            </button>{" "}
          </th>
          <br />
          <br />
        </tr>
        <Table hover>
          <thread>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thread>
          <tbody>
            {contacts.map((c, z) => (
              <tr key={z}>
                <td>
                  <img src={c.pictureUrl} alt="" width="100" />
                </td>
                <td>{c.name}</td>
                <td>{c.popularity}</td>
                <td>
                  <button id={z} className="btn btn-danger" onClick={deleteActor}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
