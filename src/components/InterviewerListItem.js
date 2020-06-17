import React from "react";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const className = props.selected ? "interviewers__item--selected" : "interviewers__item";

  return (
    <li className={className} onClick={props.onChange}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}