import React from 'react'

export default function Contact() {
  return (
    <div>
       <section className="d2c_contact_wrapper d2c_contact_page">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xl-6 offset-md-2 offset-xl-3 text-center">
                    <h2>Stay Touch With me</h2>
                    <p className="d2c_contact_title_content">Curious about the person behind ReactProx? Dive into my story, skills, and the journey that led me to the world</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 mb-5 mb-lg-0 wow fadeInLeft">
                    <div className="d2c_form_wrapper">
                        <form className="row needs-validation" novalidate>
                            <div className="col-md-6">
                                <label for="validationCustomFirstName" className="form-label mb-3">First Name</label>
                                <input type="text" className="form-control" id="validationCustomFirstName" autocomplete="off" placeholder="First Name" required/>
                            </div>
                            <div className="col-md-6">
                                <label for="validationCustomLastName" className="form-label mb-3">Last Name</label>
                                <input type="text" className="form-control" id="validationCustomLastName" autocomplete="off" placeholder="Last Name" required/>
                            </div>
                            <div className="col-md-12">
                                <label for="validationCustomEmail" className="form-label mb-3">Email Address</label>
                                <div className="input-group has-validation">
                                    <input type="email" className="form-control" id="validationCustomEmail" autocomplete="on" placeholder="hello@mail.com" required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label for="validationCustomMessage" className="form-label mb-3">Message</label>
                                <textarea className="form-control" rows="4" id="validationCustomMessage" placeholder="Type message here..." required></textarea>
                                <button className="btn" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 wow fadeInRight">
                    <div className="d2c_contact_us_wrapper">
                        <h2>Contact Us</h2>
                        <p className="d2c_contact_content">Don't hesitate to ask for a consultation or ask any type of questions directly, just contact us</p>
                        <ul>
                            <li className="d-flex">
                                <i className="fas fa-map"></i>
                                <div className="d2c_contact_info">
                                    <p className="mb-1"><span>Arman Ali</span></p>
                                    <p>Rajkot, Gujarat</p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-envelope"></i>
                                <div className="d2c_contact_info">
                                    <p className="mb-1"><span>Email Address</span></p>
                                    <p>armanali.shaikh77@mail.com</p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-phone-square-alt"></i>
                                <div className="d2c_contact_info">
                                    <p className="mb-1"><span>Telephone</span></p>
                                    <p>( +91 ) 731 997 7276</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="d2c_contact_map position-relative rounded-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6050.469896764953!2d-73.98371524427581!3d40.69082292666655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4b350fc303%3A0x4ae5d65964e327f0!2sWilloughby%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sbd!4v1708337743218!5m2!1sen!2sbd" className="rounded-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="d2c_overlay rounded-3"></div>
            </div> */}
        </div>
    </section>
    </div>
  )
}
