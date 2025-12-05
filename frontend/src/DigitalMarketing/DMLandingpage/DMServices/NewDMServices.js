
import React from 'react';
import './NewDMServices.css';

import sicon1 from "../../Asset/dm1.png";
import sicon2 from "../../Asset/dm2.png";
import sicon3 from "../../Asset/dm3.png";
import sicon4 from "../../Asset/dm4.png";
import sicon5 from "../../Asset/dm5.png";
import sicon6 from "../../Asset/dm6.png";
import sicon7 from "../../Asset/dm7.png";
import sicon8 from "../../Asset/dm8.png";
import sicon9 from "../../Asset/dm9.png";
import sicon10 from "../../Asset/dm10.png";
import sicon11 from "../../Asset/dm11.png";
import sicon12 from "../../Asset/dm12.png";
import sicon13 from "../../Asset/dm13.png";
import sicon14 from "../../Asset/dm14.png";
import sicon15 from "../../Asset/dm15.png";

function NewDMServices() {
    return (
        <div className="container-fluid text-center m-0 p-0" id="DMService">

            <div className="row justify-content-center py-4">

                {/* 1 */}
               <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon1} />
                            <p> Search Engine Optimization (SEO)</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon2} />
                        <p>Search Engine Marketing (SEM)</p>
                    </div>
                </div>

                {/* 3 */}
                 <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon3} />
                            <p>Social Media Marketing (SMM)</p>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon4} />
                        <p>Content Marketing</p>
                    </div>
                </div>

                {/* 5 */}
               <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon5} />
                            <p>Pay-Per-Click (PPC) Advertising</p>
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon6} />
                        <p>Online Reputation Management (ORM)</p>
                    </div>
                </div>

                {/* 7 → White Card + Gradient Border */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon7} />
                            <p>Conversion Rate Optimization (CRO)</p>
                        </div>
                    </div>
                </div>

                {/* 8 → White Card + Gradient Border */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon8} />
                        <p>Email Marketing</p>
                    </div>
                </div>

                {/* 9 */}
               <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon9} />
                            <p>Video Marketing (YouTube, Shorts, Reels)</p>
                        </div>
                    </div>
                </div>

                {/* 10 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon10} />
                        <p> Creative Design Services (Posters, Banners, Ads)</p>
                    </div>
                </div>

                {/* 11 */}
               <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon11} />
                            <p> Social Media Creatives (Reels, Carousels, Stories)</p>
                        </div>
                    </div>
                </div>
                {/* 12 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon12} />
                        <p>Branding & Identity</p>
                    </div>
                </div>

                {/* 13 */}
                 <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon13} />
                            <p>Analytics & Reporting</p>
                        </div>
                    </div>
                </div>

                {/* 14 */}
                <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-card dm-gradient justify-content-center align-items-center">
                        <img src={sicon14} />
                        <p>E-commerce Marketing Solutions</p>
                    </div>
                </div>

                {/* 15 */}
              <div className="col-6 col-md-3 col-lg-2 m-3">
                    <div className="dm-gradient-border">
                        <div className="inner-box dm-card justify-content-center align-items-center">
                            <img src={sicon15} />
                            <p>WhatsApp & SMS Marketing</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NewDMServices;
