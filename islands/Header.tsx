import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";


export default function Header() {
    let isNavHidden: string = 'hidden';
    function updateNav():any {
        if(isNavHidden == 'hidden') isNavHidden = '';
        else isNavHidden = 'hidden';
        console.log(isNavHidden);
    }
    return (
    <>
        <div class="sub-header flex grow">
            <div class="hidden lg:flex flex-1 grow w-full justify-center items-center">
                <ul class="w-full grid grid-cols-2 gap-4 place-items-stretch text-gray-400">
                    <li class="left ml-10 space-x-4"><span class="hover:text-black cursor-pointer">(330) 725-5936</span><span class="hover:text-black cursor-pointer">help@skidmoreandhall.com</span></li>
                    <li class="flex justify-end mr-10 hover:text-black cursor-pointer">Contact Us Today!</li>
                </ul>
            </div>
        </div>
        <div class="header flex grow border border-opacity-50 border-gray-400">
        {/* Large Screens */}
            <img
                src="/blackSHLogo.svg"
                class="hidden lg:flex w-32 h-32 ml-10"
                alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <div class="hidden lg:flex flex-1 grow justify-center items-center mr-20">
                <ul class="flex flex-row w-max space-x-28 text-lg">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Attorneys</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            {/* Medium/Small Screens */}
            <div class="w-full h-1/10 grid grid-cols-2 text-gray-400">
                <img
                    src="/blackSHLogo.svg"
                    class="lg:hidden flex w-16 h-16 ml-10 place-self-start"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <div class="mobile-menu-button lg:hidden flex items-center place-self-end pb-5 pr-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* TODO: Complete mobile behavior show + hide */}
        <div class="mobile-menu grow w-full h-screen space-y-10 flex-1 flex-cols-1 flex-row-5 items-center justify-center hidden">
            <a href="$1" class="block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Home</a>
            <a href="$1" class="block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Services</a>
            <a href="$1" class="block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Attorneys</a>
            <a href="$1" class="block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Blog</a>
            <a href="$1" class="block flex grow w-full py-2 px-4 text-4 hover:text-gray-400 text-center justify-self-center hover:bg-blue-900 hover:text-white">Contact Us</a>
        </div>
    </>
  );
}
