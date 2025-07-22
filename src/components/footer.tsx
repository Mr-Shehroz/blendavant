import { comfortaa, montserrat } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#393C3F] to-[#1A1E21] text-white 2xl:pb-3 lg:pb-2 sm:pb-1 pb-3 2xl:pt-26 xl:pt-16 pt-14">
            <div className="2xl:max-w-[1468px] xl:px-30 lg:px-17 sm:px-10 px-2 ts:px-4 2xl:px-0 mx-auto">

                <Image className="2xl:w-[287px] 2xl:h-[104px] xl:w-[205px] xl:h-[80px] lg:w-[180px] lg:h-[70px] w-[140px] h-[50px]" src="/logo.svg" width={100} height={100} alt="logo" />
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-5 items-start">

                    <div>
                        <h4 className={`${comfortaa.className} font-bold text-[#798290] 2xl:text-[18px] xl:text-[13px] lg:text-[11px] text-[9px] leading-[100%] 2xl:mt-3 xl:mt-1`}>Subscribe To Our Newsletter</h4>
                        <div className="2xl:mt-9 lg:mt-6 mt-4 flex gap-1">
                            <input className="2xl:w-[308px] xl:w-[205px] lg:w-[180px] w-[130px] xl:px-5 lg:px-3 px-[6px] 2xl:py-3 py-1 xl:text-[16px] lg:text-[13px] text-[9px] bg-white text-black rounded-[5px] outline-0" placeholder="Enter your email" type="email" />
                            <button className="2xl:w-[50px] 2xl:h-[55px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] flex justify-center items-center bg-[#C2B173] rounded-[5px] transition duration-300 hover:bg-[#a99660] hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="2xl:size-7 xl:size-5 lg:size-4 size-3 transition duration-300 group-hover:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className={`${comfortaa.className} font-bold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-white`}>Contact us</h3>
                        <h5 className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] lg:leading-[18px] text-white 2xl:mt-7 xl:mt-4 lg:mt-3 sm:mt-2 mt-4`}>hello@blendavant.com</h5>
                        <h5 className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1`}>+ 61 432 230 055</h5>
                    </div>
                    <div>
                        <h3 className={`${comfortaa.className} font-bold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-white`}>Address</h3>
                        <h5 className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white 2xl:mt-7 xl:mt-4 lg:mt-3 sm:mt-2 mt-4`}>35 Avenell Street, Wishart </h5>
                        <h5 className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1`}>QLD, 4122</h5>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`${comfortaa.className} font-bold 2xl:text-[26px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] text-white`}>Help Section</h3>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white 2xl:mt-7 xl:mt-4 lg:mt-3 sm:mt-2 mt-4 transition duration-300 hover:text-[#C2B173] hover:underline`}>Contact Us</Link>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1 transition duration-300 hover:text-[#C2B173] hover:underline`}>Shipping Policy</Link>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1 transition duration-300 hover:text-[#C2B173] hover:underline`}>Refunds & Returns</Link>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1 transition duration-300 hover:text-[#C2B173] hover:underline`}>Privacy Policy</Link>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1 transition duration-300 hover:text-[#C2B173] hover:underline`}>Terms of Service</Link>
                        <Link href="#" className={`${montserrat.className} font-medium 2xl:text-[15px] xl:text-[11px] lg:text-[10px] text-[8px] 2xl:leading-[27px] leading-[18px] text-white xl:mt-1 sm:mt-0 mt-1 transition duration-300 hover:text-[#C2B173] hover:underline`}>Billing Terms And Conditions</Link>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white 2xl:mt-12 xl:mt-7 lg:mt-5 mt-3" />

                <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-2 sm:gap-0 items-center 2xl:mt-4 lg:mt-2 sm:mt-1 mt-4">

                    <div className="flex 2xl:gap-4 lg:gap-3 gap-1">
                        <div className="transition duration-300 hover:scale-110 hover:brightness-125 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                fill="#C2B173"
                                className="2xl:w-[35px] 2xl:h-[35px] xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] h-[15px] w-[15px] text-white"
                            >
                                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                            </svg>
                        </div>
                        <div className="transition duration-300 hover:scale-110 hover:brightness-125 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                fill="#C2B173"
                                className="2xl:w-[35px] 2xl:h-[35px] xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] h-[15px] w-[15px] text-pink-500"
                            >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </div>
                        <div className="transition duration-300 hover:scale-110 hover:brightness-125 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                fill="#C2B173"
                                className="2xl:w-[35px] 2xl:h-[35px] xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] h-[15px] w-[15px] text-blue-600"
                            >
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                            </svg>
                        </div>

                    </div>
                    <div>
                        <h6 className={`${montserrat.className} 2xl:font-normal font-light 2xl:text-[15px] xl:text-[10px] lg:text-[9px] text-[7px] text-white 2xl:leading-[42px] xl:leading-[30px] leading-[24px]`}>© 2022, Blendavant All rights reserved.</h6>
                    </div>
                    <div className="flex 2xl:gap-2 lg:gap-1">
                        <Image src="/footer-1.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-2.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-3.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-4.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-5.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-6.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-7.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                        <Image src="/footer-8.svg" width={100} height={100} alt="g-pay" className="2xl:w-[38px] 2xl:h-[24px] xl:w-[30px] xl:h-[16px] lg:w-[26px] lg:h-[14px] w-[24px] h-[12px] transition duration-300 hover:scale-110 hover:brightness-110" />
                    </div>
                </div>

            </div>
        </footer>
    )
}