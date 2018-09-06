import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {recolector, pesador, enfardador} from '../../actions/role';
import Button from '../common/Button';

class Roles extends Component {
	userRole(e) {
		this.props.onRoleSelected();
		e.preventDefault();
	}

	render() {
		return (
			<View style={styles.container}>
				<Button styleContainer={styles.button} styleText={styles.text} text='Recolector' onPress={(e) => this.userRole(e)} />
				<Button styleContainer={styles.button} styleText={styles.text} text='Pesador' onPress={(e) => this.userRole(e)} />
				<Button styleContainer={styles.button} styleText={styles.text} text='Enfardador' onPress={(e) => this.userRole(e)} />
			</View>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		role: state.role.role
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRoleSelected: () => { dispatch(recolector()); }
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 200,
		height: 100,
		alignItems: 'center',
		backgroundColor: '#02A397',
		padding: 25,
		margin: 25,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlignVertical: 'center',
	},
	text: {
		color: 'white',
		fontSize: 18,
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
