import React from "react";
import Footer from "../footer/Footer";
import "./about.css"
import TypedMessage from './TypedMessage';

const typedMessageStrings = [
  'I\'m a Full Stack Web Developer',
  'with a passion for creating things and solving problems.',
  'I build front and back end React and JavaScript applications.',
  'I’m always trying to learn something new.',
];

class About extends React.Component {

    render() {
        return (
            <div className='intro'>
                <div className="gif">
                    <img src="https://i.imgur.com/FTlPKVt.gif" />
                </div>
                <div className="bio-conent">
                  <div className="bio-content-left">
                    <img />
                  </div>
                  <div className="bio-content-right">
                    <div className="bio-paragraph">
                        <p>Hello! I'm Phat Nguyen.
                        {this.renderTypedMessage()}</p>
                    </div>
                  </div>
                </div>
                <Footer />
            </div>
        )
    }

    renderTypedMessage() {
        return (
            <TypedMessage
             strings={typedMessageStrings}
            />
        );
    }
}
export default About;
