import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.css";

function Portfolio() {
  return (
    <div className="component">
      <div className="ideas-card-wrapper">
        <div className="idea-card">
          <h3>Mudroots Pottery Studio</h3>
          <p>
            We designed a responsive minimal website and branding kit for a
            pottery studio.
          </p>
        </div>

        <div className="idea-card">
          <h3>Mudroots Pottery Studio</h3>
          <p>
            We designed a responsive minimal website and branding kit for a
            pottery studio.
          </p>
        </div>
      </div>

      <Link to="/">
        <button className="portfoliobtn black-bg-button">
          View Our Portfolio
        </button>
      </Link>
    </div>
  );
}

export default Portfolio;
