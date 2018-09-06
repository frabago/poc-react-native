import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/authorisation';

class Header extends Component {
	userLogout(e) {
		this.props.onLogout();
		e.preventDefault();
	}

	render() {
		return (
			<View>
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		username: state.authorisation.username
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => { dispatch(logout()); }
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
		flexDirection: 'row',
		width: 150,
	},
	sectionIcon: {
		padding: 10,
		color: '#d6d7da',
	},
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
