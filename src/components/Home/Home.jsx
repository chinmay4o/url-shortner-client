import React from "react";
// import Logout from "../Logout";
import "./home.css";
import hero from "../images/hero.jpg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-parent">
      <div className="hero">
        <div className="hero-div1">
          <h1>Short Links, Big Results</h1>
          <p>
            A URL shortner built with powerful tools to help you grow your brand
          </p>
          <button
            className="btn btn-primary btn2"
            onClick={() => history.push("/login")}
          >
            Get Started For Free
          </button>
        </div>

        <div className="hero-div2">
          <img src={hero} alt="hero" className="mt-5" />
        </div>
      </div>

      {/* <div className="home-info">
        <div className="info-heading">
          <h2> Link shortner that has your brands back</h2>
        </div>

        <div className="info-cards">
          <div className="info-1">
            <img src={info1} alt="info1" />

            <div>
              <h3>Inspire Trust</h3>
              <p>
                With more clicks comes increased brand recognition and consumer
                trust in your communications—which in turn inspires even more
                engagement with your links. (It’s a wonderful cycle.)
              </p>
            </div>
          </div>
          <div className="info-2">
            <img src={info2} alt="info2" />
            <div>
              <h3>Boost Results</h3>
              <p>
                On top of better deliverability and click-through, rich
                link-level data gives you crucial insight into your link
                engagement so your team can make smarter decisions around its
                content and communications.
              </p>
            </div>
          </div>
          <div className="info-3">
            <img src={info3} alt="info3" />
            <div>
              <h3>Gain Control</h3>
              <p>
                Take credit for your content and learn more about how it’s
                consumed by enabling auto-branding—a feature that ensures your
                brand remains in any link someone shortens pointing to your
                website.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
