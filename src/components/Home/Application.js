import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../Login/Login';
import Secured from '../Login/Secured';

class Application extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <Secured />;
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
