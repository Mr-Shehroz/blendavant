import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Seller() {
    return (
        <section className="bg-[#F8F8F8] text-black 2xl:py-35 pt-16 xl:pb-24 lg:pb-18 pb-12">
            <div className="2xl:max-w-[1430px] xl:px-30 lg:px-17 px-10 2xl:px-0 mx-auto flex 2xl:gap-9 xl:gap-6 lg:gap-4 gap-3">
                <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] xl:w-[6px] lg:w-[4px] w-[3px] 2xl:h-[79px] xl:h-[55px] h-[45px]" />
                <div className="flex flex-col gap-2">
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] leading-[100%] test-black`}>UNIQUE WEDDING DECOR</h5>
                    <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] text-[25px] leading-[100%] test-black`}>Our best sellers</h2>
                </div>
            </div>

            <div className="2xl:max-w-[1436px] xl:px-30 lg:px-17 px-10 2xl:px-0 mx-auto 2xl:mt-12 mt-8 flex justify-between items-end">

                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[16px] text-[14px] text-black leading-[100%]`}>Limited Edition</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] text-[#787878] xl:leading-[32px] leading-[28px]`}>3 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] xl:h-[50px] h-[40px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] g:text-[16px] text-[14px]  text-black leading-[100%]`}>Popular</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] text-[#787878] xl:leading-[32px] leading-[28px]`}>10 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] xl:h-[50px] h-[40px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] g:text-[16px] text-[14px] text-black leading-[100%]`}>Guest Books</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] text-[#787878] xl:leading-[32px] leading-[28px]`}>12 product</h5>
                </div>
                <div className="border border-[#B7B7B7] 2xl:h-[74px] xl:h-[50px] h-[40px]" />
                <div className="flex flex-col">
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] g:text-[16px] text-[14px]  text-black leading-[100%]`}>Best Seller</h4>
                    <h5 className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] text-[#787878] xl:leading-[32px] leading-[28px]`}>8 product</h5>
                </div>
            </div>
            <div className="2xl:max-w-[1440px] xl:px-30 lg:px-17 px-10 2xl:px-0 mx-auto flex items-center justify-center 2xl:gap-20 gap-14 2xl:mt-10 mt-7">

                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-1.svg" width={400} height={400} alt="seller-1" className="w-full 2xl:h-[402px] xl:h-[280px] lg:h-[250px] h-[200px]" />
                    <button className="absolute 2xl:bottom-31 xl:bottom-19 lg:bottom-16 bottom-13 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] xl:h-[55px] xl:w-[55px] lg:h-[45px] lg:w-[45px] h-[35px] w-[35px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 xl:size-6 lg:size-5 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <div className="lg:ml-7 ml-3 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] xl:text-[26px] lg:text-[22px] text-[18px] leading-[100%] text-black 2xl:mt-11 xl:mt-7 lg:mt-5 mt-3`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] text-[12px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 xl:mt-3 lg:mt-2 mt-1`}>Rustic Wedding Guest Book</h4>
                    </div>

                </div>
                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-2.svg" width={400} height={400} alt="seller-2" className="w-full 2xl:h-[402px] xl:h-[280px] lg:h-[250px] h-[200px]" />
                    <button className="absolute 2xl:bottom-31 xl:bottom-19 lg:bottom-16 bottom-13 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] xl:h-[55px] xl:w-[55px] lg:h-[45px] lg:w-[45px] h-[35px] w-[35px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 lg:size-5 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                    <div className="lg:ml-7 ml-3 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] xl:text-[26px] lg:text-[22px] text-[18px] leading-[100%] text-black 2xl:mt-11 xl:mt-7 lg:mt-5 mt-3`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] text-[12px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 xl:mt-3 lg:mt-2 mt-1`}>Rustic Wedding Guest Book Shapes</h4>
                    </div>
                </div>
                <div className="box-border border-white bg-white border rounded-[10px] flex flex-col pb-4 relative">
                    <Image src="/seller-3.svg" width={400} height={400} alt="seller-3" className="w-full 2xl:h-[402px] xl:h-[280px] lg:h-[250px] h-[200px]" />
                    <button className="absolute 2xl:bottom-31 xl:bottom-19   lg:bottom-16 bottom-13 right-5 bg-black hover:bg-[#333] 2xl:h-[70px] 2xl:w-[70px] xl:h-[55px] xl:w-[55px] lg:h-[45px] lg:w-[45px] h-[35px] w-[35px] rounded-full flex justify-center items-center transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="2xl:size-8 lg:size-5 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                    <div className="lg:ml-7 ml-3 max-w-[291px]">
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[36px] xl:text-[26px] lg:text-[22px] text-[18px] leading-[100%] text-black 2xl:mt-11 xl:mt-7 lg:mt-5 mt-3`}>$ 184.<span className={`${montserrat.className} font-semibold 2xl:text-[24px] xl:text-[18px] lg:text-[14px] text-[12px] leading-[100%] text-black`}>00</span></h4>
                        <h4 className={`${montserrat.className} font-semibold 2xl:text-[20px] xl:text-[14px] lg:text-[13px] text-[10px] 2xl:leading-[22px] leading-[18px] text-black 2xl:mt-5 xl:mt-3 lg:mt-2 mt-1`}>Boho Wedding Guest Book Alternative</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}