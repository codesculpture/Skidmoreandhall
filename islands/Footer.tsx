import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { asset } from '$fresh/runtime.ts';
import { render } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";


export default function Footer() { 
    return (
        <>
            <head>
            <link rel="stylesheet" href={asset("/css/footer.css")} />     
            </head>
            {/* Large Footer */}
            <div class="hidden lg:grid grid-cols-3 content-start footer">
                <div class="flex logo-section">
                    <img
                        src="images/TanSHLogo.svg"
                        class="hidden lg:flex w-40 h-40 ml-10"
                        alt="Skidmore and Hall Logo Tan"
                    />
                </div>
                <div class="hidden lg:flex quick-links">
                    <div class="quick-links-section">
                    <div class="quick-links-title">Quick Links</div>
                    <div class="grid w-56 grid-cols-2 space-x-0 quick-links-links">
                        <div class="quick-links-links-1">
                            <div class="flex flex1 quick-link-item">
                                <div>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron">
                                        <path d="M9 10L15 15.25L9 20.5" stroke="#BD9B78" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="link-to-quick"><a href="/">Home</a></div>
                            </div>
                            <div class="flex flex1 quick-link-item">
                                <div>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron">
                                        <path d="M9 10L15 15.25L9 20.5" stroke="#BD9B78" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="link-to-quick">Attorneys</div>
                            </div>
                            <div class="flex flex1 quick-link-item">
                                <div>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron">
                                        <path d="M9 10L15 15.25L9 20.5" stroke="#BD9B78" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="link-to-quick">Contact Us</div>
                            </div>
                        </div>
                        <div class="quick-links-links-2">
                        <div class="flex flex1 quick-link-item">
                                <div>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron">
                                        <path d="M9 10L15 15.25L9 20.5" stroke="#BD9B78" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="link-to-quick">Services</div>
                            </div>
                            <div class="flex flex1 quick-link-item">
                                <div>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron">
                                        <path d="M9 10L15 15.25L9 20.5" stroke="#BD9B78" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="link-to-quick">Articles</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex contact-us">
                    <div class="contact-us-section">
                        <div class="contact-us-title">Contact Us</div>
                        <div class="list-items">phone: (330) 725-5936</div>
                        <div class="list-items">Fax: (330) 725-3145</div>
                        <div class="list-items">Email: help@skidmoreandhall.com </div>
                        <div class="list-items">address: 748 North Court Street, Medina, Ohio 44256</div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer */}
            <div class="lg:hidden flex flex1 footer-mobile">
                <div class="mobile-logo">
                    <img
                        src="images/TanSHLogo.svg"
                        class="flex w-40 h-40 ml-5"
                        alt="Skidmore and Hall Logo Tan"
                    />
                </div>
                <div class="contact-us-mobile">
                    <div class="contact-us-title-mobile">Contact Us</div>
                    <div class="list-items-mobile">phone: (330) 725-5936</div>
                    <div class="list-items-mobile">Fax: (330) 725-3145</div>
                    <div class="list-items-mobile">Email: help@skidmoreandhall.com </div>
                    <div class="list-items-mobile">address: 748 North Court Street, Medina, Ohio 44256</div>
                </div>
            </div>
        </>
    )
}