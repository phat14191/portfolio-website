import React, { Component } from 'react';
import './project.css';
import SideItem from './SideItem';

import Portfolio from './imgProjects/Portfolio.png';
import NodeJS from './imgProjects/NodeJS.png';
import Vocabulary from './imgProjects/vocabulary.jpg';
import APIproject from './imgProjects/Api.png';
import QApp from './imgProjects/QApp.jpg';
import Blackjack from './imgProjects/blackjacklogo.png';

const projects = [
  {
    itemName: "My Portfolio",
    tags: ["ReactJS", "JavaScript", "React Router", "React Scripts", "React Tap Event", "Material UI", "Typed.js", "Responsive"],
    description: "Built a portfolio react website with all my passion!",
    imageUrl: Portfolio,
    itemUrl: "https://github.com/phat14191/portfolio-website",
    pageUrl: "https://my-portfolio-phat.firebaseapp.com/",
    isLayoutReversed: true
  },
  {
    itemName: "BlackJack Game Card",
    tags: ["JavaScript", "Prototype Object", "Logic Programming", "HTML", "CSS", "jQuery", "Bootstrap"],
    description: "Built a BlackJack Game Card App with logic programming, prototype object base on JavaScript language.",
    imageUrl: Blackjack,
    itemUrl: "https://github.com/phat14191/blackJack-javaScript",
    pageUrl: "https://phat14191.github.io/blackJack-javaScript/",
    isLayoutReversed: false
  },
  {
    itemName: "Quiz App Project",
    tags: ["Object Oriented Programming", "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", ],
    description: "Build a set of Model (read data) objects that represent the questions for the quiz, a Controller (read logic) object that handles the basic actions involved in a quiz and a view (read presentation) objects that handle interacting with the DOM of the webpage. The interactions between Model, View, and Controller Objects.",
    imageUrl: QApp,
    itemUrl: "https://github.com/phat14191/QuizzApp",
    pageUrl: "https://phat14191.github.io/QuizzApp/",
    isLayoutReversed: true
  },
  {
    itemName: "Learn Language",
    tags: ["ReactJS", "Redux", "Route", "JavaScript", "JSON Web Token", "API", "JWT", "NodeJs", "Token Auth in Express", "MongoDB noSQL", "Pair Project"],
    description: "Built a app in React that allows users to sign in, login, logout, view their profiles, and add/remove vocabulary to their list. Store out user info in state. Store our authorization token in Local Storage so that even if we refresh the page, we don't lose it with database MongoDB.",
    imageUrl: Vocabulary,
    pageUrl: "https://github.com/vschool-september-2017/learn-language",
    itemUrl: "https://github.com/vschool-september-2017/learn-language",
    isLayoutReversed: false
  },
  {
    itemName: "Call an API Activity!",
    tags: ["JavaScript", "JSON", "AJAX", "Fetch API", "Callbacks"],
    description: "Understanding JSON, AJAX, and calling an API. Type Github user name, click the button, it will load your profile picture, information on Github and showing some followers.",
    imageUrl: APIproject,
    itemUrl: "https://github.com/phat14191/Call-an-API-Activity",
    pageUrl: "https://phat14191.github.io/Call-an-API-Activity/",
    isLayoutReversed: true
  },
  {
    itemName: "Penguins Vs Communists Project",
    tags: ["NodeJS", "JavaScript callbacks", "Logic programming"],
    description: "Understanding functional programming concepts, objects/associative arrays, constructors by using NodeJS.",
    imageUrl: NodeJS,
    pageUrl: "https://s3-us-west-1.amazonaws.com/phat14191/ComunistVSPenguins.png",
    itemUrl: "https://github.com/phat14191/Penguins-Vs-Communists-",
    isLayoutReversed: false
  }
];

export default class Project extends Component {

    renderProjectItems() {
        return projects.map((project) => {
            return (
            <div>
                 <SideItem key={project.itemName} {...project} />
                 <hr className="hr-divider"/>
            </div>
            )
        })
    }

    render() {
        return (
              <div className="projects-section">
                {this.renderProjectItems()}
              </div>
        );
    }
}
