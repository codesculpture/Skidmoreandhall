import Header from '../islands/Header.tsx';
import Footer from '../islands/Footer.tsx';
import { asset, Head } from '$fresh/runtime.ts';

export default function Contact() { 
    return (
        <>
            <head>
                <title>Skidmore and Hall</title>
                <link rel="icon" href="/blackSHLogo.svg"/>
                <link rel="stylesheet" href={asset("/css/contact.css")} />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display"/>
            </head>
            <Head>
                <title>Skidmore and Hall</title>
                <link rel="icon" href="/blackSHLogo.svg"/></Head>
            <Header/>
            <div class="contact-us-page">
                <div class="hidden lg:grid grid-cols-2 contact-us-page-banner">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4114692916164!2d-81.86602538439568!3d41.147372018802294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830c8024935e87f%3A0x9ded31cda1d8e599!2s748%20N%20Court%20St%2C%20Medina%2C%20OH%2044256!5e0!3m2!1sen!2sus!4v1667675034184!5m2!1sen!2sus" 
                            width="450" 
                            height="600" 
                            style="border:0;" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            class="map-google"
                        ></iframe>
                    </div>
                    <div>
                        <div class="contact-us-page-title">Contact Us!</div>
                        <div class="contact-us-page-message">
                            <span class="give-us-call"><b><i>Give us a call</i></b>:</span> If you are facing any type of legal matter, whether defending or bringing a lawsuit, 
                            starting a corporation or setting up your estate plan, please give us a call. An experienced attorney can help 
                            guide you through the legal process and any legal questions you are facing. 
                        </div>
                    </div>
                </div>
                <div class="hidden lg:grid grid-cols-2 contact-us-page-info">
                    <div></div>
                    <div class="grid grid-cols-2">
                        <div>
                            <div class="contact-address-title">Address</div>
                            <div class="info-text-contact">748 North Court Street, <br/> 
                                Medina, Ohio 44256 </div>
                        </div>
                        <div>
                            <div class="reach-us-title">Reach Us</div>
                            <div class="info-text-contact">Phone: (330) 725-5936<br/> 
                                Fax: (330) 725-3145<br/>
                                Email: help@skidmoreandhall.com <br/>
                                Hours: 9:00 a.m. to 5:00 p.m.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}