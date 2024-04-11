import React from "react";
import Footer from "./footer";
import avatar  from  "../images/20236675.png"

export default function Home() {
    return (
        <div className="h-[100vh] flex justify-center items-center flex-col">
            <div className="w-full h-full flex justify-center items-end">
                <div className="w-[60%] text-wrap h-full flex flex-col justify-center items-end gap-12" >
                    <p className="bg-white leading-[70px] w-[80%] text-[#33353a] text-7xl font-chivo ">clearlydecoded/
                        <span className="text-[#2e373e] font-bold text-7xl font-chivo">html-css-javascript-tutorial</span>
                    </p>
                    <p className="text-4xl text-[#818285] pr-20 w-[80%] font-chivo line leading-[50px]">
                        Example code for HTML, CSS, and Javascript for Web Developers Coursera Course
                    </p>
                </div>
                <div className="w-[30%] pl-20 h-full flex justify-start items-center ">
                    <img src={avatar} className="text-black size-60 relative bottom-10" alt="" />
                </div>
            </div>
            <div className="w-full top-0">
                <Footer />
            </div>
        </div>
    )
}