"use client";

import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
    {
        name: "Chantelle F.",
        countryFlag: "/flag-1.svg",
        image: "/review-1.svg",
        text: `The heart-shaped "guest book" is exactly as pictured and beautifully crafted. Guests at my daughter and son-in-law's reception loved the idea and had fun adding their signed mini hearts into the frame. We used acrylic paint pens for minimum bleeding on the signed mini hearts..`,
    },
    {
        name: "Liam W.",
        countryFlag: "/flag-1.svg",
        image: "/review-1.svg",
        text: `The heart-shaped "guest book" is exactly as pictured and beautifully crafted. Guests at my daughter and son-in-law's reception loved the idea and had fun adding their signed mini hearts into the frame. We used acrylic paint pens for minimum bleeding on the signed mini hearts.`,
    },
    {
        name: "Sophia M.",
        countryFlag: "/flag-1.svg",
        image: "/review-1.svg",
        text: `The heart-shaped "guest book" is exactly as pictured and beautifully crafted. Guests at my daughter and son-in-law's reception loved the idea and had fun adding their signed mini hearts into the frame. We used acrylic paint pens for minimum bleeding on the signed mini hearts.`,
    },
    {
        name: "Sophia M.",
        countryFlag: "/flag-1.svg",
        image: "/review-1.svg",
        text: `The heart-shaped "guest book" is exactly as pictured and beautifully crafted. Guests at my daughter and son-in-law's reception loved the idea and had fun adding their signed mini hearts into the frame. We used acrylic paint pens for minimum bleeding on the signed mini hearts.`,
    },
    {
        name: "Sophia M.",
        countryFlag: "/flag-1.svg",
        image: "/review-1.svg",
        text: `The heart-shaped "guest book" is exactly as pictured and beautifully crafted. Guests at my daughter and son-in-law's reception loved the idea and had fun adding their signed mini hearts into the frame. We used acrylic paint pens for minimum bleeding on the signed mini hearts.`,
    },
];

export default function Reviews() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white text-black 2xl:pb-51 xl:pb-34 lg:pb-26 pb-16 2xl:pt-44 xl:pt-29 lg:pt-20 pt-16">
            <div className="2xl:max-w-[1430px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto flex items-center 2xl:gap-9 xl:gap-6 lg:gap-4 sm:gap-3 gap-2">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] xl:w-[6px] lg:w-[4px] w-[3px] 2xl:h-[101px] xl:h-[75px] lg:h-[55px] sm:h-[40px] h-[35px]" />
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2">
                    <h5
                        className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] sm:text-[9px] text-[8px] leading-[100%] text-black`}
                    >
                        MAKE YOUR WEDDING DAY EXTRA SPECIAL
                    </h5>
                    <h2
                        className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[18px] leading-[100%] text-black`}
                    >
                        The love <span className="text-[#C2B173]">we received</span>
                    </h2>
                </motion.div>
            </div>

            <div className="2xl:max-w-[1430px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto lg:mt-13 mt-6">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row sm:justify-between justify-center items-center">
                                <div>
                                    <Image
                                        src={review.image}
                                        width={353}
                                        height={353}
                                        alt={`review-${index}`}
                                        className="2xl:h-[353px] 2xl:w-[353px] xl:h-[240px] xl:w-[240px] lg:h-[220px] lg:w-[220px] md:w-[180px] md:h-[180px] w-[160px] h-[160px]"
                                    />
                                </div>

                                <div className="2xl:max-w-[1010px] ex:max-w-[800px] exx:max-w-[860px] xl:max-w-[700px] lg:max-w-[600px] md:max-w-[450px] max-w-[370px] 2xl:mt-8 xl:mt-7 lg:mt-3 text-center sm:text-start mt-5 sm:mt-0">
                                    <div className="flex justify-center sm:justify-start items-center 2xl:gap-3 gap-2">
                                        <h3
                                            className={`${montserrat.className} font-semibold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-black`}
                                        >
                                            {review.name}
                                        </h3>
                                        <Image
                                            className="h-[22px] 2xl:w-[43px] xl:w-[35px] lg:w-[30px] w-[20px]"
                                            src={review.countryFlag}
                                            height={100}
                                            width={100}
                                            alt="flag"
                                        />
                                    </div>
                                    <p
                                        className={`${montserrat.className} font-normal 2xl:text-[20px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[32px] xl:leading-[24px] lg:leading-[20px] text-black 2xl:mt-4 xl:mt-2 lg:mt-[6px] mt-1`}
                                    >
                                        {review.text}
                                    </p>

                                    <div className="flex justify-center sm:justify-start gap-2 2xl:mt-4 xl:mt-2 lg:mt-[6px] sm:mt-1 mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#C2B173"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#C2B173"
                                                className="2xl:size-6 lg:size-4 size-3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                                />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Navigation buttons under stars */}
                                    <div className="flex justify-center sm:justify-start gap-3 2xl:mt-8 xl:mt-5 lg:mt-3 sm:mt-2 mt-5">
                                        {/* Prev Button */}
                                        <button className="swiper-button-prev-custom 2xl:h-[34px] 2xl:w-[34px] xl:h-[24px] xl:w-[24px] lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] rounded-full border border-[#C2B173] flex justify-center items-center transition duration-300 hover:bg-[#C2B173] group">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#C2B173"
                                                className="2xl:size-5 xl:size-4 lg:size-3 size-2 group-hover:stroke-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                                />
                                            </svg>
                                        </button>

                                        {/* Next Button */}
                                        <button className="swiper-button-next-custom 2xl:h-[34px] 2xl:w-[34px] xl:h-[24px] xl:w-[24px] lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] rounded-full border border-[#C2B173] flex justify-center items-center transition duration-300 hover:bg-[#C2B173] group">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#C2B173"
                                                className="2xl:size-5 xl:size-4 lg:size-3 size-2 rotate-180 group-hover:stroke-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                                />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
}
