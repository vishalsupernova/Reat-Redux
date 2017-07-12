import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './allreducers.js';
import Userlist from './userlist.js';

class Red extends React.Component{
    render() {
        return <div>
            <h2>User List</h2>
            <Userlist />
            
        </div>
    }
}

export default Red 