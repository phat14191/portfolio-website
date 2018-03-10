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
    description: "Portfolio website featuring the work I’m passionate about!",
    imageUrl: Portfolio,
    itemUrl: "https://github.com/phat14191/portfolio-website",
    pageUrl: "https://my-portfolio-phat.firebaseapp.com/",
    isLayoutReversed: true
  },
  {
    itemName: "Black Jack Card Game",
    tags: ["JavaScript", "Prototype", "Object", "Logic Programming", "HTML", "CSS", "jQuery", "Bootstrap"],
    description: "JavaScript Black Jack Card Game Application with logic programming, prototypes, and objects.",
    imageUrl: Blackjack,
    itemUrl: "https://github.com/phat14191/blackJack-javaScript",
    pageUrl: "https://phat14191.github.io/blackJack-javaScript/",
    isLayoutReversed: false
  },
  {
    itemName: "Quiz App",
    tags: ["Object Oriented Programming", "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", ],
    description: "Built a set of Model (read data) objects that represent quiz questions, a Controller (read logic) object that handles basic actions involved in a quiz, and View (read presentation) objects that handle interacting with the DOM of the webpage. The interactions are between Model, View, and Controller Objects.",
    imageUrl: QApp,
    itemUrl: "https://github.com/phat14191/QuizzApp",
    pageUrl: "https://phat14191.github.io/QuizzApp/",
    isLayoutReversed: true
  },
  {
    itemName: "Learn Language",
    tags: ["ReactJS", "Redux", "Route", "JavaScript", "JSON Web Token", "API", "JWT", "NodeJs", "Token Auth in Express", "MongoDB noSQL", "Pair Programming Project"],
    description: "Vocabulary application where users can sign up, login, logout, view their profiles, and add/remove vocabulary words to lists. User stored in info in state and authorization token stored in Local Storage so that even if we refresh the page, we don't lose it with database MongoDB.",
    imageUrl: Vocabulary,
    pageUrl: "https://phat14191.github.io/",
    itemUrl: "https://github.com/phat14191/learn-language-reactJS",
    isLayoutReversed: false
  },
  {
    itemName: "Call an API Activity",
    tags: ["JavaScript", "JSON", "AJAX", "Fetch API", "Callbacks"],
    description: "Activity for better understanding JSON, AJAX, and calling an API. Type a Github user name in the text box and click the button to watch it load a profile picture and additional Github information, followers, etc.",
    imageUrl: APIproject,
    itemUrl: "https://github.com/phat14191/Call-an-API-Activity",
    pageUrl: "https://phat14191.github.io/Call-an-API-Activity/",
    isLayoutReversed: true
  },
  {
    itemName: "Penguins Vs Communists Project",
    tags: ["NodeJS", "JavaScript callbacks", "Logic programming"],
    description: "Tool for understanding functional programming concepts, objects/associative arrays and constructors, by using NodeJS.",
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

// add some stuff//
