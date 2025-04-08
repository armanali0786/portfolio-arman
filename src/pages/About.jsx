import React from 'react'
import AboutSkills from '../assets/images/about_skill_img.png'
import AboutImage from "../assets/my_image.jpg";
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
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

    {/* <!-- Footer Section Start --> */}
 
    {/* <!-- Footer Section End --> */}
    </div>
  )
}
