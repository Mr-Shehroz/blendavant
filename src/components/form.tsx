import { comfortaa, montserrat } from "@/fonts";

export default function Form() {
    return (
        <section className="bg-[#C2B173] 2xl:pb-16 pb-11 2xl:pt-18 pt-13">
            <div className="2xl:max-w-[1334px] px-30 2xl:px-0 mx-auto flex justify-between">
                <div>
                    <h4 className={`${comfortaa.className} font-bold 2xl:text-[36px] text-[24px] text-white leading-[100%]`}>Subscribe To Our Newsletter</h4>
                    <p className={`${montserrat.className} font-medium 2xl:text-[16px] text-[11px] leading-[100%] text-white 2xl:mt-4 mt-3`}>Don’t miss our significant news and season sales. Subscribe!</p>
                </div>
                <div className="2xl:max-w-[465px] max-w-[310px] w-full relative">
                    <input className={`text-[#8D8D8D] ${montserrat.className} font-medium 2xl:text-[16px] text-[13px] leading-[100%] w-full px-5 2xl:py-4 py-2 bg-white outline-0`} placeholder="Enter your email" type="text" />
                    <button
                        className={`${montserrat.className} font-medium 2xl:text-[16px] text-[11px] leading-[100%] bg-black text-white 2xl:w-[114px] w-[80px] 2xl:py-[18px] py-[11px] rounded-[6px] absolute -right-1 top-0 transition duration-300 hover:bg-[#333] hover:scale-105`}
                    >
                        Subscribe
                    </button>

                </div>
            </div>
        </section>
    )
}