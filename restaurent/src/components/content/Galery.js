import React, { Component } from 'react';

class Galery extends Component {
  render() {
    return (
      //var NewComponent = React.createClass({
      //render: function() {
      //return (
      <div id="gallery" className="section wb">
        <div className="container-fluid">
          <div className="section-title text-center">
            <h3>Gallery</h3>
            <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
          </div>{/* end title */}
          <div className="gallery-menu text-center row">
            <div className="col-md-12">
              <div className="button-group filter-button-group">
                <button className="hvr-radial-in active" data-filter="*">All</button>
                <button className="hvr-radial-in" data-filter=".gal_a">Starters</button>
                <button className="hvr-radial-in" data-filter=".gal_b">Shops</button>
                <button className="hvr-radial-in" data-filter=".gal_c">Main Course </button>
                <button className="hvr-radial-in" data-filter=".gal_d">Desserts</button>
              </div>
            </div>
          </div>
          <div className="gallery-list row">
            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-01.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food</h3>
                  <a href="uploads/gallery_img-01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-02.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food</h3>
                  <a href="uploads/gallery_img-02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_b gal_c">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-03.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food</h3>
                  <a href="uploads/gallery_img-03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_b gal_a">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-04.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food</h3>
                  <a href="uploads/gallery_img-04.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_d">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-05.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food </h3>
                  <a href="uploads/gallery_img-05.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_d">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-06.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food </h3>
                  <a href="uploads/gallery_img-06.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_b">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-07.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food </h3>
                  <a href="uploads/gallery_img-07.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_d gal_c">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-08.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food </h3>
                  <a href="uploads/gallery_img-08.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 gallery-grid gal_d gal_a">
              <div className="gallery-single fix">
                <img src="uploads/gallery_img-09.jpg" className="img-fluid" alt="Image" />
                <div className="img-overlay">
                  <h3>Vegetable Food </h3>
                  <a href="uploads/gallery_img-09.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galery;