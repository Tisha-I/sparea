import { useEffect, useState } from "react";
import './section1.css'
import Ipad from '../assets/Ipad.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import Image4 from '../assets/Image4.png'
import Image5 from '../assets/Image5.png'

function Section1() {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="hero">
                {/* <div className="navbar">
                    <div className="logo">
                        <p>Area</p>
                    </div>
                    <div className={`navlinks ${scrolled ? "fixedNav" : ""}`}>
                        <a className="navlinkTexts">
                            Benefits
                        </a>
                        <a className="navlinkTexts">
                            Specifications
                        </a>
                        <a className="navlinkTexts">
                            How-to
                        </a>
                        <a className="navlinkTexts1">
                            Contact us
                        </a>
                    </div>
                    <button className="navBtn">
                        <p className="navBtnText">
                            Learn More
                        </p>
                    </button>
                </div> */}
                <div className="navbar">
                    <div className="logo">
                        <p>Area</p>
                    </div>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Nav Links */}
                    <div
                        className={`navlinks 
                ${scrolled ? "fixedNav" : ""} 
                ${menuOpen ? "showMenu" : ""}`}
                    >
                        <a className="navlinkTexts">Benefits</a>

                        <a className="navlinkTexts">Specifications</a>

                        <a className="navlinkTexts">How-to</a>

                        <a className="navlinkTexts1">Contact us</a>

                        <button className="navBtn mobileBtn">
                            <p className="navBtnText">Learn More</p>
                        </button>
                    </div>

                    {/* Desktop Button */}
                    <button className="navBtn desktopBtn">
                        <p className="navBtnText">Learn More</p>
                    </button>
                </div>
                <h1 className="heading">
                    Browse everything.
                </h1>
                <div className="section1img">
                    <img src={Ipad} alt="Ipad" className="ipad-image" />
                </div>
                <div className="trusteddiv">
                    <p className="trustedText">
                        Trusted by:
                    </p>
                    <div className="trusted">
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                        <div className="trustedlogos">
                            <p>Logoipsum</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="section2">
                    <h1 className="BenefitsText">
                        Benefits
                    </h1>
                    <h1 className="benefitsh1">
                        We’ve cracked the code.
                    </h1>
                    <p className="benefitsP">
                        Area provides real insights, without the data overload.
                    </p>
                    <div className="benefits">
                        <div className="benefitsections">
                            <hr />
                            <p className="benefitsLogo">
                                A
                            </p>
                            <p className="benefitsHeading">
                                Amplify Insights
                            </p>
                            <p className="benefitstext">
                                Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.
                            </p>
                        </div>
                        <div className="benefitsections">
                            <hr />
                            <p className="benefitsLogo">
                                B
                            </p>
                            <p className="benefitsHeading">
                                Control Your Global Presence
                            </p>
                            <p className="benefitstext">
                                Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.
                            </p>
                        </div>
                        <div className="benefitsections">
                            <hr />
                            <p className="benefitsLogo">
                                C
                            </p>
                            <p className="benefitsHeading">
                                Remove Language Barriers
                            </p>
                            <p className="benefitstext">
                                Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.
                            </p>
                        </div>
                        <div className="benefitsections">
                            <hr />
                            <p className="benefitsLogo">
                                D
                            </p>
                            <p className="benefitsHeading">
                                Visualize Growth
                            </p>
                            <p className="benefitstext">
                                Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={Image2} alt="Ipad" className="image2" />
                <div className="section3">
                    <div className="section3Left">
                        <h1 className="section3h1">
                            See the Big Picture
                        </h1>
                        <p className="section3P">
                            Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
                        </p>
                        <div className="section3LeftText">
                            <div className="section3Texts">
                                <p className="section3No">
                                    01
                                </p>
                                <p className="section3Notext">
                                    Spot Trends in Seconds: No more digging through numbers.
                                </p>
                            </div>
                            <div className="section3Texts">
                                <p className="section3No">
                                    02
                                </p>
                                <p className="section3Notext">
                                    Get Everyone on the Same Page: Share easy-to-understand reports with your team.
                                </p>
                            </div>
                            <div className="section3Texts">
                                <p className="section3No">
                                    03
                                </p>
                                <p className="section3Notext">
                                    Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.
                                </p>
                            </div>
                            <div className="section3Texts">
                                <p className="section3No">
                                    04
                                </p>
                                <p className="section3Notext">
                                    Your Global Snapshot: Get a quick, clear overview of your entire operation.
                                </p>
                            </div>
                        </div>
                        <button className="section3btn">
                            <p className="section3btnText">
                                Discover More
                            </p>
                        </button>
                    </div>
                    <img src={Image3} alt="Ipad" className="image3" />

                </div>
                <hr className='hrSection3' />
                <div className="section4">
                    <p className="section4heading">
                        Specs
                    </p>
                    <h1 className="section4h1">
                        Why Choose Sparea?
                    </h1>
                    <p className="section4text">
                        You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.
                    </p>
                    <button className="section3btn">
                        <p className="section3btnText">
                            Discover More
                        </p>
                    </button>
                </div>
                <div className="section5">
                    <div className="section5One">
                        <div className="section5h1Div">
                            <h1 className="section5h1">
                                Area
                            </h1>
                        </div>
                        <div className="section5down">
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Ultra-fast browsing
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Advanced AI insights
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Seamless integration
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Advanced AI insights
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Ultra-fast browsing
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Full UTF-8 support
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section5Two">
                        <div className="section5h1Div">
                            <h1 className="section5h1two">
                                WebSurge
                            </h1>
                        </div>
                        <div className="section5down">
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Fast browsing
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Basic AI recommendations
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Restricts customization
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Basic AI insights
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Fast browsing
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Potential display errors
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section5Two">
                        <div className="section5h1Div">
                            <h1 className="section5h1two">
                                HyperView
                            </h1>
                        </div>
                        <div className="section5down">
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Moderate speeds
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    No AI assistance
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Steep learning curve
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    No AI assistance
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Moderate speeds
                                </p>
                            </div>
                            <div className="section5selections">
                                <p className="section5selectionsText2">
                                    A
                                </p>
                                <p className="section5selectionsText">
                                    Partial UTF-8 support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section6">
                    <img src={Image4} alt="Ipad" className="image4" />
                    <div className="section6Right">
                        <p className="section6P">
                            “I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”
                        </p>
                        <div className="section6RightDown">
                            <h1 className="section6h1">
                                John Smith
                            </h1>
                            <p className="section6P2">
                                Head of Data
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section7">
                    <h1 className="section1h1">
                        Map Your Success
                    </h1>
                    <button className="section3btn">
                        <p className="section3btnText">
                            Discover More
                        </p>
                    </button>
                </div>
                <div className="section8">
                    <div className="section8One">
                        <h1 className="section8No">
                            01
                        </h1>
                        <div className="section8down">
                            <p className="section8P">
                                Get Started
                            </p>
                            <p className="section8P2">
                                With our intuitive setup, you’re up and running in minutes.
                            </p>
                        </div>
                    </div>
                    <div className="section8One">
                        <h1 className="section8No">
                            02
                        </h1>
                        <div className="section8down">
                            <p className="section8P">
                                Customize and Configure
                            </p>
                            <p className="section8P2">
                                Adapt Area to your specific requirements and preferences.
                            </p>
                        </div>
                    </div>
                    <div className="section8One">
                        <h1 className="section8No">
                            03
                        </h1>
                        <div className="section8down">
                            <p className="section8P">
                                Grow Your Business
                            </p>
                            <p className="section8P2">
                                Make informed decisions to exceed your goals.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={Image5} alt="Ipad" className="image5" />
                <div className="section9main">
                    <div className="section9">
                        <h1 className="section9heading">
                            Connect with us
                        </h1>
                        <div className="section9down">
                            <h2 className="section9text">
                                Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
                            </h2>
                            <button className="section9button">
                                <p className="learnmore">
                                    Learn More
                                </p>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="footerLinks">
                    {/* <a href="#" className="footerlink"></a> */}
                    <a href='#' className="navlinkTexts">
                        Benefits
                    </a>
                    <a href='#' className="navlinkTexts">
                        Specifications
                    </a>
                    <a href='#' className="navlinkTexts">
                        How-to
                    </a>
                </div>
                <div className="footermain">
                    <div className="footerLeft">
                        <p className="footertext">
                            © Letisha.
                        </p>
                        <p className="footertext">
                            2026
                        </p>
                    </div>
                    <div className="footerRight">
                        <p className="footertext">
                            All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1;