import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";

export default function Shipping() {
    return (
        <section className="bg-[#F8F8F8] text-black pb-20">
            <div className="2xl:max-w-[1430px] px-30 2xl:px-0 mx-auto">
                <div className="flex items-center justify-between 2xl:pt-55 pt-35">
                    <div className="flex 2xl:gap-9 gap-6 items-center 2xl:max-w-[1120px] max-w-[800px]">
                        <div className="border border-[#C5B479] bg-[#C5B479] 2xl:w-[8px] w-[6px] 2xl:h-[139px] h-[100px]"/>
                        <h2 className={`${comfortaa.className} font-bold 2xl:text-[64px] text-[40px] 2xl:leading-[81px] leading-[60px]`}>Free Shipping On All Orders - Ending Soon</h2>
                    </div>
                    <div>
                        <button className={`${montserrat.className} font-medium 2xl:text-[20px] text-[14px] leading-[100%] bg-black text-white 2xl:w-[181px] w-[120px] 2xl:px-2 px-1 2xl:py-6 py-4 transition duration-300 hover:bg-[#333] hover:scale-105`}>SEE MORE</button>
                    </div>
                </div>

                <div className="flex gap-10 items-end justify-between 2xl:mt-26 mt-12">

                    <div className="2xl:max-w-[370px] max-w-[300px]">
                        <Image src="/shipping-1.svg" width={100} height={100} alt="shipping-1" className="2xl:w-[104px] w-[70px] h-[109px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] leading-[100%] text-black 2xl:mt-7 mt-0`}>Fully Customisable Items</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] 2xl:leading-[32px] leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>Forget about decorating with generic items - showcase your love through customisable keepsakes unique to you!</p>
                    </div>
                    <div className="border border-[#B7B7B7] 2xl:h-[237px] h-[155px]"/>
                    <div className="2xl:max-w-[370px] max-w-[300px]">
                        <Image src="/shipping-2.svg" width={100} height={100} alt="shipping-2" className="2xl:w-[104px] w-[70px] h-[109px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] leading-[100%] text-black 2xl:mt-7 mt-0`}>High-Quality & Handcrafted</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] 2xl:leading-[32px] leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>High-quality items made with an impeccable eye for detail, an abundance of creative flair, and buckets loads of love.</p>
                    </div>
                    <div className="border border-[#B7B7B7] 2xl:h-[237px] h-[155px]"/>
                    <div className="2xl:max-w-[370px] max-w-[300px]]">
                        <Image src="/shipping-3.svg" width={100} height={100} alt="shipping-3" className="2xl:w-[104px] w-[70px] h-[109px]"/>
                        <h4 className={`${comfortaa.className} font-bold 2xl:text-[24px] text-[18px] leading-[100%] text-black 2xl:mt-7 mt-0`}>Award-Winning Decorations</h4>
                        <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[12px] 2xl:leading-[32px] leading-[20px] text-[#787878] 2xl:mt-4 mt-3`}>Blendavant is a Queensland-based award-winning family business specialising in handcrafted wedding products.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}