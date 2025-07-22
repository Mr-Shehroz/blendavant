import { comfortaa, montserrat } from "@/fonts";

export default function Form() {
    return (
        <section className="bg-[#C2B173] 2xl:pb-16 xl:pb-11 lg:pb-9 pb-8 2xl:pt-18 xl:pt-13 lg:pt-11 pt-8">
            <div className="2xl:max-w-[1334px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-6 sm:gap-0">
                <div>
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[36px] xl:text-[24px] lg:text-[20px] sm:text-[16px] text-[14px] text-white leading-[100%]`}>Subscribe To Our Newsletter</h4>
                    <p className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[11px] lg:text-[10px] sm:text-[8px] text-[7px] leading-[100%] text-white 2xl:mt-4 xl:mt-3 mt-2`}>Don’t miss our significant news and season sales. Subscribe!</p>
                </div>
                <div className="2xl:max-w-[465px] xl:max-w-[310px] lg:max-w-[280px] max-w-[220px] w-full relative">
                    <input className={`text-[#8D8D8D] ${montserrat.className} font-medium 2xl:text-[16px] xl:text-[13px] lg:text-[11px] text-[9px] leading-[100%] w-full lg:px-5 px-2 2xl:py-4 lg:py-2 py-[6px] bg-white outline-0`} placeholder="Enter your email" type="text" />
                    <button
                        className={`${montserrat.className} font-medium 2xl:text-[16px] xl:text-[11px] lg:text-[10px] text-[7px] leading-[100%] bg-black text-white 2xl:w-[114px] lg:w-[80px] w-[60px] 2xl:py-[18px] lg:py-[11px] py-[9px] rounded-[6px] absolute -right-1 lg:top-0 top-[2px] transition duration-300 hover:bg-[#333] hover:scale-105`}
                    >
                        Subscribe
                    </button>

                </div>
            </div>
        </section>
    )
}