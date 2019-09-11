import React from 'react';
import './AboutUs.css'


const AboutUs = () => {
    return (
<>

    <div className="wrapper">
    <div className="page-header page-header-small">
      <div className="page-header-image" data-parallax="true" >
      </div>
      <div className="content-center">
        <div className="container">
          <h1 className="title">This is our great company.</h1>
          <div className="text-center">
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">Who we are?</h2>
            <h5 className="description">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>
          </div>
        </div>
        <div className="separator separator-primary"></div>
        <div className="section-story-overview">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container image-left"  />
                
                <p className="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                  
                  <small>-NOAA</small>
                </p>
              </div>
              
              <div className="image-container"></div>
            </div>
            <div className="col-md-5">
              
              <div className="image-container image-right"></div>
              <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-team text-center">
      <div className="container">
        <h2 className="title">Reviews</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Elon Mask</h4>
                <p className="category text-primary">SpaceX</p>
                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                  <a href="#">links</a> for people to be able to follow them outside the site.</p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-instagram"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-facebook-square"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Brendon Eich</h4>
                <p className="category text-primary">Javascript</p>
                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                  <a href="#">links</a> for people to be able to follow them outside the site.</p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://specials-images.forbesimg.com/imageserve/5ceaa9c5142c500008f3bcce/416x416.jpg?background=000000&cropX1=937&cropX2=3594&cropY1=11&cropY2=2667" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Sheryl Sandberg</h4>
                <p className="category text-primary">Facebook</p>
                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                  <a href="#">links</a> for people to be able to follow them outside the site.</p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-google-plus"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-youtube"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <footer className="footer footer-default">
      <div className="container">
        <nav>
          <ul>
            
            <li>
              <a href="http://presentation.creative-tim.com">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
          </ul>
        </nav>
         <div className="copyright" id="copyright">

        </div>
      </div>
    </footer>
  
</>
    )
};





export default AboutUs;