import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagBubble from './TagBubble';
import './sideItem.css';

export default class SideBySideItem extends Component {
  render() {
    return (
      <div className="sbs-item" style={this.getLayoutDirection()}>
        <a className="sbs-image container" href={this.props.itemUrl}>
          <img src={this.props.imageUrl} alt={this.props.itemName} />
        <div class="middle">
            <div class="text">Github</div>
        </div>
        </a>
        <div className="sbs-text">
          <h2 className="sbs-title"><a href={this.props.pageUrl}>{this.props.itemName} </a></h2>
          {this.renderTags()}
          <h4 className="sbs-subheader">{this.props.subheader}</h4>
          <div className="sbs-description">{this.props.description}</div>
          <ul className="sbs-point-form-description">{this.renderPointFormDescription()}</ul>
        </div>
      </div>
    );
  }

  getLayoutDirection() {
    return this.props.isLayoutReversed ? { direction: "rtl" } : { direction: "initial" };
  }

  renderTags() {
    if (this.props.tags) {
      return this.props.tags.map((tag) => {
        return (
          <TagBubble key={tag} itemName={tag} />
        );
      });
    }
  }

  renderPointFormDescription() {
    if (this.props.pointFormDescription) {
      return this.props.pointFormDescription.map((point) => {
        return (
          <li key={point}>{point}</li>
        );
      });
    }
  }
}

SideBySideItem.propTypes = {
  itemName: PropTypes.string,
  tags: PropTypes.array,
  subheader: PropTypes.string,
  description: PropTypes.string,
  pointFormDescription: PropTypes.array,
  imageUrl: PropTypes.string,
  itemUrl: PropTypes.string,
  isLayoutReversed: PropTypes.bool,
  pageUrl: PropTypes.string
};
