import Logo from "../Images/Logo.jpg"
import { Link } from "react-router-dom"

function Navbar() {

   

    return(
    <>
        <div className="flex justify-between bg-rose-200 sticky top-0 z-1 shadow-xl ">
            <div className="text-3xl p-5 my-1 flex justify-center">
                <img src={Logo} alt="logo" className="rounded-full  w-14"></img>
                <h2 className="p-2 font-bold text-gray-800">Grewup</h2>
            </div>
            <div >
                <ul className="flex my-5 p-2 justify-around gap-5 px-5">
                    <li className=" text-indigo-900 cursor-pointer p-2 font-extrabold "><Link to={"/"} >Home</Link></li>
                    <li className=" p-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-3xl "><Link to={"/OurServices"}>Our Services</Link></li>
                    <li className="  cursor-pointer p-2  hover:text-white hover:bg-gray-800 rounded-3xl">News</li>
                    <li className="  cursor-pointer p-2  hover:text-white hover:bg-gray-800 rounded-3xl"><Link to={"/Contactus"}>Contact us</Link></li>
                </ul>

            </div>
        </div >
       

    </>
    )
}
export default Navbar