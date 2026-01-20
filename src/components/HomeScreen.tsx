import { AiFillAlipayCircle, AiOutlineMail } from "react-icons/ai";
import "../styles/HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <header className="header">
        <div className="header-inner">
          <section className="header-logo">
            <AiFillAlipayCircle className="logo-icon" />

            <div className="header-namelogo">
              <p>Curve</p>
              <p>Network inc</p>
            </div>
          </section>
          <section className="header-menu">
            <div className="header-menu-item">Home</div>
            <div className="header-menu-item">About</div>
            <div className="header-menu-item">Services</div>
            <div className="header-menu-item">Contact</div>
          </section>
          <section className="header-button">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </section>
        </div>
      </header>
      <main>
        <section className="main-content">
          <div className="content-title">
            <h2 className="content-title-text">Now Secure Your Money</h2>
            <h2 className="content-subtitle">With Our Ecperts</h2>
            <h5 className="content-description">
              Grow your investment faster without any risk and hidden fees.
            </h5>
          </div>
          <div className="input-wrapper">
            <span className="input-icon">
              <AiOutlineMail />
            </span>
            <input
              type="email"
              className="form-input"
              placeholder="enter Your Email Address"
            ></input>
            <button className="btn-getstarted">Get Started</button>
          </div>
        </section>
      </main>
    </div>
  );
}
