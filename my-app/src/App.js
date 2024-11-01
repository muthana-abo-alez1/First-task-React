import React from "react";
import "./App.css";
import { MembersCardsSection } from "./components/membersCardsSection/MembersCardsSection";
import { Button } from "./components/buttons/button/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Add members to Front-end development team</p>
        <MembersCardsSection/>
        <div className="buttons">
        <Button  variant="cancel" text={"Cancel"}/>
        <Button variant="save" text={"Save"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
