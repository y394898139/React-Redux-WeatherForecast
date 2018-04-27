import {FETCH_WEATHER} from '../actions/index';

export default function(state= [],action){
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]);
      //ES6
      if(action.payload.data){
      return [ action.payload.data,...state]; //[city,city,city] NOT [city,[city,city]]
      }
      break;
    default:

  }
  return state;
}
