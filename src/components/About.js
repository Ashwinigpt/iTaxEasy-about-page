function About() {
    return (
        <>
            <section className="about-us">
                <h1>About Us</h1>
            </section>

            <section className="flex">
                <figure>
                    <img
                        className="img"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </figure>
                <div className="experience">
                    <h2 className="ten">10 Years Experience</h2>
                    <h3 className="payers">We are here for Easy finances for indian tax payers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                        Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                        Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor.
                        Aliquam interdum at lacus non blandit.</p>
                    <button className="btn">LEARN MORE</button>
                </div>
            </section>

            <section>
                <h2 className="mission">Our Mission</h2>
                <p className="simplify">Our mission is to simplify finances, save money and time for millions of Indian businesses and people.
                    We are a technology company that builds trusted, useful and insightful platforms for our clients to run their finances and improve their relationship with money.
                    Our mission is to simplify finances, save money and time for millions of Indian businesses and people.
                    We are a technology company that builds trusted, useful and insightful platforms for our clients to run their finances and improve their relationship with money
                </p>
            </section>

            <section>
                <h2 className="mission">Company Story</h2>
                <h3 className="journey">Learn About Our Journey</h3>
                <div>

                </div>
            </section>

            <section>
                <h2 className="mission team">Team Member</h2>
                <h3 className="journey">Meet Our Experts</h3>
                <article className="flex">
                    <figure>
                        <img className="team-img" src="https://itaxeasy.com/img/team-1.jpg" />
                        <p className="team-name">Dylan Admas</p>
                        <p className="developer">Software Developer</p>
                    </figure>
                    <figure>
                        <img className="team-img" src="https://itaxeasy.com/img/team-2.jpg" />
                        <p className="team-name">Dylan Admas</p>
                        <p className="developer">Frontend Developer</p>
                    </figure>
                    <figure>
                        <img className="team-img" src="https://itaxeasy.com/img/team-3.jpg" />
                        <p className="team-name">Dylan Admas</p>
                        <p className="developer">Backend Developer</p>
                    </figure>
                    <figure>
                        <img className="team-img" src="https://itaxeasy.com/img/team-1.jpg" />
                        <p className="team-name">Dylan Admas</p>
                        <p className="developer"> Developer</p>
                    </figure>
                </article>
            </section>

            <footer>
                <div className="flex2 justify-between align-start wrap container">
                    <div className="reach-us flex-25">
                        <h4>Reach Us</h4>
                        <nav>
                            <ul className="flex2 flex-column justify-start align-start">
                                <li>
                                    <address>
                                        <i className="fas fa-location-arrow"> Main office -G - 41, Gandhi Nagar, Near Defence Colony,Padav Gwalior 474002 (M.P)</i>
                                    </address>
                                </li>
                                <li>
                                    <address>
                                        <i className="fas fa-location-arrow"> Second Branch - Sat 1 ,Flat - 811, Logix Zest Blossom, Sector 143, Noida 201306 ( U.P)</i>
                                    </address>
                                </li>
                                <li>
                                    <a href="tel:+919389732668"><i className="fas fa-phone"></i> <span>+91-8770877270</span></a>
                                </li>
                                <li>
                                    <a href="mailto:info@yourmail.com"><i className="fas fa-envelope"></i>
                                        <span> support@itaxeasy.com</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="site-links flex-20">
                        <h4>Site Links</h4>
                        <nav>
                            <ul className="flex2 flex-column justify-start align-start">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="quick-links flex-20">
                        <h4>Quick Links</h4>
                        <nav>
                            <ul className="flex2 flex-column justify-start align-start">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="follow-us flex-20">
                        <h4>Follow Us</h4>
                        <nav>
                            <ul className="flex2 justify-between align-start wrap">
                                <li className="flex-20">
                                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className="flex-20">
                                    <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                                </li>
                                <li className="flex-20">
                                    <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                                </li>
                                <li className="flex-20">
                                    <a href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble-square"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="footer-copyright">
                    <p>Copyright</p>
                    <small>&copy; All Right Reserved by iTaxEasy</small>
                </div>
            </footer>
        </>
    )
};

export default About;