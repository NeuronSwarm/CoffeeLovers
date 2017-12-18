import React from 'react';

var absStyle = {
  position: 'absolute',
  top: '10%',
  left: '10%',
  width: '100px',
  height: '100px'

}

const Absolute = (props) => {
  return (
    <div style= {absStyle}>
      {props.children}
    </div>
  );
};

export default Absolute;