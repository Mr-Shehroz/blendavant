import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Decor() {
    return (
        <section className="bg-white pb-20 text-black 2xl:pt-54 pt-34">
            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto flex 2xl:gap-9 gap-6">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] w-[6px] 2xl:h-[79px] h-[55px]" />
                <div className="flex flex-col gap-2">
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] leading-[100%] test-black`}>REVOLUTIONISING THE WEDDING DECOR INDUSTRY</h5>
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] leading-[100%] test-black`}>Your Wedding Unforgettable</h2>
                </div>
            </div>

            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto mt-11 flex">

                <div className="relative w-full">
                    <Image className="absolute 2xl:left-140 left-95 2xl:top-37 top-29 2xl:w-[327px] 2xl:h-[296px] w-[223px] h-[250px]" src="/decor-2.svg" width={1000} height={1000} alt="decor-2" />
                    <Image className="2xl:w-[760px] 2xl:h-[577px] w-[508px] h-[480px]" src="/decor-1.svg" width={1000} height={1000} alt="decor-1" />
                </div>

                <div className="w-full mx-auto 2xl:max-w-[471px] max-w-[340px] mt-23">
                    <h3 className={`${montserrat.className} font-semibold 2xl:text-[26px] text-[20px] leading-[100%] text-black`}>Nancy Acrylic Wedding Signs</h3>
                    <h3 className={`${montserrat.className} font-semibold 2xl:text-[26px] text-[20px] leading-[100%] text-black 2xl:mt-14 mt-9`}>$225.00 USD</h3>
                    <h5 className={`${montserrat.className} font-normal  2xl:text-[20px] text-[14px] leading-[32px] text-[#959595] 2xl:mt-2 mt-0`}>Special Price</h5>
                    <p className={`${montserrat.className} font-normal  2xl:text-[20px] text-[14px] 2xl:leading-[32px] leading-[252x] text-[#000000] 2xl:mt-13 mt-7`}>Do you want to make your wedding day more beautiful in every possible way? If so, Blendavant is perfect for you!</p>
                    <div className="flex gap-6 items-center 2xl:mt-13 mt-9">
                        <button className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] leading-[100%] text-white bg-black px-2 2xl:py-4 py-3 2xl:w-[136px] w-[92px] transition duration-300 hover:bg-[#333] hover:scale-105`}>
                            Buy Now
                        </button>

                        <Link
                            className={`flex items-center gap-1 ${montserrat.className} font-medium 2xl:text-[16px] text-[12px] leading-[100%] text-black transition duration-300 hover:underline`}
                            href="#"
                        >
                            See More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="2xl:size-7 size-4 transition-transform duration-300 group-hover:translate-x-1"
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
            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto mt-20">
                <div className="border border-[#959595] w-full" />

                <div className="flex justify-between 2xl:mt-10 mt-7">
                    <Image src="/1.svg" width={1000} height={1000} alt="1" className="2xl:w-[83px] w-[60px]" />
                    <Image src="/2.svg" width={1000} height={1000} alt="2" className="2xl:w-[239px] w-[160px]" />
                    <Image src="/3.svg" width={1000} height={1000} alt="3" className="2xl:w-[356px] w-[245px]" />
                    <Image src="/4.svg" width={1000} height={1000} alt="4" className="2xl:w-[104px] w-[70px]" />
                </div>
            </div>
        </section>
    )
}