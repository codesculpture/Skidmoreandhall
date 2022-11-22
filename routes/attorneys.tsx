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
                    <div class="pt-5 attorneyname">Lee T. Skidmore</div>
                    <div class="partner">Partner</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Robert C. Skidmore</div>
                    <div class="partner">Partner</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Claudia M. Skidmore</div>
                    <div class="partner">Associate</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <a href=""><img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorneyimg"></img></a>
                    <div class="pt-5 attorneyname">Nicole L. Sergov</div>
                    <div class="partner">Associate</div>
                    </div>
                </div>
                </div>
            </div>

            {/* Attorneys MD */}
            <div class="hidden md:flex lg:hidden">
                <div class="attorneys-md">
                    <div class="title-at-md">Our Attorneys</div>
                    <div class="underline-at-md"></div>

                    <div class="grid grid-cols-4 attorneybio-md">
                        <div class="flex flex-col attorneys-snip-md">
                            <a href="/attorneys/lee"><img src={asset("images/attorneys/Lee-Skidmore.jpg")} class="attorney-img-md"></img></a>
                            <div class="attorneyname-md">Lee T. Skidmore</div>
                            <div class="partner">Partner</div>
                        </div>

                        <div class="flex flex-col attorneys-snip-md">
                            <a href="/attorneys/"><img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorney-img-md"></img></a>
                            <div class="attorneyname-md">Robert C. Skidmore</div>
                            <div class="partner">Partner</div>
                        </div>

                        <div class="flex flex-col attorneys-snip-md">
                            <a href="/attorneys/"><img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorney-img-md"></img></a>
                            <div class="attorneyname-md">Claudia M. Skidmore</div>
                            <div class="partner">Associate</div>
                        </div>

                        <div class="flex flex-col attorneys-snip-md">
                            <a href="/attorneys/"><img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorney-img-md"></img></a>
                            <div class="attorneyname-md">Nicole L. Sergov</div>
                            <div class="partner">Associate</div>
                        </div>
                    </div>


                </div>
            </div>

            {/*Attorneys SM */}
            <div class="md:hidden flex">
                <div class="attorneys-sm">
                <div class="title-at-sm">Our Attorneys</div>
                <div class="underline-at-sm"></div>

                <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
                    <div class="flex flex-col attorneysnip">
                    <a href="/attorneys/lee"><img src={asset("images/attorneys/Lee-Skidmore.jpg")}></img></a>
                    <div class="attorneyname-sm">Lee T. Skidmore</div>
                    <div class="partner">Partner</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Rob-Skidmore.jpg")}></img>
                    <div class="attorneyname-sm">Robert C. Skidmore</div>
                    <div class="partner">Partner</div>
                    </div>
                </div>

                <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Claudia-Skidmore.jpg")}></img>
                    <div class="attorneyname-sm">Claudia M. Skidmore</div>
                    <div class="partner">Associate</div>
                    </div>
                    <div class="flex flex-col attorneysnip">
                    <img src={asset("images/attorneys/Nicole-Sergov.jpg")}></img>
                    <div class="attorneyname-sm">Nicole L. Sergov</div>
                    <div class="partner">Associate</div>
                    </div>
                </div>       
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}