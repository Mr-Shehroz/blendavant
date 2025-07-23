"use client"
import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#F8F8F8] text-black 2xl:pt-43 xl:pt-29 lg:pt-24 pt-18 2xl:pb-44 xl:pb-30 lg:pb-20 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="2xl:max-w-[1430px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto flex items-center 2xl:gap-9 xl:gap-6 lg:gap-4 sm:gap-3 gap-2">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] xl:w-[6px] lg:w-[4px] w-[3px] 2xl:h-[59px] xl:h-[55px] lg:h-[45px] sm:h-[35px] h-[30px]" />
                <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[18px] leading-[100%] test-black`}>Our Blogs</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="2xl:max-w-[1440px] xl:px-30 lg:px-17 sm:px-10 px-16 2xl:px-0 mx-auto flex flex-col sm:flex-row lg:justify-between justify-center gap-5 lg:gap-0 2xl:mt-14 lg:mt-12 mt-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/blog-1.svg" width={400} height={400} alt="blog-1" className="w-full 2xl:h-[444px] ex:h-[330px] exx:h-[350px] xl:h-[300px] lg:h-[270px] md:h-[200px] h-[180px]" />
                    <button className="absolute 2xl:bottom-43 xl:bottom-37 lg:bottom-30 md:bottom-24 bottom-31 right-0 bg-white hover:bg-black 2xl:h-[110px] 2xl:w-[130px] xl:h-[80px] xl:w-[80px] lg:w-[70px] lg:h-[70px] h-[50px] w-[50px] rounded-[8px] 2xl:rounded-[10px] flex justify-center items-center transition duration-300 hover:scale-105 group">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="2xl:size-14 xl:size-10 lg:size-8 size-6 transition duration-300 group-hover:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                    <div className="2xl:max-w-[477px] lg:max-w-[380px] max-w-[300px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-black 2xl:mt-11 xl:mt-7 lg:mt-5 mt-3`}>Lorem Ipsum is simply dummy text</h4>
                        <h4 className={`${montserrat.className} font-normal 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[29px] xl:leading-[20px] lg:leading-[18px] text-black 2xl:mt-5 xl:mt-4 lg:mt-3 mt-2`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    </div>

                    <div className="max-w-[170px] flex justify-between 2xl:mt-3 lg:mt-2 mt-1">
                        <div className="flex items-center lg:gap-2 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 lg:size-4 size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <h5 className="text-[#959595] 2xl:text-[16px] lg:text-[14px] text-[10px]">10</h5>

                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 lg:size-4 size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <h5 className="text-[#959595] 2xl:text-[16px] lg:text-[14px] text-[10px]">25.9K</h5>

                        </div>

                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/blog-2.svg" width={400} height={400} alt="blog-2" className="w-full 2xl:h-[444px] ex:h-[330px] exx:h-[350px] xl:h-[300px] lg:h-[270px] md:h-[200px] h-[180px]" />
                    <button className="absolute 2xl:bottom-43 xl:bottom-37 lg:bottom-30 md:bottom-24 bottom-31 right-0 bg-white hover:bg-black 2xl:h-[110px] 2xl:w-[130px] xl:h-[80px] xl:w-[80px] lg:w-[70px] lg:h-[70px] h-[50px] w-[50px] rounded-[8px] 2xl:rounded-[10px] flex justify-center items-center transition duration-300 hover:scale-105 group">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="2xl:size-14 xl:size-10 lg:size-8 size-6 transition duration-300 group-hover:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                    <div className="2xl:max-w-[477px] lg:max-w-[380px] max-w-[300px] ">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-black 2xl:mt-11 xl:mt-7 lg:mt-5 mt-3`}>Lorem Ipsum is simply dummy text</h4>
                        <h4 className={`${montserrat.className} font-normal 2xl:text-[18px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[29px] xl:leading-[20px] lg:leading-[18px] text-black 2xl:mt-5 xl:mt-4 lg:mt-3 mt-2`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    </div>
                    <div className="max-w-[170px] flex justify-between 2xl:mt-3 lg:mt-2 mt-1">
                        <div className="flex items-center lg:gap-2 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 lg:size-4 size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <h5 className="text-[#959595] 2xl:text-[16px] lg:text-[14px] text-[10px]">10</h5>

                        </div>
                        <div className="flex items-center lg:gap-2 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" className="2xl:size-6 lg:size-4 size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <h5 className="text-[#959595] 2xl:text-[16px] lg:text-[14px] text-[10px]">25.9K</h5>

                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}