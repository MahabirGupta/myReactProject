export default function Fruits() {
  const fruits = ["Apple", "Pear", "Oranges", "Bananas", "Water-melon"];

  // create
  // const fruits = [];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
