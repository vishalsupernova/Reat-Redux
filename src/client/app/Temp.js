import React from 'react';
import ReactDOM from 'react-dom'

function Temp(props){
  if(props.cel > 100){
    return<p>Water will Boil</p>;
  }
      return<p>Water will not Boil</p>;
}

class Calculate extends React.Component{

  constructor(){
    super();
    this.state = {value: ''};
  }

  update(e){
    this.setState({value: e.target.value})
     console.log(value);
  }

  render(){
    return<div>
    <input type = "text"  onChange = {this.update.bind(this)} />
    <Temp cel = {this.state.value}/>
    </div>
  }
}

export default Calculate
