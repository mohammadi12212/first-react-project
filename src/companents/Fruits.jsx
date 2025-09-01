import Fruit from "./fruit";
export default function Fruits({ fruits }) {
  return (
    <div className="h-screen w-full gap-2 p-0 flex justify-center items-center flex-wrap flex-co">
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          emoji={fruit.emoji}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
}
