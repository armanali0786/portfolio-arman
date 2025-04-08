import React from 'react'
import Logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';

export default function Footer() {

  return (
    <>
        <footer className="d2c_footer_wrapper">
  <div className="container">
      <div className="row">
          <div className="col-md-10 col-lg-4 mb-4 mb-lg-0 wow fadeInLeft">
          {/* <NavLink to="/">
                <img src={Logo} alt="Footer Logo" />
              </NavLink> */}
              <p className="mb-0">I've been working as web developer for the past two years, and have experience</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInUp">
              <div className="d2c_contact_details">
                  <h5>Contact Details</h5>
                  <div className="d2c_info_wrapper d-flex align-items-center mb-2">
                      <a href="tel:882195550114" className="d2c_icon_wrapper"><i className="fas fa-phone-alt"></i></a>
                      <p className="mb-0">+91 731-99-77276</p>
                  </div>
                  <div className="d2c_info_wrapper d-flex align-items-center mb-2">
                      <a href="mailto:reactprox@mail.com" className="d2c_icon_wrapper"><i className="fas fa-envelope"></i></a>
                      <p className="mb-0">armanali.shaikh77@gmail.com</p>
                  </div>
                  <div className="d2c_info_wrapper d-flex align-items-center">
                      <a href="https://www.google.com/maps/search/Royal+2464+Ln.+Mesa,+New+Jersey/@40.0677546,-76.0433962,8z/data=!3m1!4b1?entry=ttu" target="_blank" className="d2c_icon_wrapper"><i className="fas fa-map-marker-alt"></i></a>
                      <p className="mb-0">Rajkot, Gujarat, India</p>
                  </div>
              </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInRight">
              <div className="d2c_footer_newsletter">
                  <h5>Subscribe For Premium Resource</h5>
                  <form className="needs-validation" novalidate>
                      <div className="input-group h-100">
                          <input type="email" className="form-control" placeholder="input your email:" aria-describedby="newsletter_btn" autocomplete="on" required/>
                          <button className="btn" type="submit" id="newsletter_btn"><i className="fas fa-paper-plane"></i></button>
                      </div>
                  </form>
                  <ul className="list-group list-group-horizontal">
                      <li>
                          <a href="https://www.linkedin.com/in/arman-ali-8383081ab" target="_blank" className="d2c_icon_wrapper"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com/profile.php?id=100031325293941&mibextid=ZbWKwL" target="_blank" className="d2c_icon_wrapper"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                          <a href="https://twitter.com/Arman_Ali_01?s=09" target="_blank" className="d2c_icon_wrapper"><i className="fab fa-twitter"></i></a>
                      </li>
                      {/* <li>
                          <a href="https://www.instagram.com/designtocodes/" target="_blank" className="d2c_icon_wrapper"><i className="fab fa-instagram"></i></a>
                      </li> */}
                  </ul>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Copy Right Start --> */}
  <div className="container">
      <div className="d2c_copy_right_wrapper">
          {/* <p className="mb-0 text-center">Copyright &copy; 2025 <a href="https://designtocodes.com/" target="_blank" className="d2c_link">DesignToCodes</a>. All Rights Reserved.</p> */}
      </div>
  </div>
  {/* <!-- Copy Right End --> */}
</footer>
    </>
  )
}
