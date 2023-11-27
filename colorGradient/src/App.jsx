
import React, { useState } from 'react';
import ColorPicker from './Components/Colorpicker';
import Preview from './Components/Preview'

const GradientCreator = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#00ff00');
  const [angle, setAngle] = useState(0);
  const [gradient, setGradient] = useState('');

  const handleColor1Change = (e) => {
    setColor1(e.target.value);
    updateGradient();
  };

  const handleColor2Change = (e) => {
    setColor2(e.target.value);
    updateGradient();
  };

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
    updateGradient();
  };

  const updateGradient = () => {
    const newGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    setGradient(newGradient);
  };

  return (
    <>
    <h1 className='title'>The Gradient-inator</h1>
    <hr></hr>
    <div className='appContainer'>
      
            <Preview gradient={gradient} angle={angle} color1={color1} color2={color2} />

      <div className='picker'>
      <ColorPicker label="Color 1" color={color1} onChange={handleColor1Change} />
      <ColorPicker label="Color 2" color={color2} onChange={handleColor2Change} />
      <label>
        Angle:
        <input type="number" value={angle} onChange={handleAngleChange} />
      </label>
      </div>
    </div>
    </>
  );
};

export default GradientCreator;
