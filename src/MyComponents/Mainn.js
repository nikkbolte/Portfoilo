import React, { useState, useTransition } from 'react';
import styled from 'styled-components';
import "./MainnStyles.css";
import IntroImg from "../assets/righ.png";
import AboutImg from "../assets/LINKED_COVER-2.png";
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';



export default function Main() {
    const [showHeading, setShowHeading] = useState(false);

    const toggleHeading = () => {
        setShowHeading(!showHeading);
    };

    return (
            <>
            <section className="home" id="home"></section>
            <section className="firstSection">
                <div className="leftSection">
                    <h2 className="hero_title">Hi, it's me <span className="Green"> NIKHIL</span></h2>
                    <h3 className='hero_subtitle'>I am a Developer | Designer</h3>
                    <span id="element"></span>
                    <a href="https://github.com/nikkbolte" className="fab fa-github"></a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/nikhil-patel-090177271" className="fab fa-linkedin"></a>&nbsp;&nbsp;
                    <a href="mailto:nikhilworkshere@gmail.com " className="fas fa-envelope"></a>


                </div>
                <div className="rightSection">
                    <img className='Intro-img' src={IntroImg} alt="righ.png" />
                </div>
            </section>
            <br /><br />
            <hr />


            <section className="secondSection" id="about">
                <h3><br /><br />There's something</h3>
                <h1 className="text" >&nbsp;&nbsp;&nbsp;&nbsp;About Me</h1>

                <div className="row mt-4">
                    <div className="col-lg-6">
                        <img classNameName='Intro-img' src={AboutImg} alt="About image" width="400px" height="500px" />
                    </div>

                    <div className="col-lg-6"><br/><br/>
                        <p>Hello !!!! I'm thrilled to have the opportunity to
                            showcase my skills and experience as a software developer. With a passion for creating
                            innovative
                            solutions and a strong foundation in various programming languages and technologies, I am
                            confident
                            in my ability to tackle complex software development challenges.

                        </p>
                        <div className="row mt-3">
                            <ol> <i><b>Expertise :</b> </i></ol>

                            <div className="col-md-6">
                                <ul>
                                    <li>Web Developer</li>
                                    <li>Web Designer</li>
                                    <li>Graphics Designer</li>
                                    <li>Firebase</li>

                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li>C/JAVA/Python</li>
                                    <li>HTML/CSS/Javascript/Bootstrap</li>
                                    <li>ReactJs</li>
                                    <li>MongoDB</li>

                                </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <p> Throughout my career, I have gained proficiency in a wide range of programming languages,
                                including but not limited to Python, Java, C, and JavaScript. I am well-versed in both
                                frontend and backend development, utilizing popular frameworks and libraries such as React,
                                Angular, Node.js, and Django to build robust and user-friendly web applications.
                                Additionally, I
                                have experience working with databases like MySQL, MongoDB, and PostgreSQL, ensuring
                                efficient
                                data management and retrieval.
                            </p>
                        </div>
                    </div>
                </div>
            </section><br/>
            <hr />
            <section className='ServicesSection' id='services'>
                <Services/>
            </section><br/><hr/>
                <section className='ProjectSection' id='Projects'>
                <Projects/>
                </section><br/>
                <hr/>
                <section className='ContactPage' id='Contact'>
                <Contact/>
                </section>
                
            
                </>
                )
}
