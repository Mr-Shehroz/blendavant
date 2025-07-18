import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center items-center">
            <div className="absolute 2xl:-bottom-39 -bottom-27 2xl:-left-10 -left-6 w-full flex justify-center items-end z-50">
                <Image className="2xl:w-[468px] w-[320px]" src="/hero-scroll.svg" width={100} height={100} alt="scroll" />
            </div>
            <div className="bg-gradient-to-b from-[#393C3F] to-[#1A1E21] h-screen w-[89%] text-white">
                <div className="2xl:mt-45 mt-28 2xl:max-w-[630px] px-17 2xl:px-0 mx-auto">
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[75px] text-[50px] leading-[100%] text-white mb-5`}>Wedding Decor,</h2>
                    <span className={`${comfortaa.className} font-bold 2xl:text-[75px] text-[50px] leading-[100%] text-white`}>Elevated</span>
                    <span className={`${comfortaa.className} font-bold 2xl:text-[75px] text-[50px] leading-[100%] text-[#C2B173]`}>.</span>
                    <p className={`${montserrat.className} font-medium 2xl:text-[18px] text-[14px] leading-[33px] text-white 2xl:mt-8 mt-4`}>Because generic wedding items wouldn't make you stand out.</p>
                    <div className="border border-[#A1A1A1] w-[70%] 2xl:mt-11 mt-6" />
                </div>

                <div className="flex justify-between items-center 2xl:mt-13 mt-9 2xl:max-w-[630px] px-17 2xl:px-0 mx-auto">

                    <div className="flex flex-col items-start">
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] leading-[100%] text-[#C2B173] 2xl:mb-4 mb-3`}>750+</h2>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] leading-[100%] text-white 2xl:mb-3 mb-2`}>Testimonials</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] 2xl:leading-[32px] leading-[20px] text-[#CFCFCF]`}>Testimonials from various customer who trust us</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] leading-[100%] text-[#C2B173] 2xl:mb-4 mb-3`}>2022</h2>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] leading-[100%] text-white 2xl:mb-3 mb-2`}>Award-Winner</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] 2xl:leading-[32px] leading-[20px] text-[#CFCFCF]`}>Our high-quality items will indeed why you and your guests</p>
                    </div>
                </div>
                <div className="max-w-[630px] mx-auto 2xl:mt-12 mt-8 px-17 2xl:px-0">
                    <button
                        className={`bg-white text-black px-2 py-4 2xl:w-[279px] w-[180px] rounded-[5px] ${montserrat.className} 2xl:text-[18px] text-[12px] font-medium leading-[100%] transition duration-300 hover:bg-black hover:text-white hover:scale-105`}
                    >
                        SHOP ALL DECORATIONS
                    </button>

                </div>

            </div>

            <div className="relative w-full">
                {/* Main Background Image */}
                <Image
                    className="w-full h-[100vh] object-cover"
                    src="/hero.svg"
                    width={500}
                    height={500}
                    alt="hero"
                />

                {/* Overlay Image */}
                <Image
                    className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
                    src="/hero-over.svg" // replace with your actual image path
                    width={128}
                    height={128}
                    alt="overlay"
                />
            </div>

        </section>
    )
}