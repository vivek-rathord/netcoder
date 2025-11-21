import React, { useState, useEffect } from "react";
import "../Style/style.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import img1 from "../assets/Images/team1.png";
import img2 from "../assets/Images/team1.png";
import img3 from "../assets/Images/team1.png";
import img4 from "../assets/Images/team1.png";
import img5 from "../assets/Images/team1.png";
import img6 from "../assets/Images/team1.png";

function About() {
  useEffect(()=>{
    Aos.init();
  },[])
  const members = [
    { img: img1, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img2, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img3, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img4, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img5, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img6, name: "Nitin Kapoor", role: "Managing Director" },
  
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (members.length - 2)); // show 3 at a time
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + (members.length - 2)) % (members.length - 2));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="aboutwrapper container">
      <div className="herosection container" data-aos="fade-up" data-aos-delay="150">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-text">
          <strong>Netcoder Technology</strong> is a digital solutions and
          learning hub based in Dharamshala, offering creative IT services like
          web design, development, and branding — along with hands-on training
          programs for students and professionals. We help businesses build
          smarter and individuals learn faster, all under one roof.
        </p>
      </div>

      <div className="Headingtxt container">
        <span>our journey</span>
        <h2>
          from classroom concepts to <br /> real-world results
        </h2>
      </div>

      <div className="timelinewrapper container">
        <div className="timeline-line"></div>

        <div className="timeline-item right">
          <div className="dot"></div>
          <div className="content-box" data-aos='fade-up'>
            <p>
              Founded by Nitin Kapoor in 2016, Netcoder Technology began as a
              skill-driven IT training institute based in the serene town of
              Dharamshala, Himachal Pradesh. With a strong emphasis on hands-on
              learning, we offered practical courses in Web Development, UI/UX
              Design, Full Stack Development, Graphic Design, Digital Marketing,
              and more.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="dot"></div>
          <div className="text-left"  data-aos='fade-up'>
            <p>
              Over time, our passion for design and development expanded beyond
              the classroom. As our in-house capabilities grew, so did our
              vision — transforming Netcoder into not just a place to learn, but
              a creative studio delivering real-world IT solutions.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="dot"></div>
          <div className="text-right"  data-aos='fade-up'>
            <p>
              Today, we proudly stand as both an education provider and a
              digital service partner. From helping students launch tech careers
              to building brands and websites for clients, we bridge the gap
              between learning and innovation.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
       <div className="howwework container">
    <div className="Heading">
      <span>How We Work</span>
      <h2>
        Collaboration<br />
        Creativity &nbsp; Clarity
      </h2>
    </div>

    <div className="right">
      <div className="step">
        <h3>01</h3>
        <div className="content">
          <h4>Understand The Need</h4>
          <p>
            We begin by listening - whether it’s a client’s business goal or a
            student’s learning objectives. This helps us design the right path
            forward.
          </p>
        </div>
      </div>

      <div className="step">
        <h3>02</h3>
        <div className="content">
          <h4>Plan With Purpose</h4>
          <p>
            We align our strategy with the goals. For the clients, this means
            tailored digital solutions. For learners, it means practical,
            job-ready training plans.
          </p>
        </div>
      </div>

      <div className="step">
        <h3>03</h3>
        <div className="content">
          <h4>Execute With Clarity</h4>
          <p>
            Design, code, teach – whatever we do, we do with detail, quality,
            and user-focused thinking. Every deliverable is built to perform.
          </p>
        </div>
      </div>

      <div className="step">
        <h3>04</h3>
        <div className="content">
          <h4>Learn & Improve</h4>
          <p>
            We gather feedback, track, results, and evolve continuously. The
            best outcomes come from listening, learning, and refining –
            together.
          </p>
        </div>
      </div>
    </div>
  </div>

      {/* --------our team--------- */}
      <div className="our-team container" data-aos="fade-left" data-aos-easing="ease-in" data-aos-delay="200">
        <div className="Headingtxt container">
          <span>our team</span>
          <h2>the professionals behind netcoder</h2>
        </div>

        {/* ---------------Carousel Section--------------- */}
        <div className="carausal">
          <div
            className="cards-wrapper"
            style={{ transform: `translateX(-${index * 320}px)` }}
          >
            {members.map((member, i) => (
              <div key={i} className="card-1">
                <div className="box">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="card-text">
                  <h6>{member.name}</h6>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="arrow left" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-down fa-rotate-90"></i>
          </div>
          <div className="arrow right" onClick={nextSlide}>
          <i class="fa-solid fa-arrow-down fa-rotate-270"></i>
          </div>
        </div>
      </div>

      {/*---------------- Build team---------------- */}
      <div className="build-team" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <div className="Headingtxt container">
          <span>Connect</span>
          <h2>work with the team that teaches and builds</h2>
          <h3>
            We empower individuals through education and businesses through
            technology. Choose your path or walk both with us.
          </h3>

          <div className="query-btns">
            <Link to="/">
              <button className="black-bg-button">View Course</button>
            </Link>
            <Link to="/">
              <button>Start a Project</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
