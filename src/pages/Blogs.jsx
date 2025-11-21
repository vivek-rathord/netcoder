import React from 'react'
import Blogimg from "../assets/Images/heroimg.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';
function Blogs() {
    Aos.init();
    return (
        <div className='blog container' >
            <div className="Headingtxt container" data-aos="fade-up" data-aos-delay="150">
                <span>Blogs</span>
                <h2>Thinks We Think, learn & share</h2>
                <p>Whether you’re looking to kickstart your learning journey  need tailored It solutions for you business, We’re just a message away. Reach out with your queries, ideas, or collaborating requests. We’ll get back to you as soon as possible</p>
            </div>

            {/* Blog Container 1*/}
            <div className="blogcards container">
                <div className="card big">
                    <img src={Blogimg} alt="Blog 1" />
                    <div className="card-content">
                        <h4>How can typography be used effectively in branding and social media graphics?</h4>
                        <button>Read Full Blog</button>
                    </div>
                </div>

                <div className="right-side">
                    <div className="card small">
                        <img src={Blogimg} alt="Blog 2" />
                        <div class="card-content">
                            <h4>How can typography be used effectively in branding and social media graphics?</h4>
                            <button>Read Full Blog</button>
                        </div>
                    </div>

                    <div className="card small">
                        <img src={Blogimg} alt="Blog 3" />
                        <div className="card-content">
                            <h4>How can typography be used effectively in branding and social media graphics?</h4>
                            <button>Read Full Blog</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Container 2*/}
  <div className="blogcards container reverse">
                <div className="card big">
                    <img src={Blogimg} alt="Blog 1" />
                    <div className="card-content">
                        <h4>How can typography be used effectively in branding and social media graphics?</h4>
                        <button>Read Full Blog</button>
                    </div>
                </div>

                <div className="right-side">
                    <div className="card small">
                        <img src={Blogimg} alt="Blog 2" />
                        <div class="card-content">
                            <h4>How can typography be used effectively in branding and social media graphics?</h4>
                            <button>Read Full Blog</button>
                        </div>
                    </div>

                    <div className="card small">
                        <img src={Blogimg} alt="Blog 3" />
                        <div className="card-content">
                            <h4>How can typography be used effectively in branding and social media graphics?</h4>
                            <button>Read Full Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
