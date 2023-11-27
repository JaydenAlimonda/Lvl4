
import React from 'react';

const Preview = ({ gradient, angle, color1, color2 }) => {
  const previewStyle = {
    background: gradient,
  };
  const Format1 = `-moz-background: linear-gradient(${angle}deg, ${color1} , ${color2})`
  const Format2 = `-webkit: linear-gradient(${angle}deg, ${color1} , ${color2})`
  return (
    <div className='previewContainer'>
      <div className='preview' style={previewStyle}></div>
      <p>Gradient CSS: {gradient}</p>
      <p>{Format1}</p>
      <p>{Format2}</p>
    </div>
  );
};

export default Preview;
