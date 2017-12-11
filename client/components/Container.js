import React from 'react';

var plainStyle = {
  verticalAlign: 'top',
  display: 'inline-block',
  width: '30%',
  padding: '15px',
  paddingBottom: '0',
  height: '100%'

}
var chartStyle = Object.assign({}, plainStyle);
chartStyle.width = '70%';

var divStyle;
const Container = (props) => {
  if(props.chart)
    divStyle = chartStyle
  else
    divStyle = plainStyle

  return (
    <div style= {divStyle}>
      {props.children}
    </div>
  );
};

export default Container;