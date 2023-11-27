import React, { useState } from 'react';

const ColorPicker = ({ label, color, onChange }) => {
  return (
    <label>
      {label}:
      <input type="color" value={color} onChange={onChange} />
    </label>
  );
};

export default ColorPicker;
