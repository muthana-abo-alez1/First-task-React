import React from "react";
import "./App.css";
import { MembersCardsSection } from "./components/membersCardsSection/MembersCardsSection";
import { Button } from "./components/buttons/button/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Add members to Front-end development team</p>
        <MembersCardsSection showSearch={true}/>
        <div className="buttons">
        <Button  variant="cancel" />
        <Button variant="save" />
        </div>
      </div>
    </div>
  );
}

export default App;
