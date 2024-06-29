import click from "pixelarticons/svg/corner-left-up.svg";

interface Props {
  name: string;
  image: string;
}

const Icon = ({ name = "", image = "" }: Props) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center border-black border-2 rounded-md p-5 relative">
      <img className="w-28 h-28 md:h-20 md:w-20 object-contain" src={image} />
      <h3 className="text-center text-xl md:text-lg text-dark uppercase underline">{name} </h3>

      {/* The click on icon */}
      <img src={click} className="absolute w-10 h-10 -translate-y-1/2 right-0" />
    </div>
  )
}

export default Icon
