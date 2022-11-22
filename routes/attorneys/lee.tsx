import { asset, Head } from "$fresh/runtime.ts";
import Footer from "../../islands/Footer.tsx";
import Header from "../../islands/Header.tsx";

export default function lee() {
    return (
      <>
        <Head>
          <link rel="icon" href={asset("/blackSHLogo.svg")} />
          <link rel="stylesheet" href={asset("/lee.css")} />
        </Head>
        <Header/>
        <div class="lee-section">
          <div class="lee-bio-background">
            <div class="lee-img-container">
              <img src={asset("/Lee-Skidmore.jpg")} class="lee-img"></img>

            </div>
          </div>

        </div>
        <Footer/>
      </>
    );
}