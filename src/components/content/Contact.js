import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            // var NewComponent = React.createClass({
            //     render: function() {
            //       return (

            <div id="contact" className="section db">
                <div className="container-fluid">
                    <div className="section-title text-center">
                        <h3>Contact</h3>
                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                    </div>{/* end title */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact_form">
                                <div id="message" />
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="date" type="text" placeholder="Date" required="required" data-validation-required-message="Please enter Date." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="time" type="text" placeholder="Time" required="required" data-validation-required-message="Please enter Time." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                        <div className="col-lg-12 text-center">
                                            <div id="success" />
                                            <button id="sendMessageButton" className="sim-btn hvr-radial-in" data-text="Send Message" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>{/* end col */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </div>
        );
    }
}
export default Contact;