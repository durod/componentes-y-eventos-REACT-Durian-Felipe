/* eslint-disable react/prop-types */
import React from 'react';

const Alert = ({ type, message }) => {
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;