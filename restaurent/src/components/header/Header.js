import React, { Component } from 'react';

class Header extends Component {
                  render() {
                    return (
                            <div>
                              <div id="preloader">
                                <div id="main-ld">
                                  <div id="loader" />  
                                </div>
                              </div>{/* end loader */}
                              {/* END LOADER */}
                              {/* Navigation */}
                              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                                <div className="container-fluid">
                                  <a className="navbar-brand js-scroll-trigger" href="#page-top">
                                    <img className="img-fluid" src="images/logo.png" alt="" />
                                  </a>
                                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    Menu
                                    <i className="fa fa-bars" />
                                  </button>
                                  <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger active" href="#home"><span>Home</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#about"><span>About</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#menu"><span>Menu</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#gallery"><span>Gallery</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#chef"><span>Chef</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#pricing"><span>Pricing</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#blog"><span>Blog</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#contact"><span>Contect Us</span></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </nav>
                              <section id="home" className="main-banner">
                                <div className="slider-new-2 owl-carousel owl-theme">
                                  <div className="item slider-screen">
                                    <div className="slider-img-full">
                                      <img src="uploads/slider-01.jpg" alt="" />
                                    </div>
                                    <div className="container">
                                      <div className="slider-content text-white">
                                        <div className="in-box">
                                          <h2>Awesome Restaurant, Best Recipes for Dinner </h2>
                                          <p>Specialized in design and coding graphics and websites.</p>
                                          <a className="btn-slider hvr-radial-in" href="#">Learn More</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>	
                                  <div className="item slider-screen">
                                    <div className="slider-img-full">
                                      <img src="uploads/slider-02.jpg" alt="" />
                                    </div>
                                    <div className="container">
                                      <div className="slider-content text-white">
                                        <div className="in-box">
                                          <h2>Awesome Restaurant, Best Recipes for Dinner</h2>
                                          <p>Specialized in design and coding graphics and websites.</p>
                                          <a className="btn-slider hvr-radial-in" href="#">Learn More</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item slider-screen">
                                    <div className="slider-img-full">
                                      <img src="uploads/slider-03.jpg" alt="" />
                                    </div>
                                    <div className="container">
                                      <div className="slider-content text-white">
                                        <div className="in-box">
                                          <h2>Awesome Restaurant, Best Recipes for Dinner</h2>
                                          <p>Specialized in design and coding graphics and websites.</p>
                                          <a className="btn-slider hvr-radial-in" href="#">Learn More</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          );
                        }
                      }
export default Header;