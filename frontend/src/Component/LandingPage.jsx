import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showMessage: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gninq5q",
        "template_nybpw7h",
        e.target,
        "GWQFdfsMr_Tjdvjkn"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            message: "Your message has been sent successfully!",
            showMessage: true,
          });
        },
        (error) => {
          console.error(error.text);
          this.setState({
            message: `Error: ${JSON.stringify(error)}`,
            showMessage: true,
          });
        }
      );

    e.target.reset();
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 3000);
  };

  render() {
    const {showMessage,message} = this.state;
    return (
      <div style={{ fontFamily: "Poppins, sans-serif" }}>
        {showMessage && (
          <div
            className="alert alert-success fixed-top text-center"
            style={{
              zIndex: 1000,
              top: "10px",
              width: "90%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {message}
          </div>
        )}

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

            .typing {
              display: inline-block;
              font-size: 2rem;
              font-weight: 600;
              white-space: nowrap;
              overflow: hidden;
              border-right: 3px solid black;
              width: 0;
              animation: typing 4s steps(40) 1s 1 normal both, blink 0.75s step-end 4s 1 normal forwards;
            }

            @keyframes typing {
              0% {
                width: 0;
              }
              100% {
                width: 100%;
              }
            }

            @keyframes blink {
              50% {
                border-color: transparent;
              }
              100% {
                border-color: transparent;
              }
            }

            @media (max-width: 768px) {
              .typing {
                font-size: 1.5rem;
              }
            }
          `}
        </style>

        {/* Header */}
        <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white flex-wrap">
          <div className="logo">
            <img
              src="logo.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
            />
          </div>
            <NavLink className="btn btn-success mt-2 mt-md-0" to="/login">
              Login
            </NavLink>
        </header>

        {/* Feature Section */}
        <section className="text-center p-4 bg-light">
          <h1 className="mb-3 text-primary">
            <span className="typing">
              Welcome to the Insurance Agent Management System
            </span>
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Our platform simplifies the management of insurance agents. Easily
            track agents, monitor commissions, and assign them to providers, all
            in one place. Streamline your administrative tasks and enhance agent
            performance with ease.
          </p>
          <img
            src="landing-image.png"
            alt="Insurance Platform"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "50%", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </section>

        {/* Key Features */}
        <section className="p-4">
          <h2 className="text-center mb-4 text-primary">Key Features</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-3">
                <div className="d-flex flex-column justify-content-between bg-light p-4 rounded shadow-sm h-100">
                  <img
                    src="agent-reg.png"
                    alt="Feature 1"
                    className="img-fluid mb-2"
                  />
                  <h3>Agent Registration</h3>
                  <p>
                    Seamlessly register new agents and manage their personal and
                    professional details.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-3">
                <div className="d-flex flex-column justify-content-between bg-light p-4 rounded shadow-sm h-100">
                  <img
                    src="provider-assign.png"
                    alt="Feature 2"
                    className="img-fluid mb-2"
                  />
                  <h3>Provider Assignment</h3>
                  <p>
                    Assign agents to multiple insurance providers and track
                    their activities.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-3">
                <div className="d-flex flex-column justify-content-between bg-light p-4 rounded shadow-sm h-100">
                  <img
                    src="agent-mainte.png"
                    alt="Feature 3"
                    className="img-fluid mb-2"
                  />
                  <h3>Easy Agent Tracking</h3>
                  <p>
                    Quickly track agent performance, monitor their progress, and
                    assess their efficiency in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-dark text-white py-5">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-3">
                <blockquote className="blockquote">
                  <p>
                    "This system makes managing our agents so much easier. It's
                    simple to use and saves us a lot of time!"
                  </p>
                  <footer className="blockquote-footer text-white">
                    John Doe,{" "}
                    <cite title="Source Title">Insurance Provider</cite>
                  </footer>
                </blockquote>
              </div>
              <div className="col-md-4 col-sm-6 mb-3">
                <blockquote className="blockquote">
                  <p>
                    "Tracking agent performance and managing commissions is much
                    faster now. I highly recommend it!"
                  </p>
                  <footer className="blockquote-footer text-white">
                    Jane Smith, <cite title="Source Title">Agency Owner</cite>
                  </footer>
                </blockquote>
              </div>
              <div className="col-md-4 col-sm-6 mb-3">
                <blockquote className="blockquote">
                  <p>
                    "The platform looks great and is easy to use, helping us
                    stay more organized."
                  </p>
                  <footer className="blockquote-footer text-white">
                    Mary Johnson, <cite title="Source Title">HR Manager</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center p-5 bg-light">
          <h2 className="text-center mb-4 text-primary display-5">
            Contact Us
          </h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            We’d love to hear from you! Fill out the form below, and we’ll get
            back to you as soon as possible.
          </p>
          <div className="container">
            <div
              className="card shadow-lg mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <div className="card-body p-4 p-md-5">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="from_name"
                          required
                          id="floatingName"
                        />
                        <label htmlFor="floatingName">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="from_email"
                          required
                          id="floatingEmail"
                        />
                        <label htmlFor="floatingEmail">Your Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      required
                      id="floatingMessage"
                      style={{ height: "120px" }}
                    ></textarea>
                    <label htmlFor="floatingMessage">Your Message</label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
