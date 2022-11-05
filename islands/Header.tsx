import { useState } from "preact/hooks";
import { asset } from '$fresh/runtime.ts';


export default function Header() {
    const [showMenu, setShowMenu] = useState(true);
    
    return (
    <>
        <head>
        <link rel="stylesheet" href={asset("/header.css")} />
        <link rel="icon" href={asset("/blackSHLogo.svg")} />
        </head>
        <div class="sub-header flex grow">
            <div class="hidden lg:flex flex-1 grow w-full justify-center items-center">
                <ul class="w-full grid grid-cols-2 gap-4 place-items-stretch text-gray-400">
                    <li class="left ml-10 space-x-4"><span>(330) 725-5936</span><span>help@skidmoreandhall.com</span></li>
                    <li class="flex justify-end mr-10">Contact Us Today!</li>
                </ul>
            </div>
        </div>
        <div class="header flex grow border border-opacity-50 border-gray-400">
        {/* Large Screens */}
            <img
                src="/blackSHLogo.svg"
                class="hidden lg:flex w-32 h-32 ml-10"
                alt="Skidmore and Hall Logo"
            />
            <div class="hidden lg:flex flex-1 grow justify-center items-center mr-20">
                <ul class="flex flex-row w-max space-x-28 text-lg">
                    <li class="nav-link"><a href="/">Home</a></li>
                    <li class="nav-link">Services</li>
                    <li class="nav-link">Attorneys</li>
                    <li class="nav-link">Articles</li>
                    <li class="nav-link"><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            {/* Medium/Small Screens */}
            <div class="lg:hidden w-full h-1/10 grid grid-cols-2 text-gray-400">
                <img
                    src="/blackSHLogo.svg"
                    class="lg:hidden flex w-16 h-16 ml-10 place-self-start"
                    alt="Skidmore and Hall Logo"
                />
                <div class="mobile-menu-button lg:hidden flex items-center place-self-end pb-5 pr-4">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* TODO: Complete mobile behavior show + hide */}
        <div className={showMenu === true ? 'mobile-menu grow w-full h-screen space-y-10 flex-1 flex-cols-1 flex-row-5 items-center justify-center hidden' : 'mobile-menu grow w-full h-screen space-y-10 flex-1 flex-cols-1 flex-row-5 items-center justify-center'}>
            <a href="/" class="menu-item block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white mt-3">Home</a>
            <a href="#" class="menu-item block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Services</a>
            <a href="#" class="menu-item block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Attorneys</a>
            <a href="#" class="menu-item block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Articles</a>
            <a href="/contact" class="menu-item block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Contact Us</a>
        </div>
    </>
  );
}
