import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

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
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
