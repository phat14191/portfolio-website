import React from "react";
import Paper from 'material-ui/Paper';
import "./skills.css";

class Skills extends React.Component {
    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: '#263238'
        };
        return (
            <div className="main-skills">
                <div className="skills-container">
                    <div className="bottom-nav">
                    <a><img src="https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default"/></a>
                    <a><img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"/></a>
                    <a><img src="https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720"/></a>
                    <a><img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></a>
                    <a><img src="http://www.blackbirdsolutions.com.au/sites/default/files/styles/medium/public/blog/css3-logo.png?itok=r8kt8WZA"/></a>
                    <a><img src="https://townhack.github.io/git-101/img/git-logo.png"/></a>
                    <a><img src="https://www.techuz.com/wp-content/themes/techuz/images/nodejs-icon.png"/></a>
                    <a><img src="https://broadwayinfosys.com/uploads/courses/mongodb.png"/></a>
                    <a><img src="https://camo.githubusercontent.com/b0c9dc0e2f5bcd190403159a24d4a541e496e30a/68747470733a2f2f636f6c69676f2e696f2f696d616765732f657870726573732e737667"/></a>
                    <a><img src="http://getbootstrap.com/assets/img/bootstrap-stack.png"/></a>
                    <a><img src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif"/></a>
                  </div>
                  <h2>Programming Skills</h2>
                </div>
                <div className="programming">
                    <div className="programming-console">
                        <Paper zDepth={3} style={style}>
                            <div className="console-header">
                                <div className="console-buttons">
                                    <div className="console-button btn-1"></div>
                                    <div className="console-button btn-2"></div>
                                    <div className="console-button btn-3"></div>
                                </div>
                            </div>
                            <div className="console-content">
                                <ul>
                                    <li>&lt;<span className="html-1">html</span>&gt;</li>
                                    <li>
                                      <ul className="no-top-padding">
                                        <li>&lt;<span className="html-1">body</span>&gt;</li>
                                        <li>
                                          <ul className="no-top-padding">
                                            <li>&lt;<span className="html-1">ul</span>&gt;</li>
                                            <ul className="no-top-padding">
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">ReactJS</span>
                                                &lt;/<span className="html-1">li</span>&gt;</li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">Redux</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">JavaScript</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">NodeJS</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">Mongodb</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">HTML</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">CSS</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">jQuery</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">Git/Github</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">Bootstrap</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">Agile</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                              <li>
                                                &lt;<span className="html-1">li</span>&gt;
                                                <span className="html-2">CRUD functionaly</span>
                                                &lt;/<span className="html-1">li</span>&gt;
                                              </li>
                                            </ul>
                                            <li>&lt;/<span className="html-1">ul</span>&gt;</li>
                                          </ul>
                                        </li>
                                        <li>&lt;/<span className="html-1">body</span>&gt;</li>
                                      </ul>
                                    </li>
                                    <li>&lt;/<span className="html-1">html</span>&gt;</li>
                                </ul>
                            </div>
                        </Paper>
                    </div>
                </div>

            </div>

        );
    }
}
export default Skills;
