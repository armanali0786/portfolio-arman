import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for dropdowns, modals, etc.
import '../assets/css/style.css'; // Your custom styles
import "../assets/css/responsive.css";
import { useNavigate } from 'react-router-dom';

// import Logo from "../assets/images/logo.svg";
import Logo from "../assets/logo.png"
// import HeroImage from "../assets/images/hero_img.jpg";
import HeroImage from "../assets/hero-image/HeroImage7.jpg";

// import AboutImage from "../assets/images/about_img.jpg";
import AboutImage from "../assets/hero-image/HeroImage4.jpg";
// import HeroImage from "../assets/my_image1.jpg";
import ServiceImage1 from "../assets/images/service_icon_one.png";
import ServiceImage2 from "../assets/images/service_icon_two.png";
import ServiceImage3 from "../assets/images/service_icon_three.png";
import ServiceImage4 from "../assets/images/service_icon_four.png";
import ServiceImage5 from "../assets/images/service_icon_five.png";
import ServiceImage6 from "../assets/images/service_icon_six.png";

import Project1 from "../assets/projects/Project1.jpg";
import Project2 from "../assets/projects/linkedin-extension.png";
import Project3 from "../assets/projects/live.png";
import Project4 from "../assets/projects/delivery-point.png";
import Project5 from "../assets/projects/projectOne.png";
import Project6 from "../assets/projects/projectThree.png";
import Project7 from "../assets/projects/addtocart.png";
import Project8 from "../assets/projects/projectTwo.png";


