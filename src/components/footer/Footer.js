import React, { Component } from 'react';

class Footer extends Component {
    render() {
              return (
                <div>
                  <footer className="main-footer">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="mb-3 img-logo">
                            <a href="#">
                              <img src="images/logo.png" alt="" />
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <h4 className="mb-4 ph-fonts-style foot-title">
                            Recent Link
                          </h4>
                          <ul className="ph-links-column">
                            <li><a href="#" className="text-black">About us</a></li>
                            <li><a href="#" className="text-black">Services</a></li>
                            <li><a href="#" className="text-black">Selected Work</a></li>
                            <li><a href="#" className="text-black">Get In Touch</a></li>
                            <li><a href="#" className="text-black">Careers</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <h4 className="mb-4 ph-fonts-style foot-title">
                            Contact Us
                          </h4>
                          <div className="cont-box-footer">
                            <div className="cont-line">
                              <div className="icon-b">
                                <i className="fa fa-map-signs" aria-hidden="true" />
                              </div>
                              <div className="cont-dit">
                                <p>9236 Winding Way St. Richardson, TX 75080</p>
                              </div>
                            </div>
                            <div className="cont-line">
                              <div className="icon-b">
                                <i className="fa fa-volume-control-phone" aria-hidden="true" />
                              </div>
                              <div className="cont-dit">
                                <p><a href="#">+ 11 888 998 899</a></p>
                                <p><a href="#">+ 11 800 990 800</a></p>
                              </div>
                            </div>
                            <div className="cont-line">
                              <div className="icon-b">
                                <i className="fa fa-envelope-o" aria-hidden="true" />
                              </div>
                              <div className="cont-dit">
                                <p><a href="#">demoinfo@gmail.com</a></p>
                                <p><a href="#">demoinfo@gmail.com</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <h4 className="mb-4 ph-fonts-style foot-title">
                            SUBSCRIBE
                          </h4>
                          <p className="ph-fonts-style_p">
                            Get monthly updates and free resources.
                          </p>
                          <div className="media-container-column" data-form-type="formoid">
                            <div data-form-alert className="align-center" hidden>
                              Thanks for filling out the form!
                            </div>
                            <form className="form-inline" action="#" method="post">
                              <input defaultValue data-form-email="true" type="hidden" />
                              <div className="form-group">
                                <input className="form-control input-sm input-inverse my-2" name="email" required data-form-field="Email" placeholder="Email" id="email" type="email" />
                              </div>
                              <div className="input-group-btn">
                                <button href className="btn hvr-radial-in btn-primary" type="submit" role="button"><span> Subscribe </span></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
                  <div className="copyrights">
                    <div className="container-fluid">
                      <div className="footer-distributed">
                        <div className="footer-left">
                          <p className="footer-links">
                            <a href="#">Home</a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                          </p>
                          <p className="footer-company-name">All Rights Reserved. © 2018 <a href="#">Green Special</a> Design By : 
                            <a href="https://html.design/">html design</a></p>
                        </div>
                      </div>
                    </div>{/* end container */}
                  </div>{/* end copyrights */}
                  <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
                </div>
              );
            }
          };


export default Footer;