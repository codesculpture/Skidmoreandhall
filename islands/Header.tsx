import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";


export default function Header() {
  return (
    <>
        <div class="sub-header flex grow">
            <div class="flex flex-1 grow w-full justify-center items-center">
                <ul class="w-full grid grid-cols-2 gap-4 place-items-stretch text-gray-400">
                    <li class="left ml-10 space-x-4"><span class="hover:text-black">(330) 725-5936</span><span class="hover:text-black">help@skidmoreandhall.com</span></li>
                    <li class="flex justify-end mr-10 hover:text-black">Contact Us Today!</li>
                </ul>
            </div>
        </div>
        <div class="header flex grow border border-opacity-50 border-gray-400">
        <img
            src="/blackSHLogo.svg"
            class="w-32 h-32 ml-10"
            alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <div class="flex flex-1 grow justify-center items-center mr-20">
                <ul class="flex flex-row w-max space-x-32 text-lg">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Attorneys</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            
        </div>
    </>
  );
}
