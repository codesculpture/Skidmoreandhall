import { asset, Head } from "$fresh/runtime.ts";
import  Header  from "../islands/Header.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Skidmore and Hall</title>
        <link rel="icon" href="/blackSHLogo.svg"/>
        <link rel="stylesheet" href={asset("header.css")} />     
      </Head>
      <Header/>
    </>
  );
}
