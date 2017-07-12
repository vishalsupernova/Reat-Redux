import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Userlist extends React.Component {

    createListItems (){
        return this.props.user.map((user) => <li key = {user.id}>{user.name}</li>)
    }

    render() {
        return <div>
            <ul>
               {this.createListItems()}
            </ul>
        </div>
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect (mapStateToProps)(Userlist);