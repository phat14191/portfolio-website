import React from "react";
import "./footer.css"
import linkedinLogo from './images/linkedin.png';
import mailLogo from './images/mail.png';
import resumeLogo from './images/resume.png';
import githubLogo from './images/github.png';

function Footer() {
  return (
    <div>
      <div className="footer">
          <a href="https://www.linkedin.com/in/phatnguyen141/"><img src={linkedinLogo}/></a>
          <a href="mailto:pvnguyen141@gmail.com"><img src={mailLogo}/></a>
          <a href="https://github.com/phat14191"><img src={resumeLogo}/></a>
          <a href="https://github.com/phat14191"><img src={githubLogo}/></a>

      </div>
    </div>
  )
}

export default Footer;
