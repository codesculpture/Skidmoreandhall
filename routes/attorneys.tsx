import { asset, Head } from "$fresh/runtime.ts";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";

export default function Attorneys() {
    return (
        <>
        <Head>
            <link rel="icon" href={asset("/blackSHLogo.svg")} />
            <link rel="stylesheet" href={asset("/css/attorneys.css")} />
        </Head>
        <Header/>
        <div class="attorneys-page">
            {/*Attorneys LG */}
            <div class="hidden lg:flex">
                <div class="attorneys">
                <div class="title-at">Our Attorneys</div>
                <div class="underline-at"></div>
                <div class="flex flex-cols-4 attorneyinfo">
                    <div class="flex flex-col attorneysnip">
                    <a href="/attorneys/lee"><img src={asset("images/attorneys/Lee-Skidmore.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Lee Skidmore</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Rob Skidmore</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Claudia Skidmore</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Nicole Sergov</div>
                    </div>
                </div>
                </div>
            </div>

            {/*Attorneys LG */}
            <div class="lg:hidden flex">
                <div class="attorneys-sm">
                <div class="title-at-sm">Our Attorneys</div>
                <div class="underline-at-sm"></div>

                <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
                    <div class="flex flex-col attorneysnip">
                    <a href="/attorneys/lee"><img src={asset("images/attorneys/Lee-Skidmore.jpg")}></img></a>
                    <div class="attorneyname-sm">Lee Skidmore</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Rob-Skidmore.jpg")}></img>
                    <div class="attorneyname-sm">Rob Skidmore</div>
                    </div>
                </div>

                <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Claudia-Skidmore.jpg")}></img>
                    <div class="attorneyname-sm">Claudia Skidmore</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Nicole-Sergov.jpg")}></img>
                    <div class="attorneyname-sm">Nicole Sergov</div>
                    </div>
                </div>       
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}