import {combineReducers} from 'redux';
import UserReducer from './reducersusers.js'; //import ./reducersusers and storing it in Userreducer

const allReducers = combineReducers({ //Takes each reducers as an object
    user: UserReducer //All the users in reduceusers are stored in user is combined in one JS obj and will be passed to Store
}) 

export default allReducers