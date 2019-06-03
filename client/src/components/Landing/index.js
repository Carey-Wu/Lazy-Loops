import React from "react";
import "./style.css";
import Login from '../Login';
import Create from '../Register';
import Loops from "./assets/img/loops.png";
import Keyboard from "../Keyboard";

function Landing() {

    var keyboardActive = true

    return (
        <div>
            {/* -- Start Header Area -- */}
            <header className="default-header">
                <div className="container">
                    <div className="header-wrap">
                        <div className="header-top d-flex justify-content-between align-items-center">
                            <div className="text-center logo">
                                <a href="/"><img src={Loops} alt=""></img></a>
                            </div>
                            <div className="main-menubar d-flex align-items-center">
                                <nav className="hide">
                                    <a href="/">Welcome</a>
                                    <a href="/">Sign Up / Sign In</a>

                                </nav>
                                <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- End Header Area --> */}
            {/* <!-- Start Banner Area --> */}
            <main>
                <main>
                    <div id="hero">
                        <div className="layer layer-bg" data-type="parallax" data-depth="0.10"></div>
                        <div className="layer layer-1" data-type="parallax" data-depth="0.20"></div>
                        <div className="layer layer-2" data-type="parallax" data-depth="0.50"></div>
                        <div className="layer layer-overlay" data-type="parallax" data-depth="0.70"></div>
                        <div className="layer layer-3" data-type="parallax" data-depth="0.75"></div>
                        <div className="layer layer-4" data-type="parallax" data-depth="1.00"></div>
                    </div>
                </main>
                <section className="banner-area relative">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-center">
                            <div className="col-lg-10">
                                <div className="banner-content text-center">
                                    <h1 className="text-white">Lazyboi Media Presents...<br></br>
                                        Lazy Loops</h1>

                                    <p className="text-white">Create unique music and become a musician from the comfort of your
								keyboard <br></br> Be Lazy, Be Proud. </p>
                                    <a href="#loginContainer" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Create
									Now</span><span className="lnr lnr-arrow-right"></span></a>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="wrapper">

                    <div id="content">
                        <article id="frameless-parachute">

                        </article>

                        <article id="english-channel">


                        </article>

                        <article id="about">


                        </article>
                    </div>

                    {/* <!-- Parallax foreground --> */}
                    <div id="parallax-bg3">
                        <img id="bg3-1"
                            src="https://www.freeiconspng.com/uploads/misc-cloud-smoke-element-png-by-dbszabo1-on-deviantart-19.png"
                            width="300" height="300" alt="Top right image" />
                        {/* <img id="bg3-2" src="https://cdn140.picsart.com/277266187012211.png?r1024x1024" width="200" height="200"
                            alt="colorful cloud" /> */}
                    </div>

                    {/* <!-- Parallax midground -->
                    <div id="parallax-bg2">
                        <img id="bg2-1" src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b263e.png" width="300"
                            height="300" alt="cloud" />


                    </div> */}

                    {/* <!-- Parallax background --> */}
                    {/* <div id="parallax-bg1">

                        <img id="bg1-2" src="https://cdn130.picsart.com/276458239056211.png?r1024x1024" width="350" height="350"
                            alt="music notes" />

                    </div> */}

                </div>
                {/* <div className="parallaxical2 text-center">
               
               </div> */}
                <div id="keyboardWrapper">
                <Keyboard id="keyboardWrapper text-center" active={keyboardActive}/>
                </div>

                {/* <!-- Parallax - Login Start --> */}
                <div className="parallaxical" id="loginContainer">
                <Login id="loginArea"/>
                <Create id="createArea"/>
                </div>

                {/* <!-- End Login Area --> */}

                {/* <!-- Start Service Area --> */}
                <section className="service-area">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-sm-6">
                                <div className="single-service">
                                    <div className="top">
                                        <div className="content text-center">
                                            <span className="lnr lnr-mustache"></span>
                                            <h3>Be Yourself</h3>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <p>No judgements here at Lazy Loops, we ask that you be yourself, unlock your creativity
                                            and
                                            have fun!
            
								</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-service d-flex flex-column">
                                    <div className="bottom order-2 order-sm-1">
                                        <p> Don't own a piano?
                                            You've come to the right place!
                                            With this app, we turn your keyboard into an actual instrument!
								</p>
                                    </div>
                                    <div className="top order-1 order-sm-2">
                                        <div className="content text-center">
                                            <span className="lnr lnr-keyboard"></span>
                                            <h3>Instrument</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-service">
                                    <div className="top">
                                        <div className="content text-center">
                                            <span className="lnr lnr-music-note"></span>
                                            <h3>Create</h3>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <p>Lazy Loops give you the ability to be a musician, create tracks you've created to
									save and import.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-service d-flex flex-column">
                                    <div className="bottom order-2 order-sm-1">
                                        <p>Create unique music & beats, be lazy, be proud and crank that volume up!</p>
                                    </div>
                                    <div className="top order-1 order-sm-2">
                                        <div className="content text-center">
                                            <span className="lnr lnr-volume-high"></span>
                                            <h3>Crank It</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            {/* <!-- End Service Area --> */}


            {/* <!-- Strat Footer Area --> */}
            <footer>
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-text m-0">Copyright &copy; 2019 Lazyboi Media <i className="fa fa-headphones"
                        aria-hidden="true"></i></p>
                    <div className="footer-social d-flex align-items-center">
                        <a href="https://github.com/Carey-Wu/Lazy-Loops"><i className="fab fa-github"></i></a>

                    </div>
                </div>

            </footer>
            {/* <!-- End Footer Area --> */}
        </div >
    )
}

export default Landing;
