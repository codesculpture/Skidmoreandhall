import { asset, Head } from "$fresh/runtime.ts";
import  Header  from "../islands/Header.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Skidmore and Hall</title>
        <link rel="icon" href="/blackSHLogo.svg"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display"/>
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
          <div class="flex flex-cols-4 attorneyinfo">
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

          <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Lee-Skidmore.jpg")}></img>
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

      {/* Why choose section LG */}
      <div class="hidden lg:flex space-x-12 whychoose">
        <img src={asset("images/Medina/Courthouse.jpg")} class="whychoose-img"></img>
        <div class="whychoose-bio">
          <div class="whychoose-title">WHY CHOOSE SKIDMORE & HALL CO., LPA </div>
          <div class="whychoose-text">
            The experienced attorneys at Skidmore & Hall Co. LPA are committed to protecting client’s interests and giving them the best representation possible. 
            We believe every client’s situation is unique and we will strive to represent each client according to their personal situation. We will take the time to 
            listen and understand the client’s concerns and we will use our expertise to customize a solution for each individual client. Our goal is to help our clients 
            throughout all their legal needs. We endeavor to build a relationship with our clients where they will continue to use our services whenever they need legal 
            assistance. Our firm is committed to delivering highly skilled, effective, and innovative legal representation to our clients in a timely manner and at a 
            reasonable cost.  
          </div>
        </div>
      </div>

      {/* About Us */}
      <div class="hidden lg:flex space-x-12 aboutUs">
        <div class="aboutUs-bio">
          <div class="aboutUs-title">ABOUT US</div>
          <div class="aboutUs-text">
            The law firm of Skidmore & Hall Co. LPA has been serving clients in the Northeast Ohio area since 1965. Skidmore & Hall Co., LPA was formed by L. 
            Thomas Skidmore and Ronald H. Hall.  Since the firm’s foundation, our attorneys continue to commit themselves to serving the community and have built 
            their practice on providing valuable individualized legal services to their clients. 
          </div>
        </div>
        <img src={asset("/images/Medina/Office.jpg")} class="aboutUs-img"></img>
      </div>
      </>
  );
}
