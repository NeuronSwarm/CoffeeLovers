import React from 'react';

// coffeeConfig is a global 
var _alignment = (coffeeConfig.position == 'right') ? '70%' : '10%';
var _background = coffeeConfig.background || 'rgba(0,0,0,0.7)';
var color = {} ;// Tough one to swap coffee icon images

var absStyle = {
  position: 'absolute',
  top: '10%',
  left: _alignment,
  width: '250px',
  height: '100px',
  padding: '8px',
  border: '2px lightgrey solid',
  background: _background,
  margin: '10px',
  zIndex: '1000'

}

const Absolute = (props) => {
  return (
    <div style= {absStyle}>
      {props.children}
    </div>
  );
};

export default Absolute;