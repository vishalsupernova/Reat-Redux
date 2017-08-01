import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {inc, dec, change, reduce} from './actions'

const mapStateToProps = function (state) {
    return {
        count: state.count,
        inc: state.inc,
        dec: state.dec //-1
    }
}

class Operation extends React.Component {

    onIncrement(e) {
        console.log(this.props.inc)
        this.props.dispatch(inc(this.props.inc))
    }

    onDecrement(e){
        console.log(this.props.dec)
        this.props.dispatch(dec(this.props.dec))
    }

    change(e){
        this.props.dispatch(change(e.target.value))
    }

    reduce(e){
        this.props.dispatch(reduce(e.target.value))
    }

    render() {
            return <span>
            <h3>{this.props.count}</h3>
            <button onClick={this.onIncrement.bind(this)}>INC</button> 
            <button onClick={this.onDecrement.bind(this)}>DEC</button>
            <input type="text" onKeyUp={this.change.bind(this)} placeholder="Increment" /> 
            <input type="text" onKeyUp={this.reduce.bind(this)} placeholder="Decrement" />
        </span>
    }
}

export default connect(mapStateToProps)(Operation)