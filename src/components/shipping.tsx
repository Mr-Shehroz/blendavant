import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Shipping() {
    return (
        <section className="bg-[#F8F8F8] text-black lg:pb-20 pb-10">
            <div className="2xl:max-w-[1430px] 2xl:px-0 xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 mx-auto">
                <div className="flex sm:items-center items-start sm:justify-between justify-center gap-6 2xl:pt-55 lg:pt-35 pt-25">
                    <div className="flex 2xl:gap-9 xl:gap-6 lg:gap-4 sm:gap-3 gap-2 items-center 2xl:max-w-[1120px] xl:max-w-[800px] sm:max-w-[500px] max-w-[2500px]">
                        <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] xl:w-[6px] w-[4px] 2xl:h-[139px] xl:h-[100px] lg:h-[90px] sm:h-[70px] h-[50px]"/>
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[18px] 2xl:leading-[81px] xl:leading-[60px] lg:leading-[40px]`}>Free Shipping On All Orders - Ending Soon</h2>
                    </div>
                    <div>
                        <button className={`${montserrat.className} font-medium 2xl:text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[10px] text-[8px] leading-[100%] bg-black text-white 2xl:w-[181px] xl:w-[120px] lg:w-[100px] sm:w-[75px] w-[60px] 2xl:px-2 px-1 2xl:py-6 xl:py-4 lg:py-3 py-2 transition duration-300 hover:bg-[#333] hover:scale-105`}>SEE MORE</button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:gap-10 sm:gap-5 gap-4 sm:items-end sm:justify-between justify-center items-center text-center sm:text-start 2xl:mt-26 mt-12">

                    <div className="2xl:max-w-[370px] max-w-[300px] flex flex-col items-center sm:items-start">
                        <Image src="/shipping-1.svg" width={100} height={100} alt="shipping-1" className="2xl:w-[104px] xl:w-[70px] xl:h-[109px] lg:w-[60px] lg:h-[90px] w-[40px] h-[60px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[16px] text-[13px] leading-[100%] text-black 2xl:mt-7 mt-0`}>Fully Customisable Items</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[11px] text-[9px] 2xl:leading-[32px] lg:leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>Forget about decorating with generic items - showcase your love through customisable keepsakes unique to you!</p>
                    </div>
                    <div className="border border-[#B7B7B7] 2xl:h-[237px] lg:h-[155px] sm:h-[120px] w-[80%] sm:w-0 mt-5 sm:mt-0"/>
                    <div className="2xl:max-w-[370px] max-w-[300px] flex flex-col items-center sm:items-start">
                        <Image src="/shipping-2.svg" width={100} height={100} alt="shipping-2" className="2xl:w-[104px] xl:w-[70px] xl:h-[109px] lg:w-[60px] lg:h-[90px] w-[40px] h-[60px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[16px] text-[13px] leading-[100%] text-black 2xl:mt-7 mt-0`}>High-Quality & Handcrafted</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[11px] text-[9px] 2xl:leading-[32px] lg:leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>High-quality items made with an impeccable eye for detail, an abundance of creative flair, and buckets loads of love.</p>
                    </div>
                    <div className="border border-[#B7B7B7] 2xl:h-[237px] lg:h-[155px] sm:h-[120px] w-[80%] sm:w-0 mt-5 sm:mt-0"/>
                    <div className="2xl:max-w-[370px] max-w-[300px] flex flex-col items-center sm:items-start">
                        <Image src="/shipping-3.svg" width={100} height={100} alt="shipping-3" className="2xl:w-[104px] xl:w-[70px] xl:h-[109px] lg:w-[60px] lg:h-[90px] w-[40px] h-[60px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] xl:text-[18px] lg:text-[16px] text-[13px] leading-[100%] text-black 2xl:mt-7 mt-0`}>Award-Winning Decorations</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[12px] lg:text-[11px] text-[9px] 2xl:leading-[32px] lg:leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>Blendavant is a Queensland-based award-winning family business specialising in handcrafted wedding products.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}