import React from "react";
import Paper from 'material-ui/Paper';
import FooterGen from '../footerGen/FooterGen';

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
                    <FooterGen />
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
