export default function Movie(props) {
  return (
    <div className="w-[30%] h-fit p-4 bg-gray-400 text-center ">
      <img src={props.ImageUrl} className="h-[180px]" alt="" />
      <h1>{props.name}</h1>
      <p>Epesode: {props.ep}</p>
    </div>
  );
}
