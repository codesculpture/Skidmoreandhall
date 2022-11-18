import { asset, Head } from "$fresh/runtime.ts";
import  Header  from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

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
              <a href="/contact"><div class="contact-btn">Contact Us</div></a>
            </div>
          </div>
        </div>
      </div>

      {/* banner MD */}
      <div class="hidden md:flex lg:hidden md-homepage">
        <div class="banner-md">
          <img src="books.jpg" class="banner-img-md"></img>
          <div class="banner-text-md">
            <div class="title-md mt-3">Skidmore & Hall Co. , LPA</div>
            <div class="underline-md"></div>
            <div class="subtitle-md mt-6">Dynamic Representation<br/>by Caring Counsel</div>
            <div>
              <a href="/contact"><div class="contact-btn-md">Contact Us</div></a>
            </div>
          </div>
        </div>
      </div>

      {/* banner SM */}
      <div class="md:hidden">
        <div class="banner-sm">
        <img src="books.jpg" class="banner-img-sm"></img>
        <div class="banner-text-sm">
            <div class="title-sm ">Skidmore & Hall Co. , LPA</div>
            <div class="underline-sm"></div>
            <div class="subtitle-sm">Dynamic Representation<br/>by Caring Counsel</div>
            <div>
              <button class="contact-btn-sm"><a href="/contact">Contact Us</a></button>
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
              <div class="attorneyname">Lee T. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Robert C. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Claudia M. Skidmore Esq.</div>
              <div class="partner">Associate</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorneyimg"></img>
              <div class="attorneyname">Nicole L. Sergov Esq.</div>
              <div class="partner">Associate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Attorneys MD */}
      <div class="hidden md:flex lg:hidden">
        <div class="attorneys-md">
          <div class="title-at-md">Our Attorneys</div>

          <div class="flex flex-cols-4 attorneyinfo-md m-6 pl-3">
            <div class="flex flex-col pr-3 attorneysnip">
              <img src={asset("images/attorneys/Lee-Skidmore.jpg")} class="attorneyimg-md"></img>
              <div class="attorneyname-md">Lee T. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
            <div class="flex flex-col pr-3 attorneysnip">
              <img src={asset("images/attorneys/Rob-Skidmore.jpg")} class="attorneyimg-md"></img>
              <div class="attorneyname-md">Robert C. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
            <div class="flex flex-col pr-3 attorneysnip">
              <img src={asset("images/attorneys/Claudia-Skidmore.jpg")} class="attorneyimg-md"></img>
              <div class="attorneyname-md">Claudia M. Skidmore Esq.</div>
              <div class="partner">Associate</div>
            </div>
            <div class="flex flex-col pr-3 attorneysnip">
              <img src={asset("images/attorneys/Nicole-Sergov.jpg")} class="attorneyimg-md"></img>
              <div class="attorneyname-md">Nicole L. Sergov Esq.</div>
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
              <img src={asset("images/attorneys/Lee-Skidmore.jpg")}></img>
              <div class="attorneyname-sm">Lee T. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Rob-Skidmore.jpg")}></img>
              <div class="attorneyname-sm">Robert C. Skidmore Esq.</div>
              <div class="partner">Partner</div>
            </div>
          </div>

          <div class="flex flex-cols-2 space-x-9 attorneybio-sm">
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Claudia-Skidmore.jpg")}></img>
              <div class="attorneyname-sm">Claudia M. Skidmore Esq.</div>
              <div class="partner">Associate</div>
            </div>
            <div class="flex flex-col attorneysnip">
              <img src={asset("images/attorneys/Nicole-Sergov.jpg")}></img>
              <div class="attorneyname-sm">Nicole L. Sergov Esq.</div>
              <div class="partner">Associate</div>
            </div>
          </div>       
         </div>
      </div>

      {/* Why choose section LG */}
      <div class="hidden lg:flex space-x-12 whychoose">
        <img src={asset("images/Medina/Courthouse.jpg")} class="whychoose-img"></img>
        <div class="whychoose-bio">
          <div class="whychoose-title">WHY CHOOSE SKIDMORE & HALL CO., LPA</div>
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

      {/* Why choose section md */}
      <div class="hidden md:flex lg:hidden whychoose-md">
        <div class="whychoose-bio-md">
          <div class="whychoose-title-md">WHY CHOOSE SKIDMORE & HALL CO., LPA</div>
          <div class="whychoose-text-md">
            The experienced attorneys at Skidmore & Hall Co. LPA are committed to protecting client’s interests and giving them the best representation possible. 
            We believe every client’s situation is unique and we will strive to represent each client according to their personal situation. We will take the time to 
            listen and understand the client’s concerns and we will use our expertise to customize a solution for each individual client. Our goal is to help our clients 
            throughout all their legal needs. We endeavor to build a relationship with our clients where they will continue to use our services whenever they need legal 
            assistance. Our firm is committed to delivering highly skilled, effective, and innovative legal representation to our clients in a timely manner and at a 
            reasonable cost. 
          </div>
          <img src={asset("images/Medina/Courthouse.jpg")} class="whychoose-img-md"></img>

        </div>
      </div>

      {/* Why choose section SM */}
      <div class="md:hidden whychoose-sm">
        <div class="whychoose-bio-sm">
          <div class="whychoose-title-sm">WHY CHOOSE SKIDMORE & HALL CO., LPA</div>
          <div class="whychoose-text-sm">
            The experienced attorneys at Skidmore & Hall Co. LPA are committed to protecting client’s interests and giving them the best representation possible. 
            We believe every client’s situation is unique and we will strive to represent each client according to their personal situation. We will take the time to 
            listen and understand the client’s concerns and we will use our expertise to customize a solution for each individual client. Our goal is to help our clients 
            throughout all their legal needs. We endeavor to build a relationship with our clients where they will continue to use our services whenever they need legal 
            assistance. Our firm is committed to delivering highly skilled, effective, and innovative legal representation to our clients in a timely manner and at a 
            reasonable cost.  
          </div>
          <img src={asset("images/Medina/Courthouse.jpg")} class="whychoose-img-sm"></img>
        </div>
      </div>

      {/* About Us LG*/}
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

      {/* About Us MD */}
      <div class="hidden md:flex lg:hidden aboutus-md">
        <div class="aboutus-md-bio">
          <div class="aboutus-md-title">ABOUT US</div>
          <div class="aboutus-text-md">
            The law firm of Skidmore & Hall Co. LPA has been serving clients in the Northeast Ohio area since 1965. Skidmore & Hall Co., LPA was formed by L. 
            Thomas Skidmore and Ronald H. Hall.  Since the firm’s foundation, our attorneys continue to commit themselves to serving the community and have built 
            their practice on providing valuable individualized legal services to their clients.
          </div>
          <img src={asset("/images/Medina/Office.jpg")} class="aboutus-img-md"></img>
        </div>
      </div>

      {/* About Us SM*/}
      <div class="md:hidden aboutus-sm">
        <div class="aboutus-bio-sm">
          <div class="aboutus-title-sm">ABOUT US</div>
          <div class="aboutus-text-sm">
            The law firm of Skidmore & Hall Co. LPA has been serving clients in the Northeast Ohio area since 1965. Skidmore & Hall Co., LPA was formed by L. 
            Thomas Skidmore and Ronald H. Hall.  Since the firm’s foundation, our attorneys continue to commit themselves to serving the community and have built 
            their practice on providing valuable individualized legal services to their clients.
          </div>
          <img src={asset("/images/Medina/Office.jpg")} class="aboutus-img-sm"></img>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
      </>
  );
}
