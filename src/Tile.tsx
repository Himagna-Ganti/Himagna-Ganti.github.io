function Tile(props) {
  if (props.learning === "1") {
    return (
      <div className=" p-[5px] m-[5px] text-[12px] lg:text-[15px] hover:animate-bounce ease-in-out duration-300 lg:m-[10px] lg:p-[10px] rounded-full bg-accent">
        <h1 className="text-background">{props.data}</h1>
      </div>
    );
  } else {
    return (
      <div className="border-2 lg:text-[15px] p-[5px] m-[5px] text-[12px] hover:animate-bounce ease-in-out duration-300 lg:m-[10px] lg:p-[10px] rounded-full border-accent">
        <h1 className="text-txt">{props.data}</h1>
      </div>
    );
  }
}

export default Tile;
