
export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter(dayInfo => dayInfo.name === day);
  const appointmentVal = [];
  
  if (filteredDays.length !== 0) {
    filteredDays[0].appointments.map(appointmentId => {
      if (state.appointments[appointmentId]) {
        appointmentVal.push(state.appointments[appointmentId])
      }
    })
  }
  return appointmentVal;
}

export const getInterview = (state, appointmentInterview) => {
  if (appointmentInterview) {
    const getInterviewer = appointmentInterview.interviewer;
    const interviewerInfo = state.interviewers[getInterviewer];
    return { ...appointmentInterview, interviewer: interviewerInfo}
  } else {
    return null;
  }
} 

export const getInterviewersByDay = (state, day) => {
  const filteredDays = state.days.filter(dayInfo => dayInfo.name === day);
  const interviewersVal = [];
  
  if (filteredDays.length !== 0) {
    const interviewersList = filteredDays[0].interviewers;
    for (let interviewer of interviewersList)  {
      interviewersVal.push(state.interviewers[interviewer])
    };
  }
  return interviewersVal;
}