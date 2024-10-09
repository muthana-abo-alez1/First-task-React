import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./MemberCard.css";

export const MemberCard = ({ name, selected }) => {
  return (
    <div className={`member-card ${selected ? "selected" : "not-selected"}`}>
      <div className="person-info">
        <FontAwesomeIcon icon={faUser} className="person-icon" />
        <span className="name">{name}</span>
      </div>
      <div className={`checkmark-container ${selected ? "selected" : ""}`}>
        {selected && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
      </div>{" "}
    </div>
  );
};
