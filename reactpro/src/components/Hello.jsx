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

// function Hello(props) {
//   console.log(props);
//   // props.name = "Tom";
//   // props destructuring
//   // const { name, message } = props;
//   return (
//     <div>
//       <h1>
//         {/* {props.message} {props.name}! */}
//         {props.message} {props.name} {props.emoji} {props.seatNumbers} <br />
//         {props.person.message} {props.person.name} {props.person.emoji} {""}
//         {props.person.seatNumbers}
//       </h1>
//       ;
//     </div>
//   );
// }

function Hello(person) {
  // console.log(props);
  // props.name = "Tom";
  // props destructuring
  // const { name, message } = props;
  return (
    <div>
      <h1>
        {/* {props.message} {props.name}! */}
        {person.message} {person.name} {person.emoji} {""}
        {person.seatNumbers}
      </h1>
      ;
    </div>
  );
}
// function Hello({ name, message, emoji, seatNumbers, person }) {
//   // console.log(props);
//   // props destructuring
//   // const { name, message } = props;
//   return (
//     <div>
//       <h1>
//         {/* {props.message} {props.name}! */}
//         {message} {name} {emoji} {seatNumbers} {person}!
//       </h1>
//       ;
//     </div>
//   );
// }

export default Hello;
