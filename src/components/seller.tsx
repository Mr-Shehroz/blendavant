import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Seller() {
    return (
        <section className="bg-[#F8F8F8] text-black 2xl:py-35 pt-16 pb-24">
            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto flex 2xl:gap-9 gap-6">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] w-[6px] 2xl:h-[79px] h-[55px]" />
                <div className="flex flex-col gap-2">
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] leading-[100%] test-black`}>UNIQUE WEDDING DECOR</h5>
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] leading-[100%] test-black`}>Our best sellers</h2>
                </div>
            </div>

            <div className="2xl:max-w-[1436px] px-30 2xl:px-0 mx-auto 2xl:mt-12 mt-8 flex justify-between items-end">

                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] text-black leading-[100%]`}>Limited Edition</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] text-[#787878] leading-[32px]`}>3 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] h-[50px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px]  text-black leading-[100%]`}>Popular</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] text-[#787878] leading-[32px]`}>10 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] h-[50px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px]  text-black leading-[100%]`}>Guest Books</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] text-[#787878] leading-[32px]`}>12 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] h-[50px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px]  text-black leading-[100%]`}>Best Seller</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] text-[13px] text-[#787878] leading-[32px]`}>8 product</h5>
                </div>
            </div>
            <div className="2xl:max-w-[1440px] px-30 2xl:px-0 mx-auto flex justify-between 2xl:mt-10 mt-7">

                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-1.svg" width={400} height={400} alt="seller-1" className="w-full 2xl:h-[402px] h-[280px]" />
                    <button className="absolute 2xl:bottom-31 bottom-23 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] h-[55px] w-[55px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <div className="ml-7 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] text-[26px] leading-[100%] text-black 2xl:mt-11 mt-7`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] text-[18px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] text-[16px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 mt-3`}>Rustic Wedding Guest Book</h4>
                    </div>

                </div>
                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-2.svg" width={400} height={400} alt="seller-2" className="w-full 2xl:h-[402px] h-[280px]" />
                    <button className="absolute 2xl:bottom-31 bottom-23 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] h-[55px] w-[55px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                    <div className="ml-7 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] text-[26px] leading-[100%] text-black 2xl:mt-11 mt-7`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] text-[18px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] text-[16px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 mt-3`}>Rustic Wedding Guest Book Shapes</h4>
                    </div>
                </div>
                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-3.svg" width={400} height={400} alt="seller-3" className="w-full 2xl:h-[402px] h-[280px]" />
                    <button className="absolute 2xl:bottom-31 bottom-23 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] h-[55px] w-[55px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                    <div className="ml-7 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] text-[26px] leading-[100%] text-black 2xl:mt-11 mt-7`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] text-[18px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] text-[16px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 mt-3`}>Boho Wedding Guest Book Alternative</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}