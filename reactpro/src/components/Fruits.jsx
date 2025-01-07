import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Pear", "Oranges", "Bananas", "Water-melon"];

  // create an object array
  const fruits = [
    { name: "Apple", price: 2.6, emoji: "🍎" },
    { name: "Pear", price: 3.65, emoji: "🍐" },
    { name: "Oranges", price: 0.6, emoji: "🍊" },
    { name: "Bananas", price: 3.3, emoji: "🍌" },
    { name: "Water-melon", price: 4.2, emoji: "🍉" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
