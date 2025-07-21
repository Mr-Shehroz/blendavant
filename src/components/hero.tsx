import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center">
            <div className="hidden absolute 2xl:-bottom-39 xl:-bottom-27 lg:-bottom-23 md:-bottom-14 bottom-20  2xl:-left-10 xl:-left-6 lg:-left-5 md:-left-4 w-full md:flex justify-center items-end z-50">
                <Image className="2xl:w-[468px] xl:w-[320px] lg:w-[280px] w-[170px]" src="/hero-scroll.svg" width={100} height={100} alt="scroll" />
            </div>
            <div className="bg-gradient-to-b from-[#393C3F] to-[#1A1E21] md:h-screen pb-15 md:w-[89%] w-full text-white">
                <div className="2xl:mt-45 lg:mt-28 mt-20 2xl:max-w-[630px] lg:px-17 md:px-10 sm:px-13 px-2 2xl:px-0 mx-auto md:text-start text-center">
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-white lg:mb-5 mb-2`}>Wedding Decor,</h2>
                    <span className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-white`}>Elevated</span>
                    <span className={`${comfortaa.className} font-bold 2xl:text-[75px] xl:text-[50px] lg:text-[35px] md:text-[25px] text-[20px] leading-[100%] text-[#C2B173]`}>.</span>
                    <p className={`${montserrat.className} font-medium 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[10px] text-[9px] xl:leading-[33px] lg:leading-[22px] leading-[18px] text-white 2xl:mt-8 lg:mt-4 mt-2`}>Because generic wedding items wouldn't make you stand out.</p>
                    <div className="border border-[#A1A1A1] md:w-[70%] w-[80%] mx-auto md:mx-0 2xl:mt-11 lg:mt-6 mt-4" />
                </div>

                <div className="flex md:justify-between justify-center gap-10 px-2 items-center sm:text-start text-center 2xl:mt-13 lg:mt-9 mt-6 2xl:max-w-[630px] lg:px-17 md:px-10 sm:px-13 2xl:px-0 mx-auto">

                    <div className="flex flex-col md:items-start items-center">
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] md:text-[20px] text-[18px] leading-[100%] text-[#C2B173] 2xl:mb-4 lg:mb-3 mb-2`}>750+</h2>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] md:text-[11px] text-[9px] leading-[100%] text-white 2xl:mb-3 mb-2`}>Testimonials</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] 2xl:leading-[32px] xl:leading-[20px] lg:leading-[18px] text-[#CFCFCF]`}>Testimonials from various customer who trust us</p>
                    </div>
                    <div className="flex flex-col md:items-start items-center">
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] text-[18px] leading-[100%] text-[#C2B173] 2xl:mb-4 lg:mb-3 mb-2`}>2022</h2>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] md:text-[11px] text-[9px]  leading-[100%] text-white 2xl:mb-3 mb-2`}>Award-Winner</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] 2xl:leading-[32px] xl:leading-[20px] lg:leading-[18px] text-[#CFCFCF]`}>Our high-quality items will indeed why you and your guests</p>
                    </div>
                </div>
                <div className="max-w-[630px] mx-auto text-center md:text-start 2xl:mt-12 lg:mt-8 mt-5 lg:px-17 md:px-10 sm:px-13 2xl:px-0">
                    <button
                        className={`bg-white text-black xl:px-2 px-1 xl:py-4 lg:py-3 py-2 2xl:w-[279px] xl:w-[180px] lg:w-[150px] md:w-[120px] md:w-[100px] w-[130px] rounded-[5px] ${montserrat.className} 2xl:text-[18px] xl:text-[12px] lg:text-[10px] md:text-[8px] text-[7px] font-medium leading-[100%] transition duration-300 hover:bg-black hover:text-white hover:scale-105`}
                    >
                        SHOP ALL DECORATIONS
                    </button>

                </div>

            </div>

            <div className="relative w-full">
                {/* Main Background Image */}
                <Image
                    className="w-full md:h-[100vh] h-[350px] object-cover"
                    src="/hero.svg"
                    width={500}
                    height={500}
                    alt="hero"
                />

                {/* Overlay Image */}
                {/* <Image
                    className="absolute top-1/2 left-1/2 w-32 h-full transform -translate-x-1/2 -translate-y-1/2"
                    src="/hero-over.svg" // replace with your actual image path
                    width={128}
                    height={128}
                    alt="overlay"
                /> */}
            </div>

        </section>
    )
}