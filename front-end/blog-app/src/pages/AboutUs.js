import React from 'react';
import './AboutUs.css'


const AboutUs = () => {
    return (
<>
			<section id="header">
            <header>
                <span className="image avatar"><img src="images/avatar.jpg" alt="" /></span>
                <h1 id="logo"><a href="#">Terry Pratchett</a></h1>
                <p>“The first draft is just you<br />
                telling yourself the story.”</p>
            </header>
            <nav id="nav">
                <ul>
                    <li><a href="#one" className="active">About</a></li>
                    <li><a href="#two">Things I Can Do</a></li>
                    <li><a href="#three">A Few Accomplishments</a></li>
                    <li><a href="#four">Contact</a></li> 
                </ul>
            </nav>
            <footer>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </footer>
        </section>

   
        <div id="wrapper">

           
                <div id="main">

                    
                        <section id="one">
                            <div className="image main" data-position="center">
                                <img src='./images/banner.jpg' alt="" />
                            </div>
                            <div className="container">
                                <header className="major">
                                    <h2>Tech Blog</h2>
                                    <p>Just an incredibly simple responsive  blog site<br />
                                    let you dive into world of Tech </p>
                                </header>
                                <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
                            </div>
                        </section>

                
                        <section id="two">
                            <div className="container">
                                <h3>Things I Can Do</h3>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
                                <ul className="feature-icons">
                                    <li className="icon solid fa-code">Write your blog</li>
                                    <li className="icon solid fa-cubes">Find your favorite articles</li>
                                    <li className="icon solid fa-book">Read latest Tech news</li>
                                    <li className="icon solid fa-coffee">Have your free profile page</li>
                                    <li className="icon solid fa-bolt">Lightning bolt</li>
                                    <li className="icon solid fa-users">Shadow clone technique</li>
                                </ul>
                            </div>
                        </section>

                   
                        <section id="three">
                            <div className="container">
                                <h3>A Few Accomplishments</h3>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                                <div className="features">
                                    <article>
                                        <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                                        <div className="inner">
                                            <h4>Possibly broke spacetime</h4>
                                            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                                        </div>
                                    </article>
                                    <article>
                                        <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                                        <div className="inner">
                                            <h4>Terraformed a small moon</h4>
                                            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                                        </div>
                                    </article>
                                    <article>
                                        <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                                        <div className="inner">
                                            <h4>Snapped dark matter in the wild</h4>
                                            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>

                   
                        <section id="four">
                            <div className="container">
                                <h3>Contact Me</h3>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                                <ul class="items">
								<li>
									<h3>Email</h3>
									<a href="#">information@untitled.ext</a>
								</li>
								<li>
									<h3>Phone</h3>
									<a href="#">(000) 000-0000</a>
								</li>
								<li>
									<h3>Address</h3>
									<span>1234 Somewhere Road, San Francisco, CA 00000</span>
								</li>
								<li>
									<h3>Elsewhere</h3>
									<ul class="icons">
										<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
										<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
										<li><a href="#" class="icon brands fa-codepen"><span class="label">Codepen</span></a></li>
									</ul>
								</li>
							</ul>
                            </div>
                        </section>
                        </div>
                </div>

                

          
                <section id="footer">
                    <div className="container">
                        <ul className="copyright">
                            <li>&copy; 2019. All rights reserved.</li><li>General Assembly</li>
                        </ul>
                    </div>
                </section>

       
</>
        




    );
};





export default AboutUs;