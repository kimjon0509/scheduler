import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "components/InterviewerListItem"

import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };

  const interviewersList = props.interviewers.map(interview => 
    <InterviewerListItem
      key={interview.id}
      id={interview.id}
      name={interview.name}
      avatar={interview.avatar}
      selected={interview.id === props.value}
      onChange={() => props.onChange(interview.id)}
    />
  )

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersList}
      </ul>
    </section>
  )

}