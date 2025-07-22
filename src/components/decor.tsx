import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Decor() {
    return (
        <section className="bg-white lg:pb-20 pb-10 text-black 2xl:pt-54 lg:pt-34 pt-20">
            <div className="2xl:max-w-[1430px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto flex 2xl:gap-9 xl:gap-6 lg:gap-4 sm:gap-3 gap-2">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] xl:w-[6px] lg:w-[4px] w-[3px] 2xl:h-[79px] xl:h-[55px] lg:h-[50px] sm:h-[40px] h-[35px]" />
                <div className="flex flex-col gap-2">
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] sm:text-[9px] text-[8px] leading-[100%] test-black`}>REVOLUTIONISING THE WEDDING DECOR INDUSTRY</h5>
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[16px] leading-[100%] test-black`}>Your Wedding Unforgettable</h2>
                </div>
            </div>

            <div className="2xl:max-w-[1430px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto mt-11 flex flex-col sm:flex-row sm:justify-between justify-center sm:items-end items-center gap-8 sm:gap-0">

                <div className="relative w-full">
                    <Image className="absolute 2xl:left-140 xl:left-95 lg:left-80 md:left-60 sm:left-50 right-10 2xl:top-37 xl:top-29 lg:top-10 sm:top-6 -bottom-15 2xl:w-[327px] 2xl:h-[296px] xl:w-[223px] xl:h-[250px] lg:w-[180px] lg:h-[200px] md:w-[100px] md:h-[140px] w-[80px] h-[120px]" src="/decor-2.svg" width={1000} height={1000} alt="decor-2" />
                    <Image className="2xl:w-[760px] 2xl:h-[577px] xl:w-[508px] xl:h-[480px] lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[200px] sm:w-[250px] h-[180px]" src="/decor-1.svg" width={1000} height={1000} alt="decor-1" />
                </div>

                <div className="w-full mx-auto 2xl:max-w-[471px] ex:max-w-[350px] ex:mr-24 exx:mr-38 2xl:mr-0 lg:max-w-[340px] md:max-w-[300px] max-w-[250px] 2xl:mt-23 ex:mb-18 xl:mb-17 lg:mb-10 mt-6">
                    <h3 className={`${montserrat.className} font-semibold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-black`}>Nancy Acrylic Wedding Signs</h3>
                    <h3 className={`${montserrat.className} font-semibold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-black 2xl:mt-14 xl:mt-9 lg:mt-6 md:mt-4 mt-2`}>$225.00 USD</h3>
                    <h5 className={`${montserrat.className} font-normal  2xl:text-[20px] xl:text-[14px] lg:text-[12px] text-[10px] lg:leading-[32px] leading-[24px] text-[#959595] 2xl:mt-2 mt-0`}>Special Price</h5>
                    <p className={`${montserrat.className} font-normal  2xl:text-[20px] xl:text-[14px] lg:text-[12px] text-[10px] 2xl:leading-[32px] xl:leading-[25px] md:leading-[20px] text-[#000000] 2xl:mt-13 xl:mt-7 lg:mt-4 md:mt-2`}>Do you want to make your wedding day more beautiful in every possible way? If so, Blendavant is perfect for you!</p>
                    <div className="flex gap-6 items-center 2xl:mt-13 xl:mt-9 md:mt-5 mt-3">
                        <button className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[11px] text-[9px] leading-[100%] text-white bg-black px-2 2xl:py-4 lg:py-3 py-2 2xl:w-[136px] lg:w-[92px] w-[70px] transition duration-300 hover:bg-[#333] hover:scale-105`}>
                            Buy Now
                        </button>

                        <Link
                            className={`flex items-center gap-1 ${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[11px] text-[9px] leading-[100%] text-black transition duration-300 hover:underline`}
                            href="#"
                        >
                            See More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="2xl:size-7 lg:size-4 size-3 transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="2xl:max-w-[1430px] lg:px-30 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto lg:mt-20 mt-14">
                <div className="border border-[#959595] w-full" />

                <div className="flex justify-between 2xl:mt-10 lg:mt-7 mt-5">
                    <Image src="/1.svg" width={1000} height={1000} alt="1" className="2xl:w-[83px] xl:w-[60px] lg:w-[50px] sm:w-[40px] w-[30px]" />
                    <Image src="/2.svg" width={1000} height={1000} alt="2" className="2xl:w-[239px] xl:w-[160px] lg:w-[140px] sm:w-[120px] w-[80px]" />
                    <Image src="/3.svg" width={1000} height={1000} alt="3" className="2xl:w-[356px] xl:w-[245px] lg:w-[230px] sm:w-[200px] w-[120px]" />
                    <Image src="/4.svg" width={1000} height={1000} alt="4" className="2xl:w-[104px] xl:w-[70px] lg:w-[60px] sm:w-[50px] w-[30px]" />
                </div>
            </div>
        </section>
    )
}