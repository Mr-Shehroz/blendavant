import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Blog() {
    return (
        <section className="bg-[#F8F8F8] text-black 2xl:pt-43 pt-29 2xl:pb-44 pb-30">
            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto flex items-center 2xl:gap-9 gap-6">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] w-[6px] 2xl:h-[59px] h-[55px]" />
                <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] leading-[100%] test-black`}>Our Blogs</h2>
            </div>

            <div className="2xl:max-w-[1440px] px-30 2xl:px-0 mx-auto flex justify-between 2xl;mt-14 mt-12">

                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/blog-1.svg" width={400} height={400} alt="blog-1" className="w-full 2xl:h-[444px] h-[300px]" />
                    <button className="absolute 2xl:bottom-43 bottom-37 right-0 bg-white hover:bg-black 2xl:h-[110px] 2xl:w-[130px] h-[80px] w-[80px] rounded-[8px] 2xl:rounded-[10px] flex justify-center items-center transition duration-300 hover:scale-105 group">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="2xl:size-14 size-10 transition duration-300 group-hover:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                    <div className="2xl:max-w-[477px] max-w-[380px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[26px] text-[20px] leading-[100%] text-black 2xl:mt-11 mt-7`}>Lorem Ipsum is simply dummy text</h4>
                        <h4 className={`${montserrat.className} font-normal 2xl:text-[18px] text-[14px] 2xl:leading-[29px] leading-[20px] text-black 2xl:mt-5 mt-4`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    </div>

                    <div className="max-w-[170px] flex justify-between 2xl:mt-3 mt-2">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <h5 className="text-[#959595] 2xl:text-[16px] text-[14px]">10</h5>

                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <h5 className="text-[#959595] 2xl:text-[16px] text-[14px]">25.9K</h5>

                        </div>

                    </div>

                </div>
                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/blog-2.svg" width={400} height={400} alt="blog-2" className="w-full 2xl:h-[444px] h-[300px]" />
                    <button className="absolute 2xl:bottom-43 bottom-37 right-0 bg-white hover:bg-black 2xl:h-[110px] 2xl:w-[130px] h-[80px] w-[80px] rounded-[8px] 2xl:rounded-[10px] flex justify-center items-center transition duration-300 hover:scale-105 group">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="2xl:size-14 size-10 transition duration-300 group-hover:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                    <div className="2xl:max-w-[477px] max-w-[380px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[26px] text-[20px] leading-[100%] text-black 2xl:mt-11 mt-7`}>Lorem Ipsum is simply dummy text</h4>
                        <h4 className={`${montserrat.className} font-normal 2xl:text-[18px] text-[14px] 2xl:leading-[29px] leading-[20px] text-black 2xl:mt-5 mt-4`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    </div>
                    <div className="max-w-[170px] flex justify-between 2xl:mt-3 mt-2">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <h5 className="text-[#959595] 2xl:text-[16px] text-[14px]">10</h5>

                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <h5 className="text-[#959595] 2xl:text-[16px] text-[14px]">25.9K</h5>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}