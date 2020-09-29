import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            // var NewComponent = React.createClass({
            //     render: function() {
            //       return (

            <div id="blog" className="section wb">
                <div className="container-fluid">
                    <div className="section-title text-center">
                        <h3>Blog</h3>
                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                    </div>{/* end title */}
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-lg-4">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <img src="uploads/blog-01.jpg" className="img-fluid" alt="post-img" />
                                    <div className="date">
                                        <span>06</span>
                                        <span>Aug</span>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>Quisque auctor lectus interdum nisl accumsan venenatis.</h4>
                                    <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
                                    <ul>
                                        <li>by admin</li>
                                        <li>Apr 21, 2018</li>
                                        <li><a href="#"><b> Comments</b></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-lg-4">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <img src="uploads/blog-02.jpg" className="img-fluid" alt="post-img" />
                                    <div className="date">
                                        <span>06</span>
                                        <span>Aug</span>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>Quisque auctor lectus interdum nisl accumsan venenatis.</h4>
                                    <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
                                    <ul>
                                        <li>by admin</li>
                                        <li>Apr 21, 2018</li>
                                        <li><a href="#"><b> Comments</b></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-lg-4">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <img src="uploads/blog-03.jpg" className="img-fluid" alt="post-img" />
                                    <div className="date">
                                        <span>06</span>
                                        <span>Aug</span>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <h4>Quisque auctor lectus interdum nisl accumsan venenatis.</h4>
                                    <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
                                    <ul>
                                        <li>by admin</li>
                                        <li>Apr 21, 2018</li>
                                        <li><a href="#"><b> Comments</b></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;