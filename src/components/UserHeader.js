import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions';

class UserHeader extends React.Component{

 
    render () {
        console.log("6");
        const user = this.props.userName
        if (!user){
            return null;
        }

    return <div className="header">{user.name}</div>
    }
}

const  mapStateToProps = (state, ownProps) => {
    console.log("5");
    return {
        userName : state.users.find(user => user.id ===ownProps.userId)
    }
}
 
export default connect(mapStateToProps, {fetchUser})( UserHeader);