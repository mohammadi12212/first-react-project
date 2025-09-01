export default function Fruit({ emoji, name, price }) {
  return (
    <div className="rounded-sm bg-gray-700 text-white flex flex-col items-center text-center w-[15%] h-[25%] p-3">
      <h1 className="bg-white w-25 text-4xl p-4 mb-1.5 rounded-sm text-center">
        {emoji}
      </h1>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="font-bold">{price}AFG</h1>
    </div>
  );
}
