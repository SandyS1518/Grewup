import Banner from "../Images/Banner.jpg"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function Card() {
    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <div>
                    <h1 className="text-5xl text-center  text-black my-3">Our Services</h1>
                </div>

                <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3 ">
                    <div className=" bg-rose-200 rounded-md shadow-2xl    ">
                        <img src={Banner} alt="Banner" className="shadow-2xl"></img>
                        <h1 className=" text-3xl my-2 p-1 sm:w-12/12">SEO</h1>
                        <h1 className="text-2xl p-2  ">In today’s competitive digital landscape, having a website alone isn’t enough. To truly stand out
                            and attract potential customers, your site needs to rank high in search engine results.
                            Our comprehensive SEO services are designed to enhance your online visibility, drive organic
                            traffic, and boost your business growth.
                            We understand that every business is unique, and we tailor our SEO strategies to meet your
                            specific needs and goals.</h1>
                        <div className="text-center ">
                            <button className="  bg-gray-700 active:bg-gray-800 rounded-3xl my-4  text-white text-2xl border border-gray-800 p-2 shadow-2xl"><Link to={"/Contactus"}>Contact us</Link></button>

                        </div>
                    </div>
                    <div className=" bg-rose-200 rounded-md shadow-2xl ">
                        <img src={Banner} alt="Banner" className="shadow-2xl"></img>
                        <h1 className=" text-3xl my-2 p-1">SMM</h1>
                        <h1 className="text-2xl p-2 ">Social Media Marketing (SMM) involves leveraging social media platforms to promote products,
                            services, or brands.
                            This includes crafting and sharing content, interacting with followers, and using paid advertising
                            to expand reach.
                            The primary objectives of SMM are to boost brand awareness, drive traffic to websites, generate
                            leads, and enhance customer loyalty.
                            Successful SMM strategies typically blend various content formats (like images, videos, and
                            articles), maintain regular posting schedules, and employ analytics to monitor and improve
                            performance.</h1>
                        <div className=" text-center">
                            <button className="shadow-2xl rounded-3xl my-4  bg-gray-700 active:bg-gray-800 text-white text-2xl border  border-gray-800 p-2 "><Link to={"/Contactus"}>Contact us</Link></button>
                        </div>
                    </div>
                    <div className=" bg-rose-200 rounded-md shadow-2xl ">
                        <img src={Banner} alt="Banner" className="shadow-2xl" ></img>
                        <h1 className=" text-3xl my-2 p-1">WEB DEVELOPMENT</h1>
                        <h1 className="text-2xl p-2 ">Web development comprises elements like web design, content generation, client-side and
                            server-side scripting, and network security setup.
                            It encompasses the creation of basic static web pages to the development of intricate web
                            applications, e-commerce platforms, and social networking sites.</h1>
                        <div className=" text-center">
                            <button className="shadow-2xl rounded-3xl my-4  bg-gray-700 active:bg-gray-800 text-white text-2xl border  border-gray-800 p-2  "><Link to={"/Contactus"}>Contact us</Link></button>
                        </div>
                    </div>
                </div >

                <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                    <div className=" bg-rose-200 rounded-md shadow-2xl">
                        <img src={Banner} alt="Banner" className="shadow-2xl"></img>
                        <h1 className=" text-3xl my-2 p-1">META ADS</h1>
                        <h1 className="text-2xl p-2 ">Meta Ads, previously Facebook Ads, is Meta's advertising platform for businesses. It empowers
                            businesses to craft, target, and oversee advertisements across Meta's suite of applications and
                            services, encompassing Facebook, Instagram, Messenger, and Audience Network. Through
                            Meta Ads, advertisers can tailor their outreach to specific demographics, interests, and
                            behaviors, while also evaluating campaign effectiveness using in-depth analytics and insights.</h1>
                        <div className=" text-center ">
                            <button className=" shadow-2xl rounded-3xl my-4   bg-gray-700 active:bg-gray-800 text-white text-2xl border  border-gray-800 p-2   "><Link to={"/Contactus"}>Contact us</Link></button>
                        </div>
                    </div>
                    <div className=" bg-rose-200 rounded-md shadow-2xl">
                        <img src={Banner} alt="Banner" className="shadow-2xl" ></img>
                        <h1 className=" text-3xl my-2 p-1">CONTENT MARKETING</h1>
                        <h1 className="text-2xl p-2 ">The goal of content marketing is to engage with the audience, build trust, establish brand
                            authority, and ultimately drive profitable customer action. It involves understanding the target
                            audience's needs and preferences, creating compelling content that addresses those needs,
                            and distributing it through appropriate channels to maximize reach and impact.</h1>
                        <div className=" text-center">
                            <button className="  shadow-2xl rounded-3xl my-4   bg-gray-700 active:bg-gray-800 text-white text-2xl border  border-gray-800 p-2  "><Link to={"/Contactus"}>Contact us</Link></button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Card