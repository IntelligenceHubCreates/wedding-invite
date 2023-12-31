import logo from './logo.svg';
import './App.css';

function App() {
  return (
          <div>
            {/*<div className="fh5co-loader" />*/}
            <div id="page">
              <nav className="fh5co-nav" role="navigation">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2">
                      <div id="fh5co-logo"><a href="index.html">Wedding<strong>.</strong></a></div>
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                      <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">Story</a></li>
                        <li className="has-dropdown">
                          <a href="services.html">Services</a>
                          <ul className="dropdown">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">eCommerce</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">API</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="gallery.html">Gallery</a>
                          <ul className="dropdown">
                            <li><a href="#">HTML5</a></li>
                            <li><a href="#">CSS3</a></li>
                            <li><a href="#">Sass</a></li>
                            <li><a href="#">jQuery</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
              <header id="fh5co-header" className="fh5co-cover" role="banner" style={{backgroundImage: 'url(images/img_bg_2.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                      <div className="display-t">
                        <div className="display-tc animate-box" data-animate-effect="fadeIn">
                          <h1>Joefrey &amp; Sheila</h1>
                          <h2>We Are Getting Married</h2>
                          <div className="simply-countdown simply-countdown-one" />
                          <p><a href="#" className="btn btn-default btn-sm">Save the date</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div id="fh5co-couple">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                      <h2>Hello!</h2>
                      <h3>November 28th, 2016 New York, USA</h3>
                      <p>We invited you to celebrate our wedding</p>
                    </div>
                  </div>
                  <div className="couple-wrap animate-box">
                    <div className="couple-half">
                      <div className="groom">
                        <img src="images/groom.jpg" alt="groom" className="img-responsive" />
                      </div>
                      <div className="desc-groom">
                        <h3>Joefrey Mahusay</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                      </div>
                    </div>
                    <p className="heart text-center"><i className="icon-heart2" /></p>
                    <div className="couple-half">
                      <div className="bride">
                        <img src="images/bride.jpg" alt="groom" className="img-responsive" />
                      </div>
                      <div className="desc-bride">
                        <h3>Sheila Mahusay</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-event" className="fh5co-bg" style={{backgroundImage: 'url(images/img_bg_3.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                      <span>Our Special Events</span>
                      <h2>Wedding Events</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="display-t">
                      <div className="display-tc">
                        <div className="col-md-10 col-md-offset-1">
                          <div className="col-md-6 col-sm-6 text-center">
                            <div className="event-wrap animate-box">
                              <h3>Main Ceremony</h3>
                              <div className="event-col">
                                <i className="icon-clock" />
                                <span>4:00 PM</span>
                                <span>6:00 PM</span>
                              </div>
                              <div className="event-col">
                                <i className="icon-calendar" />
                                <span>Monday 28</span>
                                <span>November, 2016</span>
                              </div>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 text-center">
                            <div className="event-wrap animate-box">
                              <h3>Wedding Party</h3>
                              <div className="event-col">
                                <i className="icon-clock" />
                                <span>7:00 PM</span>
                                <span>12:00 AM</span>
                              </div>
                              <div className="event-col">
                                <i className="icon-calendar" />
                                <span>Monday 28</span>
                                <span>November, 2016</span>
                              </div>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-couple-story">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                      <span>We Love Each Other</span>
                      <h2>Our Story</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                      <ul className="timeline animate-box">
                        <li className="animate-box">
                          <div className="timeline-badge" style={{backgroundImage: 'url(images/couple-1.jpg)'}} />
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h3 className="timeline-title">First We Meet</h3>
                              <span className="date">December 25, 2015</span>
                            </div>
                            <div className="timeline-body">
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted animate-box">
                          <div className="timeline-badge" style={{backgroundImage: 'url(images/couple-2.jpg)'}} />
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h3 className="timeline-title">First Date</h3>
                              <span className="date">December 28, 2015</span>
                            </div>
                            <div className="timeline-body">
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                          </div>
                        </li>
                        <li className="animate-box">
                          <div className="timeline-badge" style={{backgroundImage: 'url(images/couple-3.jpg)'}} />
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h3 className="timeline-title">In A Relationship</h3>
                              <span className="date">January 1, 2016</span>
                            </div>
                            <div className="timeline-body">
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-gallery" className="fh5co-section-gray">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                      <span>Our Memories</span>
                      <h2>Wedding Gallery</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                      <ul id="fh5co-gallery-list">
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-1.jpg)'}}> 
                          <a href="images/gallery-1.jpg">
                            <div className="case-studies-summary">
                              <span>14 Photos</span>
                              <h2>Two Glas of Juice</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-2.jpg)'}}>
                          <a href="#" className="color-2">
                            <div className="case-studies-summary">
                              <span>30 Photos</span>
                              <h2>Timer starts now!</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-3.jpg)'}}>
                          <a href="#" className="color-3">
                            <div className="case-studies-summary">
                              <span>90 Photos</span>
                              <h2>Beautiful sunset</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-4.jpg)'}}>
                          <a href="#" className="color-4">
                            <div className="case-studies-summary">
                              <span>12 Photos</span>
                              <h2>Company's Conference Room</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-5.jpg)'}}>
                          <a href="#" className="color-3">
                            <div className="case-studies-summary">
                              <span>50 Photos</span>
                              <h2>Useful baskets</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-6.jpg)'}}>
                          <a href="#" className="color-4">
                            <div className="case-studies-summary">
                              <span>45 Photos</span>
                              <h2>Skater man in the road</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-7.jpg)'}}>
                          <a href="#" className="color-4">
                            <div className="case-studies-summary">
                              <span>35 Photos</span>
                              <h2>Two Glas of Juice</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-8.jpg)'}}> 
                          <a href="#" className="color-5">
                            <div className="case-studies-summary">
                              <span>90 Photos</span>
                              <h2>Timer starts now!</h2>
                            </div>
                          </a>
                        </li>
                        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: 'url(images/gallery-9.jpg)'}}>
                          <a href="#" className="color-6">
                            <div className="case-studies-summary">
                              <span>56 Photos</span>
                              <h2>Beautiful sunset</h2>
                            </div>
                          </a>
                        </li>
                      </ul>		
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{backgroundImage: 'url(images/img_bg_5.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                  <div className="row">
                    <div className="display-t">
                      <div className="display-tc">
                        <div className="col-md-3 col-sm-6 animate-box">
                          <div className="feature-center">
                            <span className="icon">
                              <i className="icon-users" />
                            </span>
                            <span className="counter js-counter" data-from={0} data-to={500} data-speed={5000} data-refresh-interval={50}>1</span>
                            <span className="counter-label">Estimated Guest</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box">
                          <div className="feature-center">
                            <span className="icon">
                              <i className="icon-user" />
                            </span>
                            <span className="counter js-counter" data-from={0} data-to={1000} data-speed={5000} data-refresh-interval={50}>1</span>
                            <span className="counter-label">We Catter</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box">
                          <div className="feature-center">
                            <span className="icon">
                              <i className="icon-calendar" />
                            </span>
                            <span className="counter js-counter" data-from={0} data-to={402} data-speed={5000} data-refresh-interval={50}>1</span>
                            <span className="counter-label">Events Done</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box">
                          <div className="feature-center">
                            <span className="icon">
                              <i className="icon-clock" />
                            </span>
                            <span className="counter js-counter" data-from={0} data-to={2345} data-speed={5000} data-refresh-interval={50}>1</span>
                            <span className="counter-label">Hours Spent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-testimonial">
                <div className="container">
                  <div className="row">
                    <div className="row animate-box">
                      <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <span>Best Wishes</span>
                        <h2>Friends Wishes</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 animate-box">
                        <div className="wrap-testimony">
                          <div className="owl-carousel-fullwidth">
                            <div className="item">
                              <div className="testimony-slide active text-center">
                                <figure>
                                  <img src="images/couple-1.jpg" alt="user" />
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics"</p>
                                </blockquote>
                              </div>
                            </div>
                            <div className="item">
                              <div className="testimony-slide active text-center">
                                <figure>
                                  <img src="images/couple-2.jpg" alt="user" />
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, at the coast of the Semantics, a large language ocean."</p>
                                </blockquote>
                              </div>
                            </div>
                            <div className="item">
                              <div className="testimony-slide active text-center">
                                <figure>
                                  <img src="images/couple-3.jpg" alt="user" />
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                  <p>"Far far away, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-services" className="fh5co-section-gray">
                <div className="container">
                  <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                      <h2>We Offer Services</h2>
                      <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-left animate-box" data-animate-effect="fadeInLeft">
                        <span className="icon">
                          <i className="icon-calendar" />
                        </span>
                        <div className="feature-copy">
                          <h3>We Organized Events</h3>
                          <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        </div>
                      </div>
                      <div className="feature-left animate-box" data-animate-effect="fadeInLeft">
                        <span className="icon">
                          <i className="icon-image" />
                        </span>
                        <div className="feature-copy">
                          <h3>Photoshoot</h3>
                          <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        </div>
                      </div>
                      <div className="feature-left animate-box" data-animate-effect="fadeInLeft">
                        <span className="icon">
                          <i className="icon-video" />
                        </span>
                        <div className="feature-copy">
                          <h3>Video Editing</h3>
                          <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="fh5co-video fh5co-bg" style={{backgroundImage: 'url(images/img_bg_3.jpg)'}}>
                        <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo"><i className="icon-video2" /></a>
                        <div className="overlay" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fh5co-started" className="fh5co-bg" style={{backgroundImage: 'url(images/img_bg_4.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                  <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                      <h2>Are You Attending?</h2>
                      <p>Please Fill-up the form to notify you that you're attending. Thanks.</p>
                    </div>
                  </div>
                  <div className="row animate-box">
                    <div className="col-md-10 col-md-offset-1">
                      <form className="form-inline">
                        <div className="col-md-4 col-sm-4">
                          <div className="form-group">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <button type="submit" className="btn btn-default btn-block">I am Attending</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                  <div className="row copyright">
                    <div className="col-md-12 text-center">
                      <p className="text-center text-md-end text-xl-start"> 
                        All Rights Reserved
                      </p>
                      <p>
                      </p><ul className="fh5co-social-icons">
                        <li><a href="#"><i className="icon-twitter" /></a></li>
                        <li><a href="#"><i className="icon-facebook" /></a></li>
                        <li><a href="#"><i className="icon-linkedin" /></a></li>
                        <li><a href="#"><i className="icon-dribbble" /></a></li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="gototop js-top">
              <a href="#" className="js-gotop"><i className="icon-arrow-up" /></a>
            </div>
            {/* jQuery */}
            {/* jQuery Easing */}
            {/* Bootstrap */}
            {/* Waypoints */}
            {/* Carousel */}
            {/* countTo */}
            {/* Stellar */}
            {/* Magnific Popup */}
            {/* //  */}
            {/* Main */}
          </div>
  );
}

export default App;
