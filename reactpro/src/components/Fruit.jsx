export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {/* {price > 4 ? (
        <li>
          {emoji} {name} ${price}
        </li>
      ) : (
        ""
      )} */}
      <li>
        {emoji} {name} ${price} {soldout ? "Soldout" : ""}
      </li>
    </>
  );
}
