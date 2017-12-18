import React from 'react';

var absStyle = {
  position: 'absolute',
  top: '10%',
  left: '10%',
  width: '250px',
  height: '100px',
  padding: '8px',
  border: '2px lightgrey solid',
  borderRadius: '15%',
  background: 'rgba(0,0,0,0.7)',
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