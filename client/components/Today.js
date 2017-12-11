import React from 'react';

const Today = (props) => {
  if(props.type == "TODAY"){
    return (
      <div className= {props.data.cups}> { props.data.cupCount} </div>
    );
  } else if(props.type == "LAST_CUP"){
    return (
      <div className= {props.data.cups}> { props.data.time} </div>
    );
  }
};

export default Today;