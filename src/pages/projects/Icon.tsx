interface Props {
  name: string;
  image: string;
}

const Icon = ({ name = "", image = "" }: Props) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center border-black border-2 rounded-md p-5">
      <img className="w-12 h-12 object-contain" src={image} />
      <h3 className="text-center text-xl md:text-lg text-dark uppercase underline">{name} </h3>
    </div>
  )
}

export default Icon
