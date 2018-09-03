import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView, Text, TextInput, View, Button, Image, StyleSheet, Picker} from 'react-native';
import {login} from '../../actions/authorisation';

class Login extends Component {
	constructor (props) {
		super(props);

		this.state = {
			username: null,
		};
	}

	userLogin (e) {
		this.props.onLogin(this.state.username);
		e.preventDefault();
	}

	render() {
		return (
			<ScrollView>
				<Image source={require('./../../assets/img/Logo03.png')} style={styles.logo} />
				<View style={styles.container}>
					<View style={styles.section}>
						<Icon style={styles.sectionIcon} name='user' size={20} />
						<TextInput
							style={styles.sectionInput}
							placeholder='Usuario'
							autoCapitalize='none'
							autoCorrect={false}
							autoFocus={true}
							keyboardType='email-address'
							value={this.state.username}
							onChangeText={(text) => this.setState({username: text})} />
					</View>
					<Picker
						selectedValue={this.state.language}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
					<View style={styles.sectionButton}>
						<Button color='#02A397' style={styles.sectionButton} onPress={(e) => this.userLogin(e)} title="Entrar" />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.authorisation.isLoggedIn
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (username) => {dispatch(login(username));}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		alignSelf: 'center',
		height: 150,
		width: 150,
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
	sectionInput: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		color: 'black',
	},
	sectionButton: {
		margin: 20,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
