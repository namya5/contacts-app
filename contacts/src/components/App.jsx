import React from "react";
import Card from "./card"
import contacts from "../contacts"


function App() {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <Card name={contacts[0].name} img={contacts[0].imgURL} tell={contacts[0].tell} email={contacts[0].email}/>
        <Card name={contacts[1].name} img={contacts[1].imgURL} tell={contacts[1].tell} email={contacts[1].email}/>
        <Card name={contacts[2].name} img={contacts[2].imgURL} tell={contacts[2].tell} email={contacts[2].email}/>
      </div>
    );
  }

export default App;