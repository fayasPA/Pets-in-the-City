import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faPaw } from '@fortawesome/free-solid-svg-icons'; // You can use 'faCat' for a cat icon
import './LightButton.css'; // Make sure this file contains your CSS styles

const LightButton = () => {
  return (
    <div className="light-button">
      <button className="bt">
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <div className="button-holder">
          <FontAwesomeIcon icon={faPaw} size="2x" />
          <p>Shop</p>
        </div>
      </button>
    </div>
  );
};

export default LightButton;
