"use client";

import { useState } from "react";
import { montserrat } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinkClass = `${montserrat.className} font-medium 2xl:text-base text-[12px] leading-[100%] text-white hover:text-gray-300 transition-colors duration-200 hover:scale-105`;

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <header className="hidden md:flex 2xl:max-w-[1628px] md:px-6 mx-auto justify-between items-center px-3">
                {/* Logo */}
                <Link href="#">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={287}
                        height={60}
                        priority
                        className="2xl:w-[287px] 2xl:h-[60px] w-[250px] h-[60px]"
                    />
                </Link>

                {/* Navigation + Icons */}
                <div className="flex 2xl:gap-[52px] gap-[40px] items-center">
                    {/* Navigation */}
                    <nav className="flex 2xl:gap-6 gap-4 items-center max-w-[476px]">
                        <Link className={navLinkClass} href="#">SHOP ALL</Link>
                        <div className="w-px 2xl:h-[21px] h-[18px] bg-white" />
                        <Link className={navLinkClass} href="#">SHOP BY THEME</Link>
                        <div className="w-px 2xl:h-[21px] h-[18px] bg-white" />
                        <Link className={navLinkClass} href="#">SHOP BY COLOUR</Link>
                    </nav>

                    {/* Right-side Icons */}
                    <div className="flex 2xl:gap-5 gap-3 items-center">
                        {/* Search Icon */}
                        <div className="hover:text-gray-300 transition duration-200 cursor-pointer hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="2xl:h-[30px] 2xl:w-[30px] w-[22px] h-[22px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>


                        <div className="w-px h-[21px] bg-white" />

                        {/* Profile Icon */}
                        <div className="hover:text-gray-300 transition duration-200 cursor-pointer hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="2xl:h-[30px] 2xl:w-[30px] w-[22px] h-[22px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>


                        <div className="w-px h-[21px] bg-white" />

                        {/* Shopping Bag with Plus Icon */}
                        <div className="relative inline-block 2xl:h-[30px] 2xl:w-[30px] w-[22px] h-[22px] transition-transform duration-200 hover:scale-110 cursor-pointer">
                            {/* Bag Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 28 28"
                                className="2xl:h-[30px] 2xl:w-[30px] w-[22px] h-[22px]"
                                fill="none"
                            >
                                <mask
                                    id="mask0_67_74"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="28"
                                    height="28"
                                >
                                    <rect width="28" height="28" fill="url(#pattern0_67_74)" />
                                </mask>
                                <g mask="url(#mask0_67_74)">
                                    <rect x="-19" y="-29" width="53" height="90" fill="#F5F5F5" />
                                </g>
                                <defs>
                                    <pattern
                                        id="pattern0_67_74"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                    >
                                        <use xlinkHref="#image0_67_74" transform="scale(0.0078125)" />
                                    </pattern>
                                    <image
                                        id="image0_67_74"
                                        width="128"
                                        height="128"
                                        preserveAspectRatio="none"
                                        xlinkHref="data:image/png;base64,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"
                                    />
                                </defs>
                            </svg>

                        </div>


                        {/* USD Dropdown */}
                        <div className="relative group 2xl:ml-6 ml-4 cursor-pointer">
                            {/* USD text + Icon */}
                            <div className="flex gap-[2px] items-center transition-colors duration-200 group-hover:text-gray-300">
                                <h3 className={`${navLinkClass} transition-colors duration-200`}>USD</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-[30px] h-[30px] text-white transition-colors duration-200 group-hover:text-gray-300"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.146 10.146a.5.5 0 0 1 .708 0l3.646 3.647 3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </div>

                            {/* Dropdown menu */}
                            <div className="absolute hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-md top-[100%] right-0 z-50 2xl:min-w-[80px] min-w-[60px]">
                                <button className="2xl:px-4 2xl:py-2 px-3 py-1 2xl:text-sm text-[12px] hover:bg-gray-100 text-left">USD</button>
                                <button className="2xl:px-4 2xl:py-2 px-3 py-1 2xl:text-sm text-[12px] hover:bg-gray-100 text-left">EUR</button>
                                <button className="2xl:px-4 2xl:py-2 px-3 py-1 2xl:text-sm text-[12px] hover:bg-gray-100 text-left">PKR</button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>


            {/* Mobile Header */}
            <div className="p-4 bg-[#1A1E21] flex items-center justify-between lg:hidden">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={180} height={50} priority />
                </Link>

                {/* Hamburger Icon */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#2A2D30] p-4 flex flex-col gap-4 text-white">
                    <Link href="#" className={navLinkClass}>SHOP ALL</Link>
                    <Link href="#" className={navLinkClass}>SHOP BY THEME</Link>
                    <Link href="#" className={navLinkClass}>SHOP BY COLOUR</Link>
                    <div className="border-t border-white/20 my-2"></div>
                    <div className="flex gap-6">
                        <span className="hover:text-gray-300">Search</span>
                        <span className="hover:text-gray-300">Profile</span>
                        <span className="hover:text-gray-300">Cart</span>
                        <span className="hover:text-gray-300">USD</span>
                    </div>
                </div>
            )}
        </div>
    );
}
