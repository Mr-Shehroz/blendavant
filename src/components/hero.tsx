"use client";

import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">

      {/* Scroll Icon with bounce animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="hidden absolute 2xl:-bottom-39 xl:-bottom-27 lg:-bottom-23 md:-bottom-14 bottom-20  2xl:-left-10 xl:-left-6 lg:-left-5 md:-left-4 w-full md:flex justify-center items-end z-50"
      >
        <Image
          className="2xl:w-[468px] xl:w-[320px] lg:w-[280px] w-[170px]"
          src="/hero-scroll.svg"
          width={100}
          height={100}
          alt="scroll"
        />
      </motion.div>

      {/* Left Side Content */}
      <div className="bg-gradient-to-b from-[#393C3F] to-[#1A1E21] md:h-screen pb-15 md:w-[89%] w-full text-white">

        {/* Hero Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="2xl:mt-45 lg:mt-28 mt-20 2xl:max-w-[630px] lg:px-17 md:px-10 sm:px-13 px-2 2xl:px-0 mx-auto md:text-start text-center"
        >
          <h2 className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-white lg:mb-5 mb-2`}>
            Wedding Decor,
          </h2>
          <span className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-white`}>
            Elevated
          </span>
          <span className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-[#C2B173]`}>
            .
          </span>
          <p className={`${montserrat.className} font-medium 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[10px] text-[9px] xl:leading-[33px] lg:leading-[22px] leading-[18px] text-white 2xl:mt-8 lg:mt-4 mt-2`}>
            Because generic wedding items wouldn't make you stand out.
          </p>
          <div className="border border-[#A1A1A1] md:w-[70%] w-[80%] mx-auto md:mx-0 2xl:mt-11 lg:mt-6 mt-4" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8,
              },
            },
          }}
          className="flex md:justify-between justify-center gap-10 px-2 ts:px-4 items-center sm:text-start text-center 2xl:mt-13 lg:mt-9 mt-6 2xl:max-w-[630px] lg:px-17 md:px-10 sm:px-13 2xl:px-0 mx-auto"
        >
          {/* Stat 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:items-start items-center"
          >
            <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] md:text-[20px] text-[18px] leading-[100%] text-[#C2B173] 2xl:mb-4 lg:mb-3 mb-2`}>
              750+
            </h2>
            <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] md:text-[11px] text-[9px] leading-[100%] text-white 2xl:mb-3 mb-2`}>
              Testimonials
            </h4>
            <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] 2xl:leading-[32px] xl:leading-[20px] lg:leading-[18px] text-[#CFCFCF]`}>
              Testimonials from various customer who trust us
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:items-start items-center"
          >
            <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] text-[18px] leading-[100%] text-[#C2B173] 2xl:mb-4 lg:mb-3 mb-2`}>
              2022
            </h2>
            <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] md:text-[11px] text-[9px]  leading-[100%] text-white 2xl:mb-3 mb-2`}>
              Award-Winner
            </h4>
            <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] 2xl:leading-[32px] xl:leading-[20px] lg:leading-[18px] text-[#CFCFCF]`}>
              Our high-quality items will indeed wow you and your guests
            </p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          className="max-w-[630px] mx-auto text-center md:text-start 2xl:mt-12 lg:mt-8 mt-5 lg:px-17 md:px-10 sm:px-13 2xl:px-0"
        >
          <button
            className={`bg-white text-black xl:px-2 px-1 xl:py-4 lg:py-3 py-2 2xl:w-[279px] xl:w-[180px] lg:w-[150px] md:w-[120px] sm:w-[100px] w-[130px] rounded-[5px] ${montserrat.className} 2xl:text-[18px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] font-medium leading-[100%] transition duration-300 hover:bg-black hover:text-white hover:scale-105`}
          >
            SHOP ALL DECORATIONS
          </button>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative w-full"
      >
        <Image
          className="w-full md:h-[100vh] h-[350px] object-cover"
          src="/hero.svg"
          width={500}
          height={500}
          alt="hero"
        />
      </motion.div>
    </section>
  );
}
