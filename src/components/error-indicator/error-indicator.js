import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-text">
      <h3 className='header'>
        Error!
      </h3>
      <p className='text'>Something went wrong...</p>
      <p className='text'>But we are fixing this!</p>
    </div>
  );
};

export default ErrorIndicator;