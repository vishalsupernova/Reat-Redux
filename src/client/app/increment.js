import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {inc} from './actions'

const mapStateToProps = function (state) {
    return {
        count: state.count,
        inc: state.inc,
        dec: state.dec //-1
    }
}

class Operation extends React.Component {

    onIncrement(e) {
        // console.log(this.props.inc)
        this.props.dispatch(inc(this.props.inc))
    }

    onDecrement(e) {
        this.props.dispatch({
            type: 'DECREMENT',
            payload: this.props.dec
        })
    }

    change(e){
        this.props.dispatch({
            type: 'CHANGE',
            payload: e.target.value //1
        })
    }

    reduce(e){
        this.props.dispatch({
            type: 'REDUCE',
            payload: e.target.value //1
        })
    }

    render() {
            return <div>
            <h3>{this.props.count}</h3>
            <button onClick={this.onIncrement.bind(this)}>INC</button>
            <button onClick={this.onDecrement.bind(this)}>DEC</button>
            <input type="text" onKeyUp={this.change.bind(this)} placeholder="Increment" />
            <input type="text" onKeyUp={this.reduce.bind(this)} placeholder="Decrement" />
        </div>
    }
}

export default connect(mapStateToProps)(Operation)