import Cafe from "./components/Cafe";
import Cake from "./components/Cake";

export default function Home() {
  let fav = "cake";
  if (fav === "coffe") {
    return (
      <div className="w-full h-screen items-center flex justify-center">
        <Cake />
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen items-center flex justify-center">
        <Cafe />
      </div>
    );
  }
}
