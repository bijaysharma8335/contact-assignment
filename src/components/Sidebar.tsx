import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className=" border-2 border-black w-1/3">
            <ul className=" h-full">
                <li className="border-b-2 border-black p-5">
                    <Link to="/" className="text-2xl text-blue-500 underline   ">
                        Contact
                    </Link>
                </li>
                <li className="border-b-2 border-black p-5">
                    <Link to="/charts" className="text-2xl text-blue-500 underline  ">
                        Charts and Maps
                    </Link>
                </li>
                <li className="p-5 text-2xl text-black font-semibold">Sidebar</li>
            </ul>
        </div>
    );
};

export default Sidebar;
