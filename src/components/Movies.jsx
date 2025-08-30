import Movie from "./movie";

export default function Movies() {
  const movies = [
    {
      name: "MoneyHeast",
      epesode: 80,
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhdUPu1kfYIVlQc4U_t5RGFu_pH8E7hjgE-84YA5HLJLw0kNyeHY0KGZSEl7v8xdkFeY&usqp=CAU",
    },
    {
      name: "MohTabo",
      epesode: 50,
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXdiZGzrmcsCpuJxWjq8mRccDDpOIZdC3uw&s",
    },
    {
      name: "Mukhtar",
      epesode: 14,
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwGPZv4hion5u4OrsaVKBb9yjCJ6T8kdanw&s",
    },
  ];
  // const filterdMovies = movies.filter((item) => {
  //   return item.epesode > 30;
  // });
  return (
    <div className="h-screen w-full flex flex-row gap-1.5">
      <h1 className="bg-blue-500 text-center flex flex-row text-2xl p-4">
        Favorite Movies
      </h1>
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          key={movie.name}
          ImageUrl={movie.ImageUrl}
          ep={movie.epesode}
        />
      ))}
    </div>
  );
}
