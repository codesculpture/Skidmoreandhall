import { asset, Head } from "$fresh/runtime.ts";
import  Header  from "../islands/Header.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Skidmore and Hall</title>
        <link rel="icon" href="/blackSHLogo.svg"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather"/>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=PT+Serif+Caption" />
        <link rel="stylesheet" href={asset("home.css")} />     
      </Head>
      <Header/>

      {/* banner LG */}
      <div class="hidden lg:flex">
        <div class="banner">
          <img src="books.jpg" class="banner-img"></img>
          <div class="banner-text">
            <div class="title ">Skidmore & Hall Co. , LPA</div>
            <div class="underline"></div>
            <div class="subtitle">Dynamic Representation<br/>by Caring Counsel</div>
            <div>
              <button class="contact-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* banner SM */}
      <div class="lg:hidden">
        <div class="banner-sm">
        <img src="books.jpg" class="banner-img-sm"></img>
        <div class="banner-text-sm">
            <div class="title-sm ">Skidmore & Hall Co. , LPA</div>
            <div class="underline-sm"></div>
            <div class="subtitle-sm">Dynamic Representation<br/>by Caring Counsel</div>
            <div>
              <button class="contact-btn-sm">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/*Attorneys LG */}
      <div class="hidden lg:flex">
        <div class="attorneys">
          <div class="title-at">Our Attorneys</div>
          <div class="underline-at"></div>
          <div class="flex flex-cols-4 space-x-12 attorneyinfo">
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Lee-Skidmore.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Lee Skidmore</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Rob Skidmore</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Claudia Skidmore</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Nicole Sergov</div>
            </div>
          </div>
        </div>
      </div>

      {/*Attorneys LG */}
      <div class="lg:hidden flex">
        <div class="attorneys-sm">
          <div class="title-at-sm">Our Attorneys</div>
          <div class="underline-at-sm"></div>

        </div>
      </div>
      </>
  );
}
