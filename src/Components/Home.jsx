import Banner from "../Images/Banner.jpg"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-decoration-line: underline text-4xl flex justify-center my-3 flex-wrap p-4">Empowering Growth in the Digital Realm Where Ideas Spark and Brands Shine!</h1>

            <h1 className=" text-center text-2xl font-bold  text-indigo-900  p-3">Our Vision</h1>
            <h1 className="p-3  text-2xl text-center ">Empowering businesses to thrive in the digital age through innovative marketing strategies</h1>
            <div className=" bg-rose-200">
                <img src={Banner} alt="Banner" className=""></img>
                <div className=" text-center">
                    <button className=" bg-gray-800 rounded-3xl text-3xl  p-3 my-4  text-white "><Link to={"/Ourservices"}>Explore Services</Link></button>
                </div>
                <div className="p-2 my-2 m-5 rounded-md flex flex-col flex-grow text-black bg-rose-200">
                    <h1 className="text-4xl p-3 my-1  ">We Can Do Every Single Digital Solution Together</h1>
                    <h1 className="text-2xl p-3 my-1">At Grew up agency,
                        we are passionate about helping businesses thrive in the digital landscape.
                        With a team of dedicated professionals,
                        we craft innovative and tailored digital marketing solutions to elevate your brand, reach your target audience,
                        and drive meaningful results.
                    </h1>
                </div>
            </div>


        </>


    )
}

export default Home