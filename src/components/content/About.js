import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
                    <div>
                      <div id="about" className="section lb">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="message-box">                        
                                <h2>Welcome to Green Special Restaurant.</h2>
                                <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
                                <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, 
                                  eu bibendum risus. Phasellus et congue justo.</p>
                                <ul>
                                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                  <li>Nullam ut massa id odio imperdiet consequat.</li>
                                  <li>Cras ullamcorper nisi eget condimentum aliquet. </li>
                                  <li>Cras id libero iaculis, sodales ligula vitae, egestas odio.</li>
                                  <li>Aenean congue ex et bibendum porta.</li>
                                </ul>
                                <a href="#" className="sim-btn hvr-radial-in"><span>Contact Us</span></a>
                              </div>{/* end messagebox */}
                            </div>{/* end col */}
                            <div className="col-md-6">
                              <div className="right-box-pro wow fadeIn">
                                <img src="uploads/about_01.png" alt="" className="img-fluid img-rounded" />
                              </div>{/* end media */}
                            </div>{/* end col */}
                          </div>{/* end row */}
                        </div>{/* end container */}
                      </div>{/* end section */}
                      <div className="section cont-box">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                              <div className="inner-cont-box">
                                <i className="flaticon-review" />
                                <h3 className="counter-number">5000</h3>
                                <h4>Client</h4>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                              <div className="inner-cont-box">
                                <i className="flaticon-alarm-clock" />
                                <h3 className="counter-number">3000</h3>
                                <h4>Time Of Work</h4>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                              <div className="inner-cont-box">
                                <i className="flaticon-idea" />
                                <h3 className="counter-number">2000</h3>
                                <h4>Ideas</h4>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                              <div className="inner-cont-box">
                                <i className="flaticon-projector-screen" />
                                <h3 className="counter-number">8000</h3>
                                <h4>Project Done</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
export default About;