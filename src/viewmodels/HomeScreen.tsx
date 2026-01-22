import { AiOutlineMail } from "react-icons/ai";
import "../styles/HomeScreen.css";
import InfoCard from "../components/InfoCard/InfoCard";
import Button from "../components/button/Button";
import NavLink from "../components/NavLink/Navlink";
import BrandLogo from "../components/BrandLogo/BrandLogo";

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <header className="header">
        <div className="header-inner">
          <section className="header-logo">
            <BrandLogo />
          </section>
          <section className="header-menu">
            <NavLink label="Home" active={true} />
            <NavLink label="About" />
            <NavLink label="Services" />
            <NavLink label="Contact" />
          </section>

          <section className="header-button">
            <Button
              label="Sign Up"
              onClick={() => {}}
              className="button button-secondary"
            />
            <Button
              label="Log in"
              onClick={() => {}}
              className="button button-primary"
            />
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
            <Button
              label="Get Started"
              onClick={() => {}}
              className="btn-getstarted"
            />
          </div>

          <section className="content-body">
            <div className="body-title">
              <h2> Most poupular</h2>
            </div>
            <div className="body-cards">
              <InfoCard
                title="U Cap"
                price="$10.00"
                description="Interest Paid"
                returnValue="15.0%"
              />
              <InfoCard
                title="X Cap"
                price="$50.00"
                description="Interest Paid"
                returnValue="20.0%"
              />
              <InfoCard
                title="Pro Cap"
                price="$100.00"
                description="Interest Paid"
                returnValue="25.0%"
              />
              <InfoCard
                title="Mega Cap"
                price="$500.00"
                description="Interest Paid"
                returnValue="30.0%"
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
