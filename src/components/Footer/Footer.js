import React from "react";
import "./Footer.css";
import InputKey from "../../components/inputKeywords/inputKey.js";

/*Icons*/
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__main-column">
          <h2>Logo</h2>
          <ul className="footer__social-container">
            <li>
              <a href='#!' >Home</a>
            </li> •
            <li>
              <a href='#!'>Jobs</a>
            </li> •
            <li>
              <a href='#!'>Companies</a>
            </li> •
            <li>
              <a href='#!'>Profile</a>
            </li> •
            <li>
              <a href='#!'>Sign In</a>
            </li > •
            <li>
              <a href='#!'>Sign Up</a>
            </li>
          </ul>
          <p className="copyrighText">Job-finder command © 2020</p>
        </div>
        <div className="footer__foot-column">
          <h3>CONTACT US</h3>
          <ul className="foot-column__contact">
            <li>
              <LocationOnIcon />
              <span> <i> Esim Vortex </i><br /> Yerevan, Armenia  </span>
            </li>
            <li>
              <PhoneIcon />
              <span> +374 99 123456 </span>
            </li>
            <li>
              <MailIcon />
              <span> <a className="telephone-link" href="mailto:jobb.searcher1@gmail.com">jobb.searcher1@gmail.com</a> </span>
            </li>
          </ul>
        </div>
        <div className="footer__foot-column ">
          <h3>About Our website</h3>
          <ul>
            <li>
            <p className="AboutUs-text">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Aliquam maximus leo eu ipsum <br /> elementum malesuada eu sed nisi. Proin <br />aliquam maximus diam, a aliquam tellus congue at. </p>
            </li>
            <ul className='foot-column__social'>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <GitHubIcon />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
