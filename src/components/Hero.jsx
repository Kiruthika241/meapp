import React, { useRef, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Hero.css";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { MdEmail } from "react-icons/md"; // ✅ Replace wrong SiEmaildotjs with MdEmail

export default function Hero() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lr2oq49", // ✅ Your Service ID
        "template_527xr6y", // ✅ Your Template ID
        form.current,
        "6-hf9pZbaj2uk6oIV" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };
  return (
    <>
      {/* Hero Section */}
      <section className="container-fluid hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2>Hi👋🏼, It's Me</h2>
              <h1 className="fw-bold">Kiruthika Devi G</h1>
              <h3>
                And I'm a <span className="highlight">Mern Stack Developer</span>
              </h3>
              <p className="text-secondary">
                I create responsive and dynamic web applications that are both
                functional and visually appealing. Let's build something amazing
                together!
              </p>

              {/* Contact icons */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
                <a
                  href="mailto:kiruthikaganesan241@gmail.com"
                  className="text-decoration-none text-purple"
                  title="Send Email"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://wa.me/919894385151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-purple"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/kiruthikadevi-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-purple"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Kiruthika241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-purple"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="/photo-icon.png"
                alt="Profile"
                className="img-fluid profile-pic"
                style={{ maxWidth: "350px" }}
              />
            </div>
          </div>
        </div>


      </section>


      {/* About Section */}

      <section
        id="about"
        className="container-fluid py-5 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.918)" }}
      >
        <section id="about" className="container my-5">
          <div className="p-4 rounded bg-dark text-light shadow">
            <h2 className="highlight mb-4 text-center">About Me</h2>
            {/* <div className="text-justify" style={{ textAlign: "justify", lineHeight: "1.5" }}>
              <p>
                I recently completed my <b>B.E. in Computer Science and Engineering</b> at
                <b> Adithya Institute of Technology</b> and I am currently pursuing a
                <b> MERN Stack Development course</b> at <b>KGiSL MicroCollege</b>.
              </p>
              <p>
                I am a passionate <span className="highlight">MERN Stack Developer</span> who
                enjoys building dynamic, scalable, and user-friendly web applications.
              </p>
              <p>
                My skills include <b>JavaScript, React, Node.js, Express, and MongoDB</b>,
                along with tools like <b>Bootstrap, GitHub, and Figma</b>.
              </p>
              <p>
                I focus on writing clean, maintainable code while delivering innovative
                solutions that solve real-world problems.
              </p>
              <p>
                My academic journey and hands-on training have strengthened my
                <b> problem-solving, logical thinking, and development skills</b>.
              </p>
              <p>
                I also emphasize responsive design, smooth user experiences, and
                modern development practices.
              </p>
              <p>
                I believe in continuous learning and strive to stay updated with the
                latest frameworks, tools, and industry trends.
              </p>
              <p>
                Collaboration, creativity, and curiosity drive me to deliver impactful
                solutions in the field of software development.
              </p>
              <a href="#contact" className="btn btn-purple mt-3">
                Let’s Connect
              </a>
            </div> */}
            <div
              className="text-justify"
              style={{ textAlign: "justify", lineHeight: "1.6" }}
            >
              <p>
                I completed my <b>B.E. in Computer Science and Engineering</b> at
                <b> Adithya Institute of Technology</b>. I am a passionate
                <span className="highlight"> MERN Stack Developer</span> focused on
                building scalable, secure, and user-friendly web applications.
              </p>

              <p>
                I worked as a <b>Full Stack Developer – MERN</b> at
                <b> Couples Info Tech</b> (Sep 2025 – Jan 2026), where I developed scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I handled both frontend and backend development, designed responsive user interfaces, structured efficient database systems, and collaborated with cross-functional teams to deliver high-performance and user-friendly applications.
              </p>

              <p>
                Prior to that, I completed an <b>8-month Internship</b> at
                <b> KGiSL MicroCollege</b>, where I gained hands-on experience in
                full-stack development. I built real-world projects involving
                authentication systems, CRUD operations, responsive UI design,
                and application deployment.
              </p>

              <p>
                My technical expertise includes
                <b> JavaScript, React, Node.js, Express, MongoDB</b>,
                along with tools like <b>Git, GitHub, Bootstrap, and Figma</b>.
              </p>

              <p>
                I focus on writing clean, maintainable code and delivering
                efficient solutions that solve real-world problems.
                I strongly believe in continuous learning and staying updated
                with modern development practices.
              </p>

              <a href="#contact" className="btn btn-purple mt-3">
                Let’s Connect
              </a>
            </div>
          </div>
        </section>
      </section>


      {/* Projects Section */}
      <section id="projects" className="container-fluid p-0">
        <div
          className="py-5 text-center text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.918)" }}
        >
          <h2 className="highlight mb-4">My Projects</h2>
          <p className="text-secondary mb-5">
            Here are some of the projects I have worked on, showcasing my skills in full-stack development.
          </p>

          <div className="container">
            <div className="row g-4">

              {/* Project 0 */}
              <div className="col-md-4">
                <div className="card bg-dark text-light h-100 shadow-sm border-0">
                  <img
                    src="/Ezyvoicecalculatorai.png"
                    className="card-img-top"
                    alt="EasyVoice Calculator"
                  />
                  <div className="card-body">
                    <h5 className="card-title">EasyVoice Calculator</h5>
                    <p className="card-text">
                      EasyVoice Calculator is an AI-powered voice-enabled calculator that allows users
                      to perform real-time mathematical operations using speech recognition.
                      Built with the MERN stack, it integrates modern UI design and intelligent
                      voice processing to deliver a seamless and interactive user experience.
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="https://mernapp-m8te.onrender.com/" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                        Live Site
                      </a>
                      <a href="https://github.com/Kiruthika241/VoiceCalc" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 1 */}
              <div className="col-md-4">
                <div className="card bg-dark text-light h-100 shadow-sm border-0">
                  <img
                    src="/FurnApp.png"
                    className="card-img-top"
                    alt="Furniture App"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Furniture App</h5>
                    <p className="card-text">
                      A full-stack furniture e-commerce web application developed using the MERN stack.
                      It features product listings, responsive UI design, user interaction,
                      and email integration using EmailJS. The application focuses on clean
                      architecture, scalability, and smooth user experience.
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="https://astounding-flan-99fc1a.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                        Live Site
                      </a>
                      <a href="https://github.com/Kiruthika241/domain-project" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Calculator */}
              <div className="col-md-4">
                <div className="card bg-dark text-light h-100 shadow-sm border-0">
                  <img
                    src="/React-App.png"
                    className="card-img-top"
                    alt="Real EState Website"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Real EState Website</h5>
                    <p className="card-text">
                      A dynamic real estate platform built with the MERN stack that allows users
                      to explore property listings with a responsive and modern interface.
                      The project includes structured backend APIs, database integration,
                      and email communication functionality.
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="https://benevolent-palmier-18f12c.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                        Live Site
                      </a>
                      <a href="https://github.com/Kiruthika241/Intern-react" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Calculator */}
              <div className="col-md-4">
                <div className="card bg-dark text-light h-100 shadow-sm border-0">
                  <img
                    src="/calc.png"
                    className="card-img-top"
                    alt="Calculator App"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Calculator App</h5>
                    <p className="card-text">
                      A responsive web-based calculator developed using HTML, CSS, Bootstrap,
                      and JavaScript. It performs basic arithmetic operations with a clean UI
                      and efficient logic implementation.
                    </p>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://calc-java-script.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-color btn-sm"
                      >
                        Live Site
                      </a>
                      <a
                        href="https://github.com/Kiruthika241/calc"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              {/* Project 4 */}
              <div className="col-md-4">
                <div className="card bg-dark text-light h-100 shadow-sm border-0">
                  <img
                    src="/MyCinema-Home.png"
                    className="card-img-top"
                    alt="Movie Ticket Booking Website"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Movie Ticket Booking Website</h5>
                    <p className="card-text">
                      A movie discovery and ticket booking web application built using the MERN stack.
                      It allows users to browse movies, explore details, and interact with a
                      responsive and user-friendly interface. Designed with focus on performance
                      and seamless navigation.
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="https://cinezapp.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                        Live Site
                      </a>
                      <a href="https://github.com/Kiruthika241/cineapp" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>



              {/* Project 6 */}
              {/* <div className="col-md-4">
          <div className="card bg-dark text-light h-100 shadow-sm border-0">
            <img
              src="https://via.placeholder.com/400x200"
              className="card-img-top"
              alt="Chat App"
            />
            <div className="card-body">
              <h5 className="card-title">Chat Application</h5>
              <p className="card-text">
                A real-time chat app built with Node.js, Express, and Socket.io.
              </p>
              <div className="d-flex justify-content-between">
                <a href="https://your-live-site.com" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                  Live Site
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div> */}

              {/* Project 7 */}
              {/* <div className="col-md-4">
          <div className="card bg-dark text-light h-100 shadow-sm border-0">
            <img
              src="https://via.placeholder.com/400x200"
              className="card-img-top"
              alt="Blog Platform"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Platform</h5>
              <p className="card-text">
                Blogging platform with authentication, post creation, and comments built with MERN stack.
              </p>
              <div className="d-flex justify-content-between">
                <a href="https://your-live-site.com" target="_blank" rel="noreferrer" className="btn btn-color btn-sm">
                  Live Site
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div> */}

            </div>
          </div>
        </div>
      </section>






      {/* Skills section */}
      <section id="skills" className="container-fluid p-0">
        <div
          className="py-5 text-center text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.918)" }}
        >
          <h2 className="highlight mb-4">My Skills</h2>
          <p className="text-secondary mb-5">
            Here are some of the technologies and tools I work with:
          </p>

          <div className="container">
            <div className="row g-4">
              {/* Row 1 */}
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaHtml5 size={40} color="#E34F26" />
                  <span className="mt-2">HTML</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaCss3Alt size={40} color="#1572B6" />
                  <span className="mt-2">CSS</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaBootstrap size={40} color="#7952B3" />
                  <span className="mt-2">Bootstrap</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaJs size={40} color="#F7DF1E" />
                  <span className="mt-2">JavaScript</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaReact size={40} color="#61DAFB" />
                  <span className="mt-2">React</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaNodeJs size={40} color="#68A063" />
                  <span className="mt-2">Node.js</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <SiExpress size={40} color="#ffffff" />
                  <span className="mt-2">Express</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <SiMongodb size={40} color="#47A248" />
                  <span className="mt-2">MongoDB</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaGitAlt size={40} color="#F05032" />
                  <span className="mt-2">Git/GitHub</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <FaFigma size={40} color="#F24E1E" />
                  <span className="mt-2">Figma</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-dark rounded shadow-sm d-flex flex-column align-items-center">
                  <MdEmail size={40} color="#FFB400" />
                  <span className="mt-2">EmailJS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-fluid pt-0">
        <h2 className="text-center mb-4 highlight">Get in Touch</h2>
        <p className="text-center text-secondary mb-4">
          Feel free to drop me a message! I will get back to you as soon as
          possible.
        </p>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-purple w-100">
                Send Message
              </button>
              {status && (
                <p
                  className={`mt-3 text-center ${status.includes("✅") ? "text-success" : "text-danger"
                    }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
