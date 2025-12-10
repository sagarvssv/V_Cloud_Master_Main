import React from 'react'
import { assets } from '../../assets/assets'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Vcloud = () => {

    const righticons = [
        { id: 1, img: assets.iconr_1 },
        { id: 2, img: assets.iconr_2 },
        { id: 3, img: assets.iconr_3 },
        { id: 4, img: assets.iconr_5 },
      
    ];

    const lefticons = [
        { id: 10, img: assets.icon_1 },
        { id: 11, img: assets.icon_2 },
        { id: 12, img: assets.icon_3 },
        { id: 13, img: assets.icon_4 },
  
    ];

    return (
        <div
            className="
                w-full h-full py-16
                flex flex-col md:flex-row
                items-center justify-center
                gap-10 md:gap-20
                bg-[#f9fafb]

            "
        >

            {/* LEFT GRID */}
            <div className="grid grid-cols-2 gap-5 order-1 ">
                {lefticons.map((icon) => (
                    <img key={icon.id} src={icon.img} className="w-10 h-10  px-1 py-1   bg-gray-200 rounded-full" />
                ))}
            </div>

            {/* Left → Logo arrows */}
            <div className="flex items-center gap-3 order-2 ">
                <FaAngleRight className="text-4xl text-red-500 animate-pulse" />
                <FaAngleRight className="text-4xl text-red-400 animate-pulse delay-150" />
                <FaAngleRight className="text-4xl text-red-300 animate-pulse delay-300" />
            </div>

            {/* LOGO */}
            <div className="flex items-center justify-center order-3">
                <img src={assets.logo} className="w-40 md:w-44 drop-shadow-xl" />
            </div>

            {/* Logo → Right arrows */}
            <div className="flex items-center gap-3 order-4 ">
                <FaAngleLeft className="text-4xl text-red-500 animate-pulse" />
                <FaAngleLeft className="text-4xl text-red-400 animate-pulse delay-150" />
                <FaAngleLeft className="text-4xl text-red-300 animate-pulse delay-300" />
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-2 gap-5 order-5">
                {righticons.map((icon) => (
                    <img key={icon.id} src={icon.img} className="w-10 h-10  px-1 py-1   bg-gray-200 rounded-full" />
                ))}
            </div>
        </div>
    );
};

export default Vcloud;
