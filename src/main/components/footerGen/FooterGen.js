import React from 'react';

import "./FooterGen.css";

import reactLogo from './images/react';
import reduxLogo from './images/redux.png';
import jsLogo from './images/js.png';
import htmlLogo from './images/HTML.png';
import cssLogo from './images/css.png';
import gitLogo from './images/git.png';
import nodejsLogo from './images/nodejs.png';
import mongodbLogo from './images/mongodb.png';
import expressLogo from './images/express2.svg';
import bootstrapLogo from './images/bootstrap.png';
import jQueryLogo from './images/jQuery.gif';

export default function FooterGen() {
    return (
        <div className="skills-container">
            <div className="bottom-nav">
                <a><img src={reactLogo}/></a>
                <a><img src={reduxLogo}/></a>
                <a><img src={jsLogo}/></a>
                <a><img src={htmlLogo}/></a>
                <a><img src={cssLogo}/></a>
                <a><img src={gitLogo}/></a>
                <a><img src={nodejsLogo}/></a>
                <a><img src={mongodbLogo}/></a>
                <a><img src={expressLogo}/></a>
                <a><img src={bootstrapLogo}/></a>
                <a><img src={jQueryLogo}/></a>
          </div>
        </div>
    )
}
