import React from 'react'
import Article1 from '../assets/article/article1.png'
import Article2 from '../assets/article/article2.png'
import Article3 from '../assets/article/article3.png'
import Article4 from '../assets/article/article3.png'
import Article5 from '../assets/article/article5.png'

export default function Blog() {
  return (
    <>
        <section className="d2c_blog_wrapper d2c_blog_page text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h2>Articles & News</h2>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 blog">
                <a 
                        href="https://medium.com/@armanali0786/why-many-developers-struggle-to-maintain-consistency-while-preparing-for-big-mncs-0f561e8ea676" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                            <img src={Article1} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a      
                                href="https://medium.com/@armanali0786/why-many-developers-struggle-to-maintain-consistency-while-preparing-for-big-mncs-0f561e8ea676" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            <p className="mb-0">Why Many Developers Struggle to Maintain Consistency While Preparing for Big MNCs</p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 blog">
                <a 
                        href="https://medium.com/@armanali0786/how-to-prepare-for-mncs-as-a-software-engineer-197fc8491b9b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                            <img src={Article2} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a 
                                href="https://medium.com/@armanali0786/how-to-prepare-for-mncs-as-a-software-engineer-197fc8491b9b" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            <p className="mb-0">How to Prepare for MNCs as a Software Engineer </p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 blog">
                <a 
                        href="https://medium.com/@armanali0786/5-key-steps-to-becoming-a-better-developer-at-work-b1f023f7d41c" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                        <img src={Article3} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a 
                                href="https://medium.com/@armanali0786/5-key-steps-to-becoming-a-better-developer-at-work-b1f023f7d41c" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    <p className="mb-0">5 Key Steps to Becoming a Better Developer at Work! </p>
                                </a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 blog" >
                     <a 
                        href="https://medium.com/@armanali0786/level-up-your-development-skills-f81afb53825c" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <div className="d2c_card">
                        <div className="d2c_img_wrapper">
                        <img src={Article5} className="w-100 h-100" alt="Blog Image"/>
                        </div>
                        <div className="row d2c_blog_title_wrapper align-items-center">
                            <div className="col-9 col-xl-10">
                                <a  
                                href="https://medium.com/@armanali0786/level-up-your-development-skills-f81afb53825c" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            <p className="mb-0">Level Up Your Development Skills! </p></a>
                            </div>
                            <div className="col-3 col-xl-2">
                                <div className="d2c_icon_wrapper">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div className="d2c_blog_btn">
                <a href="#" id="d2c_blog_more" className="btn mx-auto">
                    load more
                </a>
            </div>
        </div>
    </section>
    </>
  )
}
