import React from 'react';
import ReactDOM from 'react-dom'

class Contact extends React.Component{
  render(){
    return<div><h1>{this.props.hello}</h1></div>
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {name: ''}
  }

  update(e){
      this.setState({name: e.target.value})
  }

  render(){
    console.log(this.update);
    return<div>
      <Contact hello = {"This is a prop"}/>
      <h2>Hello {this.state.name}</h2>
      <input type = "text" onChange = {this.update.bind(this)}/>
    </div>
  }
}

export default App
