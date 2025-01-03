import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 2, 3, 4];
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "smile",
    seatNumbers: seatNumbers,
  };
  return (
    <div className="App">
      <Hello
        name="Rob"
        message="Hi there!"
        emoji="smile"
        // passing an array as a prop
        seatNumbers={seatNumbers}
        person={person}
      />
      {/* <Hello name="Anish" message="Hello!" /> */}
    </div>
  );
}

export default App;
