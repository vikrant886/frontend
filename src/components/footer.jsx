import React from "react";
import { UsersRound, CircleDot, Star, GitFork } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="flex flex-row justify-center ">
                <div className="grid ml-20 grid-cols-5 place-content-center w-[60%] pb-20  ">
                    {/* <div className="text-white col-span-2"></div> */}
                    <div className="flex flex-row gap-4">
                        <UsersRound className="text-[#707173] size-8" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-3xl">0</p>
                            <p className="text-[#818285] font-medium   text-2xl">Contributors</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CircleDot className="text-[#707173] size-8" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-3xl">0</p>
                            <p className="text-[#818285]  font-medium  text-2xl">Issues</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Star className="text-[#707173] size-8" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-3xl">5</p>
                            <p className="text-[#818285] font-medium   text-2xl">Stars</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <GitFork className="text-[#707173] size-8" />
                        <div className="flex flex-col">
                            <p className="text-black font-semibold text-3xl">5</p>
                            <p className="text-[#818285]  font-medium  text-2xl">Forks</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row gap-4 col-span-1 justify-end pr-40">
                    <FaGithub className="text-[#8695b2] size-12" />
                </div>
            </div>
            <div className="bg-[#E44C27] p-8 w-full"></div>
        </>
    )
}
