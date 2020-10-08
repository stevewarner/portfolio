import React from "react";

import github from "../../img/github-icon.svg";
import linkedin from "../../img/linkedin-icon.svg";
import contact from "../../img/contact-icon.svg";

import "./styles.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#top" rel="noopener noreferrer">
              <span id="navbar-logo">SW</span>
            </a>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a
                className="navbar-item"
                href="#projects"
                rel="noopener noreferrer"
              >
                projects
              </a>
              <a
                className="navbar-item"
                href="#skills"
                rel="noopener noreferrer"
              >
                skills
              </a>
              <a
                className="navbar-item"
                href="#contact"
                rel="noopener noreferrer"
              >
                contact
              </a>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/stevewarner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/stevenmwarner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="Linkedin" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="#contact"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={contact} alt="Contact" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
