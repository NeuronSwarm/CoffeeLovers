import React from 'react';

const Today = (props) => {
  var coffeeCount = 0
  var coffeeTime = props.data.time
  var bigCentral = { fontSize: '36px',
                       position: 'absolute',
                       top: '42%',
                       left: '22%' }
  console.log(props.coffee)
  if(props.coffee){
    coffeeCount = props.coffee.coffeeCups
    if(props.coffee.updatedAt == '--')
      coffeeTime = '--'
    else if(props.coffee.updatedAt){
      var tmp = new Date(props.coffee.updatedAt).toLocaleTimeString();
      coffeeTime = tmp.substring(0,5) + tmp.substring(8,11);
    }
  }
  if(props.type == "TODAY"){
    return (
      <div style={bigCentral} className= {props.data.cups}> { coffeeCount } </div>
    );
  } else if(props.type == "LAST_CUP"){
    return (
      <div className= {props.data.cups}> { coffeeTime} </div>
    );
  }
};

export default Today;