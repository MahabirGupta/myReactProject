// const name = "Rob";

// function displayMesssage() {
//   return "Wow!";
// }

// function Hello() {
//   return (
//     <h1>
//       Hello from a Component! {name} {10 + 20} {displayMesssage()}
//     </h1>
//   );
// }

// function Hello() {
//   return (
//     <div>
//       <h1>Hello from a Component!</h1>;<h1>Wow!</h1>;
//     </div>
//   );
// }

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.message} {props.name}!
      </h1>
      ;
    </div>
  );
}

export default Hello;
