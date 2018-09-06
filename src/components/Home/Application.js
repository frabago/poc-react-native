import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../Login/Login';
import Roles from '../Login/Roles';

class Application extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <Roles />;
		} else {
			return <Login />;
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.authorisation.isLoggedIn
	};
}

export default connect(mapStateToProps)(Application);
