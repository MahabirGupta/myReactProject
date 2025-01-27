import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" }); // create firstName and lastName objects
  // function handleChange(e) {
  //   setName(e.target.value);
  // }
  function handleSubmit(e) {
    // to prevent the page from refreshing when clicking the submit button
    e.preventDefault();
    // to check if the name has been saved
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        {/* pass in the event,e in the demo function */}
        <input
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          // onChange={(e) => handleChange(e)}
          // spread operator ...name
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          type="text"
          // spread operator ...name to prevent the first name from being overwritten
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
