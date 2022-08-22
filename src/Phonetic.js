import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-volume-high"></i> {""} {""} Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
