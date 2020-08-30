import "./Contact.css";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import SocialMedia from '../SocialMedia/SocialMedia';
import { contactInfo } from "../../portfolio";
import 'materialize-css/dist/css/materialize.min.css';

const Contact = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                    "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                "contact-text-div"
              }
            >
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_IG1Hp6.json"  background="transparent"  speed="1"  style={{ width: '500px', height: '500px' }}  loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
