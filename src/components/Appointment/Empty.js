import React from "react";

export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img onClick={() => {
        props.onAdd("CREATE");
      }}
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      />
    </main>
  );
}