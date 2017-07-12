import React from 'React';
import ReactDOM from 'react-dom';

class Ninja extends React.Component {

  componentWillMount() {
    setTimeout(this.state = {
      contacts: [{
        id: 1,
        name: 'Tommy',
        phone: '111111'
      },

      {
        id: 2,
        name: 'Jim',
        phone: '222222'
      },

      {
        id: 3,
        name: 'Don',
        phone: '333333'
      },

      {
        id: 4,
        name: 'Scott',
        phone: '444444'
      },

      {
        id: 5,
        name: 'Rambo',
        phone: '55555'
      }]}, 3000);
      setTimeout(()=>{console.log("componentWillMount")}, 3000);
}

// constructor(){
//   super();
//   this.state = {
//       contacts: [{
//         id: 1,
//         name: 'Tommy',
//         phone: '111111'
//       },

//       {
//         id: 2,
//         name: 'Jim',
//         phone: '222222'
//       },

//       {
//         id: 3,
//         name: 'Don',
//         phone: '333333'
//       },

//       {
//         id: 4,
//         name: 'Scott',
//         phone: '444444'
//       },

//       {
//         id: 5,
//         name: 'Rambo',
//         phone: '55555'
//       }]}
//       console.log("Hi")
// }

render() {
  console.log(this.state.contacts)

  let newcontacts = this.state.contacts;
  newcontacts = newcontacts.map(contact => <ul><li key={contact.id}>{contact.name}</li></ul>);
  // console.log(this.state.newcontacts)

  return <div>
    <h2>Names are below</h2>
    {newcontacts}
  </div>

}
}

export default Ninja 