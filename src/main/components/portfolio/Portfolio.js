import React from "react";
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import FooterGen from '../footerGen/FooterGen';

import './portfolio.css';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <h2 className="headline">Experience & Education</h2>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Certificate of V-School Bootcamp" subtitle="Full-Stack JavaScript Web Development"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Since	September	2017. Programming, Problem Solving, Troubleshooting.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>ReactJS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Redux</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>JavaScript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>NodeJS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>CSS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>jQuery</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Mongodb</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Express</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Unit Testing Mocha</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Udemy Online Certificate " subtitle="ReactJS, redux and JavaScript"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Since June 2017. Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout and learn detailted the Essentials of JavaScript!
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>React & Redux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>JavaScript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>AJAX, JSON, ES6+</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Debugging React Apps</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Webpack</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Css modules</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Treehouse, Codecademy, Code School" subtitle="Online coding courses in JavaScript"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Since     March	2017. Learn Web Design and Coding.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>JavaScript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SASS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Build and deploy website</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <FooterGen />
            </div>
        );
    }
}

export default Portfolio;
