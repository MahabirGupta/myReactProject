import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  const display = true;
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
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
