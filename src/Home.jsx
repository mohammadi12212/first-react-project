import Fruits from "./companents/Fruits";
function Home() {
  const fruits = [
    {
      emoji: "🍋",
      name: "Lemon",
      price: 5,
    },
    {
      emoji: "🍎",
      name: "Apple",
      price: 12,
    },
    {
      emoji: "🍒",
      name: "Cherries",
      price: 10,
    },
    {
      emoji: "🍍",
      name: "Pineapple",
      price: 20,
    },
    {
      emoji: "🍌",
      name: "Banana",
      price: 40,
    },
    {
      emoji: "🍐",
      name: "Pear",
      price: 50,
    },
    {
      emoji: "🥭",
      name: "Mango",
      price: 55,
    },
    {
      emoji: "🥝",
      name: "Kiwi",
      price: 80,
    },
    {
      emoji: "🥥",
      name: "Coconut",
      price: 90,
    },
    {
      emoji: "🍇",
      name: "Grapes",
      price: 45,
    },
    {
      emoji: "🍈",
      name: "Melon",
      price: 59,
    },
    {
      emoji: "🍉",
      name: "Watermelon",
      price: 43,
    },
  ];
  return (
    <div>
      <div className="h-12 w-full bg-gray-800">
        <h1 className="text-2xl text-center text-white">
          In the name of Allah
        </h1>
        <Fruits fruits={fruits} />
      </div>
    </div>
  );
}
export default Home;
