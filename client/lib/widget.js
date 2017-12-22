import { getCoffeeIndex, getLastDays, getCoffeeYearTotal } from '../redux/reducers/coffee-api';

export default class Widget {
  constructor(config){
    this.config = config;
  }

  style(){
    var _title = (this.config.type == 'daily') ? "Today's Cups" : "Annual Cups"
    return { title: _title,
             type: "TODAY",
             cups: 'cups-today',
             container: 'title-container',
             cupCount: 5}
  }
  fetchData(){
    if(this.config.type == 'daily')
      return getCoffeeIndex()
    else
      return getCoffeeYearTotal()
  }


}