import Article1 from '../assets/article/article1.png'
import Article2 from '../assets/article/article2.png'
import Article3 from '../assets/article/article3.png'
import AboutSkills from '../assets/images/about_skill_img.png'

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <section className="d2c_hero_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start order-1 order-lg-0 wow fadeInLeft">
                        <h6>Welcome to MyPortfolio</h6>
                    <h1>I am <span>Arman Ali</span></h1>
                    <h5>React Developer</h5>
                    <p className="pe-0 pe-xl-5">As a Software Developer with 2+ years of experience in frontend and backend technologies, I have a strong passion for building efficient and scalable systems. I am proficient in technologies like Node.js, React.js, Next.js, JavaScript, and Core Java, with a solid understanding of data structures and algorithms.</p>
                            <a onClick={() => navigate("/contact")}  className="btn">Hire Me</a>
                            <a onClick={() => navigate("/about")} className="btn secondary_btn">Learn More</a>
                        </div>
                        <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0 wow fadeInRight">
                            <div className="d2c_hero_img_wrapper mx-auto">
                                <div className="d2c_img_wrapper">
                                    <img src={HeroImage} className="w-100 h-100 rounded-3" alt="Hero Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- About Section Start --> */}
            <section className="d2c_about_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="d2c_about_img_wrapper mb-5 mb-lg-0 mx-auto mx-lg-0">
                                <div className="d2c_img_wrapper">
                                    <img src={AboutImage} className="w-100 h-100 rounded-3" alt="Hero Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start wow fadeInRight">
                            <h2>Get to Know Me</h2>
                            <p className="mb-2">Skilled Full Stack Developer with 2+ years of experience specializing in React.js, Node.js, and Next.js. Passionate about building scalable SaaS applications, he excels in backend development, database management, and UI/UX design, ensuring seamless user experiences.</p>
                            <p className="d2c_about_content">I've been part of the team that has built the front-end for an enterprise level web application in ReactJS. I've been a part of a team that has built a web app in next level.</p>
                            <h5>How can i help you</h5>
                            <p>I've diverse background in technology, which mean I'm always learning new skills. I've worked with a wide range of technologies, including ReactJs, NodeJs, MYSQL and MongoDB. One of my favorite characteristics of an employer is their passion for the work they are doing.</p>
                            <a onClick={() => navigate("/contact")} className="btn mt-3">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
    {/* <!-- About Section End --> */}

     {/* <!-- About Skill Section Start --> */}
        <section className="d2c_skill_wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2>My skill</h2>
                        <p>Integrate with  appwrite flexible to your needs and ensuring you can code with the language you want at any time</p>
                        <div className="row d2c_progress">
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>ReactJS</p>
                                        <p><span className="count" data-TargetNum="90">90</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="90%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>NodeJS</p>
                                        <p><span className="count" data-TargetNum="95">95</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="95%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>NextJs</p>
                                        <p><span className="count" data-TargetNum="80">80</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="80%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>Redux</p>
                                        <p><span className="count" data-TargetNum="75">75</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="75%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>MySql</p>
                                        <p><span className="count" data-TargetNum="70">70</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="70%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>MongoDB</p>
                                        <p><span className="count" data-TargetNum="80">80</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="80%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>HTML & CSS</p>
                                        <p><span className="count" data-TargetNum="50">50</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="50%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d2c_progress_card">
                                    <div className="d-flex justify-content-between">
                                        <p>tailwind</p>
                                        <p><span className="count" data-TargetNum="60">60</span>%</p>
                                    </div>
                                    <div className="progress clearfix" data-percent="60%">
                                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d2c_img_wrapper">
                            <img src={AboutSkills} className="w-100 h-100" alt="About Skill Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Skill Section End --> */}
    


    {/* Project Section Star  */}


   <section className="d2c_project_wrapper text-center">
        <div className="container">
            <h2>recent Projects</h2>
            <p>I've diverse background in technology, which mean I'm always learning new skills.</p>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 wow fadeInLeft">
                    <div className="d2c_img_wrapper">
                        <img src={Project1} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInDown">
                    <div className="d2c_img_wrapper">
                        <img src={Project2} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 wow fadeInRight">
                    <div className="d2c_img_wrapper">
                        <img src={Project3} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInLeft">
                    <div className="d2c_img_wrapper">
                        <img src={Project4} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInUp">
                    <div className="d2c_img_wrapper">
                        <img src={Project5} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInRight">
                    <div className="d2c_img_wrapper">
                        <img src={Project6} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
            </div>
            <a onClick={() => navigate("/project")} className="btn">See more</a>
        </div>
    </section> 

    {/* Project Section End */}
    
    {/* Services Section Start */}
    <section className="d2c_services_wrapper text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-6 offset-md-1 offset-lg-2 offset-xl-3 text-center wow fadeInDown">
                    <h2>What do i offer</h2>
                    <p>Curious about the person behind ReactProx? Dive into my story, skills, and the journey that led me to the world of React development.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 wow fadeInLeft">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage1} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>Web Application</h5>
                        <p className="mb-0">Designing and developing interactive and web applications using React</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 wow fadeInDown">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage2} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>Single Page Applications</h5>
                        <p className="mb-0">Building SPAs that provide a seamless and fluid user experience</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 wow fadeInRight">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage3} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>Custom Component</h5>
                        <p className="mb-0">Developing reusable and modular UI components using React'sre.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 wow fadeInLeft">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage4} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>Integration with APIs</h5>
                        <p className="mb-0">Integrating web applications with various APIs to fetch</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInUp">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage5} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>State Management</h5>
                        <p className="mb-0">Implementing state management using React's built-in state or external</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInRight">
                    <div className="d2c_service_card">
                        <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage6} className="img-fluid" alt="haha"/>
                        </div>
                        <h5>UI Design and Optimization</h5>
                        <p className="mb-0">Creating visually appealing user interfaces with a focus on usability</p>
                    </div>
                </div>
            </div>
            <a onClick={() => navigate("/service")} className="btn secondary_btn">View More</a>
        </div>
    </section>
    {/* Services Section End  */}

    {/* Testimonial Start  */}

    {/* <section className="d2c_testimonial_wrapper">
        <div className="container">
            <h2 className="text-center">What the People Thinks About me</h2>
            <div className="row d2c_testimonial_slider">
                <div className="col">
                    <div className="d2c_card">
                        <div className="d2c_customer_info_wrapper d-flex align-items-center">
                            <div className="d2c_img_wrapper">
                                <img src="./assets/images/testimonial_img_one.jpg" className="w-100 h-100" alt="Testimonial One"/>
                            </div>
                            <div className="d2c_customer_info">
                                <h5>Nattasha Mith</h5>
                                <p className="mb-0"><span>Alaska, USA</span></p>
                            </div>
                        </div>
                        <p className="d2c_testimonial_content">I'm a very particular person who likes to order a site done. I just told him an idea without any clear plan he did</p>
                    </div>
                </div>
                <div className="col">
                    <div className="d2c_card">
                        <div className="d2c_customer_info_wrapper d-flex align-items-center">
                            <div className="d2c_img_wrapper">
                                <img src="./assets/images/testimonial_img_two.jpg" className="w-100 h-100" alt="Testimonial One"/>
                            </div>
                            <div className="d2c_customer_info">
                                <h5>ray galario</h5>
                                <p className="mb-0"><span>Sydney, Australia</span></p>
                            </div>
                        </div>
                        <p className="d2c_testimonial_content">Reactprox did a great job creating our site for us. He was a very good  responsive, answered all of our QA.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="d2c_card">
                        <div className="d2c_customer_info_wrapper d-flex align-items-center">
                            <div className="d2c_img_wrapper">
                                <img src="./assets/images/testimonial_img_three.jpg" className="w-100 h-100" alt="Testimonial One"/>
                            </div>
                            <div className="d2c_customer_info">
                                <h5>Benny Roll</h5>
                                <p className="mb-0"><span>NewYork, USA</span></p>
                            </div>
                        </div>
                        <p className="d2c_testimonial_content">Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time</p>
                    </div>
                </div>
                <div className="col">
                    <div className="d2c_card">
                        <div className="d2c_customer_info_wrapper d-flex align-items-center">
                            <div className="d2c_img_wrapper">
                                <img src="./assets/images/testimonial_img_three.jpg" className="w-100 h-100" alt="Testimonial One"/>
                            </div>
                            <div className="d2c_customer_info">
                                <h5>Benny Roll</h5>
                                <p className="mb-0"><span>NewYork, USA</span></p>
                            </div>
                        </div>
                        <p className="d2c_testimonial_content">Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time</p>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    {/* Testimonial End */}

    {/* Call to Action Section Start */}
    {/* <section className="d2c_c2a_wrapper text-center">
        <div className="container">
            <div className="d2c_c2a_box wow fadeInUp">
                <h2>Wanna Connect with me?</h2>
                <p>It is a long established fact will be distracted.</p>
                <a href="./pages/contact.html" className="btn">Contact with me</a>
            </div>
        </div>
    </section> */}
    {/* Call to Action Section End */}



    {/* <!-- Blog Section Start --> */}
    <section className="d2c_blog_wrapper text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center wow fadeInDown">
                    <h2>Articles & News</h2>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
                </div>
            </div>
            <div className="row wow fadeInUp">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                            <img src={Article1} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a href="#"><p className="mb-0">Let's Get Solution For Building Construction Work</p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                            <img src={Article2} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a href="#"><p className="mb-0">Quick Tips for Time-Strapped Individuals solutions</p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-0">
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                            <img src={Article3} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a href="#"><p className="mb-0">DataAI - Free Tailwind App Landing Page Template</p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <a onClick={() => navigate("/blog")} className="btn">View More</a>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}

    {/* <!-- Footer Section Start --> */}
   
    {/* <!-- Footer Section End --> */}

        </>
    )
}
