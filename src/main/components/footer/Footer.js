import React from "react";
import "./footer.css"
import linkedinLogo from './images/linkedin.png';
import mailLogo from './images/mail.png';
import resumeLogo from './images/resume.png';
import githubLogo from './images/github.png';

const Linkedin = 'https://www.linkedin.com/in/phatnguyen141/';
const MailTo = 'mailto:pvnguyen141@gmail.com';
const Resume = 'https://s3-us-west-1.amazonaws.com/phatnguyen/PhatNguyen.pdf';
const Github = 'https://github.com/phat14191';

function Footer() {
  return (
    <div>
      <div className="footer">
          <a href={Linkedin}><img src={linkedinLogo}/></a>
          <a href={MailTo}><img src={mailLogo}/></a>
          <a href={Resume}><img src={resumeLogo}/></a>
          <a href={Github}><img src={githubLogo}/></a>
      </div>
    </div>
  )
}

export default Footer;
