/* eslint-disable react/prop-types */
import React from 'react';

const SocialButton = ({ provider, icon, onClick }) => {
  return (
    <button className={`social-button ${provider}`} onClick={onClick}>
      <span className="social-icon">{icon}</span>
    </button>
  );
};

export default SocialButton;