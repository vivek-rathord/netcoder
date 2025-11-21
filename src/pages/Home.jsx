import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.css";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// Images
import Group44 from "../assets/Images/Group4.png";
import imager from "../assets/Images/heroimg.jpg";
import arrowright from "../assets/Images/arrow-right.png";

function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const cleanupFns = []; // to store cleanup functions

    dropdowns.forEach((dropdown) => {
      const icon = dropdown.querySelector(".icon");
      if (!icon) return;

      const handleClick = () => {
        dropdown.classList.toggle("open");
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
      };

      icon.addEventListener("click", handleClick);

      // Store cleanup
      cleanupFns.push(() => icon.removeEventListener("click", handleClick));
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);


  return (

    <>
      {/* Wrapper to center all content */}
      <div className="container">

        {/* ---------------------------- HERO SECTION ---------------------------- */}
        <div className="herosection container">
          <span>Netcoder Technology</span>
          <h1>
            solution for brands <br /> Skills for the learners
          </h1>
          <p>
            From digital branding and website design to student training, we help
            businesses grow online and train future IT professionals with
            real-world skills.
          </p>
        </div>

        {/* --------------------- SOLUTIONS & LEARNING ---------------------- */}
        <div className="solutions container">
          <div className="box-1" data-aos="zoom-in-right">
            <h3>Solutions</h3>
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
            </p>
            <Link to="/services"><button className="white-bg-button">Explore services</button></Link>
          </div>

          <div className="box-2" data-aos="zoom-in-left">
            <h3>Learning</h3>
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
            </p>
            <Link to="/education"><button className="black-bg-button">View Training Programs</button></Link>
          </div>
        </div>

        {/* -------------------------ABOUT / WHO WE ARE ---------------------- */}
        <div className="Headingtxt container">
          <span>Who We Are</span>
          <h2>Innovating IT Solutions</h2>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>

        {/* ----------------------- HERO IMAGE ------------------------------ */}
        <div className="image container" data-aos="fade-up">
          <img src={Group44} alt="Hero" />
        </div>

        {/*------------------------------ EDUCATION SECTION ------------------------------ */}
        <div className="section-block">

          <div className="section-heading">
            <h1 className="section-h">EDUCATION</h1>
            <span className="section-btn">What We Do</span>
          </div>

          <h2>Popular Courses We Offers</h2>

          <div className="courses-container container">
            <div className="courses">
              <div className="active-box">
                <h3>01. Graphic Designing</h3>
                <p>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie , dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                </p>
              </div>

              <h3>02. Web Development</h3>
              <h3>03. Digital Marketing</h3>
              <h3>04. Auto CAD</h3>
            </div>

            <div className="course-img">
              <img src={imager} alt="Course" />
            </div>
            <div className="btn-center">
              <Link to="/services"><button className="explore-btn black-bg-button">Explore All Services</button></Link>
            </div>
          </div>


        </div>

        {/* ---------------------SOLUTIONS SECTION ---------------------- */}
        <div className="section-block">

          <div className="section-heading">
            <h1 className="section-h">SOLUTIONS</h1>
            <span className="section-btn">What We Do</span>

          </div>

          <div className="servicesheading container">
            <h2>Popular Services We Offers</h2>
          </div>

          <div className="courses-container container">
            <div className="courses">
              <div className="active-box">
                <h3>01. Creative Design Solutions</h3>
                <p>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <h3>02. Web Development Solutions</h3>
              <h3>03. Digital Marketing</h3>
              <h3>04. Digital Engagement Solutions</h3>
            </div>

            <div className="course-img">
              <img src={imager} alt="Service" />
            </div>
          </div>

          <div className="btn-center">
            <Link to="/services"><button className="explore-btn black-bg-button">Explore All Services</button></Link>
          </div>

          {/* ---------------------- PORTFOLIO  ---------------------- */}
          <div className="ideas-showcase container" data-aos="fade-up">
            <div className="Headingtxt container">
              <span>Portfolio</span>
              <h2>Ideas We Brought to Life</h2>
            </div>

            <div className="">
              <div className="ideas-card-wrapper" >
                <div className="idea-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
                  <h3>Mudroots Pottery Studio</h3>
                  <p>
                    We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
                  </p>
                  <div className="Blogbtn">
                    <Link to='/Blogs'><button>View Full Case Study</button></Link>
                    <Link to='/Blogs'><img src={arrowright} alt="arrowright" /></Link>
                  </div>
                </div>

                <div className="idea-card" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
                  <h3>Mudroots Pottery Studio</h3>
                  <p>
                    We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
                  </p>
                  <div className="Blogbtn">
                    <Link to='/Blogs'><button>View Full Case Study</button></Link>
                    <Link to='/Blogs'><img src={arrowright} alt="arrowright" /></Link>
                  </div>
                </div>
              </div>

              <Link to="/"><button className="portfoliobtn black-bg-button">View Our Portfolio</button></Link>
            </div>
          </div>

          {/* --------------------BLOGS SECTION ------------------- */}
          <section className="blogs-section container">

            <div className=" container">
              <span>Blogs</span>
              <h2>Stories That Fuel The Build</h2>
            </div>

            <div className="blogs-wrapper">
              <div className="blog-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                <div className="blog-img">
                  <img src={imager} alt="blog-1" />
                </div>
                <h3>How can typography be used effectively in branding and social media graphics?</h3>
                <div className="Blogbtn">
                  <Link to='/Blogs'><button>Read Full Blog</button></Link>
                  <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>

                </div>
              </div>

              <div className="blog-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150">
                <div className="blog-img">
                  <img src={imager} alt="blog-2" />
                </div>
                <h3>How can typography be used effectively in branding and social media graphics?</h3>
                <div className="Blogbtn">
                  <Link to='/Blogs'><button>Read Full Blog</button></Link>
                  <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>
                </div>
              </div>

              <div className="blog-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                <div className="blog-img">
                  <img src={imager} alt="blog-3" />
                </div>
                <h3>How can typography be used effectively in branding and social media graphics?</h3>
                <div className="Blogbtn">
                  <Link to='/Blogs'><button>Read Full Blog</button></Link>
                  <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>
                </div>
              </div>

            </div>

            <Link to='/Blogs'><button className="read-more black-bg-button">Read All Blogs</button></Link>


          </section>

          {/* -----------------------FAQ WRAPPER---------------------- */}
          <div className="faq-wrapper container">
            <div className="Headingtxt container">
              <span>FAQs</span>
              <h2>What People usually ask</h2>
            </div>
          </div>

          {/* -------------------------CONTACT SECTION -------------------------- */}
          <div className="getintouch container" data-aos="fade-up" data-aos-duration="600">
            <span>Contact us</span>
            <h3>
              Whether you're building a brand or building your skills, we’re ready to help you move forward
            </h3>
            <Link to="/contact"><button className="contactus">Contact us now</button></Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
