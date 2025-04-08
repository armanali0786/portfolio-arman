import React from 'react'
import Project1 from "../assets/projects/Project1.jpg";
import Project2 from "../assets/projects/linkedin-extension.png";
import Project3 from "../assets/projects/live.png";
import Project4 from "../assets/projects/delivery-point.png";
import Project5 from "../assets/projects/projectOne.png";
import Project6 from "../assets/projects/projectThree.png";
import Project7 from "../assets/projects/addtocart.png";
import Project8 from "../assets/projects/projectTwo.png";

export default function Project() {
  return (
    <>
         <section className="d2c_project_wrapper d2c_project_page text-center">
        <div className="container">
            <h2>recent Projects</h2>
            <p>I've diverse background in technology, which mean I'm always learning new skills.</p>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d2c_img_wrapper">
                        <img src={Project1} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <div className="d2c_img_wrapper">
                        <img src={Project2} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="d2c_img_wrapper">
                        <img src={Project3} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d2c_img_wrapper">
                        <img src={Project4} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <div className="d2c_img_wrapper">
                        <img src={Project5} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="d2c_img_wrapper">
                        <img src={Project6} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4 project">
                    <div className="d2c_img_wrapper">
                        <img src={Project7} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-md-0 project">
                    <div className="d2c_img_wrapper">
                        <img src={Project8} className="w-100 h-100 rounded-3" alt="Project Image"/>
                    </div>
                </div>
                {/* <div className="d2c_project_btn">
                    <a href="#" id="d2c_project_more" className="btn mx-auto">
                        See More
                    </a>
                </div> */}
            </div>
        </div>
    </section>
    </>
  )
}
