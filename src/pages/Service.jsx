import React from 'react'
import ServiceImage1 from "../assets/images/service_icon_one.png";
import ServiceImage2 from "../assets/images/service_icon_two.png";
import ServiceImage3 from "../assets/images/service_icon_three.png";
import ServiceImage4 from "../assets/images/service_icon_four.png";
import ServiceImage5 from "../assets/images/service_icon_five.png";
import ServiceImage6 from "../assets/images/service_icon_six.png";
export default function Service() {
  return (
    <>
        <div className="d2c_service_page_wrapper">
            {/* <!-- Services Section Start --> */}
        <section className="d2c_services_wrapper d2c_service_page text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-6 offset-md-1 offset-lg-2 offset-xl-3 text-center wow fadeInDown">
                        <h2>What do i offer</h2>
                        <p className="d2c_service_page_content">Curious about the person behind ReactProx? Dive into my story, skills, and the journey that led me to the world of React development.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                                <img src={ServiceImage1} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>Web Application</h5>
                            <p className="mb-0">Designing and developing interactive and web applications using React</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage2} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>Single Page Applications</h5>
                            <p className="mb-0">Building SPAs that provide a seamless and fluid user experience</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage3} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>Custom Component</h5>
                            <p className="mb-0">Developing reusable and modular UI components using React'sre.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage4} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>Integration with APIs</h5>
                            <p className="mb-0">Integrating web applications with various APIs to fetch</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage5} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>State Management</h5>
                            <p className="mb-0">Implementing state management using React's built-in state or external</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 service">
                        <div className="d2c_service_card">
                            <div className="d2c_img_wrapper d-flex justify-content-center align-items-center">
                            <img src={ServiceImage6} className="img-fluid" alt="haha"/>
                            </div>
                            <h5>UI Design and Optimization</h5>
                            <p className="mb-0">Creating visually appealing user interfaces with a focus on usability</p>
                        </div>
                    </div>
                    <div className="d2c_service_btn">
                        <a href="#" id="d2c_service_more" className="btn secondary_btn mx-auto">
                            load more
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Services Section End --> */}

        {/* <!-- Call To Action Section Start --> */}
        {/* <section className="d2c_c2a_wrapper d2c_service_c2a text-center wow fadeInUp">
            <div className="container">
                <div className="d2c_c2a_box">
                    <h2>Wanna Conect with me?</h2>
                    <p>It is a long established fact will be distracted.</p>
                    <a href="#" className="btn">Contact with me</a>
                </div>
            </div>
        </section> */}
        {/* <!-- Call To Action Section End --> */}
       </div>
    </>
  )
}
