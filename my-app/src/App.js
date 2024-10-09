import React from "react";
import "./App.css";
import { SaveButton } from "./components/buttons/saveButton/SaveButton";
import { CancelButton } from "./components/buttons/cancelButton/CancelButton";
import { MemberList } from "./components/membersCardsSection/MembersCardsSection";
import { Button } from "./components/buttons/button/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Add members to Front-end development team</p>
        <MemberList showSearch={true}/>
        <div className="buttons">
        <Button  variant="cancel" />
        <Button variant="save" />
        </div>
      </div>
    </div>
  );
}

export default App;
