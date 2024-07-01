import { Link } from "react-router-dom"

const BlueScreenDeath = () => {
  return (
    <div className="w-full h-screen bg-[#3366ff] flex flex-col justify-center gap-9 p-4">
      <h2 className="text-9xl text-white">:(</h2>

      <h3 className="text-white text-xl">My website ran into a problem displaying this page. You can go back to the main page by clicking on the link below. If you believe that this should be a valid address, you can contact meand let me know</h3>

      <h5 className="text-white text-lg"> Go back to the home page by <Link to="/Home" className="underline">Clicking Here</Link>.</h5>
    </div>
  )
}

export default BlueScreenDeath
