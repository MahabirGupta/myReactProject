import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  // create element variable
  let messageOne = <h1>This is message 1</h1>;
  let messageTwo = <h1>This is message 2</h1>;

  let message;
  const display = false;
  if (display) {
    message = <h1>This is message 1</h1>;
    // return messageOne;
  } else {
    message = <h1>This is message 2</h1>;
    // return messageTwo;
  }
  return message;
  // if (display) {
  //   return (
  //     <div>
  //       <h3>This is a Conditional Component</h3>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h3>Code everyday!</h3>
  //     </div>
  //   );
  // }
  // if (display) {
  //   return <Welcome />;
  // } else {
  //   return <Code />;
  // }
}
