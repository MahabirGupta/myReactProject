import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Pear", "Oranges", "Bananas", "Water-melon"];

  // create an object array
  const fruits = [
    { name: "Apple", price: 2.6, emoji: "🍎", soldout: true },
    { name: "Pear", price: 3.65, emoji: "🍐", soldout: true },
    { name: "Oranges", price: 0.6, emoji: "🍊", soldout: false },
    { name: "Bananas", price: 3.3, emoji: "🍌", soldout: true },
    { name: "Water-melon", price: 4.2, emoji: "🍉", soldout: false },
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
