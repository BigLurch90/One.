import "./footer.css";
import oneLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="one__footer section__padding">
      <div className="one__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others.
        </h2>
      </div>
      <div className="one__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="one__footer-links">
        <div className="one__footer-links__logo">
          <img src={oneLogo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>

        <div className="one__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="one__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="one__footer-links__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="one__footer-copyright">
        <p>@2024 One. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
