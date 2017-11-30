import React, { Component } from 'react';
import './project.css';
import SideItem from './SideItem';

import Portfolio from './imgProjects/Portfolio.png';
import NodeJS from './imgProjects/NodeJS.png';
import Vocabulary from './imgProjects/tree-volcabulary.jpg';
import APIproject from './imgProjects/Api.png';

const projects = [
  {
    itemName: "My Portfolio",
    tags: ["ReactJS", "JavaScript", "React Router", "React Scripts", "React Tap Event", "Material UI", "Typed.js", "Responsive"],
    description: "Built a portfolio react website with all my passion!",
    imageUrl: Portfolio,
    itemUrl: "https://github.com/vschool-september-2017/learn-language",
    isLayoutReversed: false
  },
  {
    itemName: "Learn Language",
    tags: ["ReactJS", "Redux", "Route", "JavaScript", "JSON Web Token", "API", "JWT", "NodeJs", "Token Auth in Express", "MongoDB noSQL", "Pair Project"],
    description: "Built a app in React that allows users to sign in, login, logout, view their profiles, and add/remove vocabulary to their list. Store out user info in state. Store our authorization token in Local Storage so that even if we refresh the page, we don't lose it with database MongoDB.",
    imageUrl: Vocabulary,
    itemUrl: "https://github.com/vschool-september-2017/learn-language",
    isLayoutReversed: true
  },
  {
    itemName: "Call an API Activity!",
    tags: ["JavaScript", "JSON", "AJAX", "Fetch API", "Callbacks"],
    description: "Understanding JSON, AJAX, and calling an API. Type Github user name, click the button, it will load your profile picture, information on Github and showing some followers.",
    imageUrl: APIproject,
    itemUrl: "https://github.com/phat14191/Call-an-API-Activity",
    isLayoutReversed: false
  },
  {
    itemName: "Penguins Vs Communists Project",
    tags: ["NodeJS", "JavaScript callbacks", "Logic programming"],
    description: "Understanding functional programming concepts, objects/associative arrays, constructors by using NodeJS.",
    imageUrl: NodeJS,
    itemUrl: "https://github.com/phat14191/Penguins-Vs-Communists-",
    isLayoutReversed: true
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
