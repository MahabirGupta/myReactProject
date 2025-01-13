import { useState } from "react";

export default function Form() {
  const [name, setName] = useState(""); // initial value of name to be empty
  // function handleChange(e) {
  //   setName(e.target.value);
  // }
  return (
    <div>
      <form>
        {/* pass in the event,e in the demo function */}
        <input
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
