import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {ScrollView, Text, View, Button, StyleSheet} from 'react-native';
import {logout} from '../../actions/authorisation';

const LATITUDEDELTA = 0.01;
const LONGITUDEDELTA = 0.01;

class Secured extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: undefined,
				longitude: undefined,
				latitudeDelta: undefined,
				longitudeDelta: undefined,
			},
			islands: null,
			error: null,
			status: true,
		}
	}

	componentWillMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDEDELTA,
						longitudeDelta: LONGITUDEDELTA
					},
				});
			},
			(error) => this.setState({ error: error.message }),
			{enableHighAccuracy: true, timeout: 20000},
		);
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				const newRegion = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: LATITUDEDELTA,
					longitudeDelta: LONGITUDEDELTA
				}
				this.setState({region: newRegion})
			},
			(error) => this.setState({ error: error.message }),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10},
		);
	}

	getIslands() {
		/*fetch('https://facebook.github.io/react-native/movies.json')
		.then((response) => response.json())
		.then((responseJson) => {*/
			const arrayMarkers = [];
			islands.results.map((island, i) => {
				arrayMarkers.push(
					<Marker
						key={i}
						coordinate={{
							latitude: island.latitude,
							longitude: island.longitude,
						}}
						title={island.title}
					/>
				)
			})
			this.setState({islands: arrayMarkers});
	/*		})
	*/}

	userLogout(e) {
		this.props.onLogout();
		e.preventDefault();
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.region.latitude
				?
					<View style={styles.container}>
						<MapView
							style={styles.map}
							mapType={'standard'}
							provider={MapView.PROVIDER_GOOGLE}
							region={this.state.region}
							showsUserLocation={true}
							showsMyLocationButton={true}
							showsCompass={true}
							followsUserLocation={true}
							>
								{this.state.islands}
						</MapView>
						<Button onPress={(e) => this.userLogout(e)} title="Logout" />
						<Button onPress={this.getIslands.bind(this)} title='Islas' color='black' />
					</View>
				:
					<View style={styles.text}>
					<ScrollView style={{padding: 20}}>
						<Text style={{fontSize: 27}}>
							{`Welcome ${this.props.username}`}
						</Text>
						<View style={{margin: 20}}/>


					</ScrollView>
						<Text>Buscando ubicación. . .</Text>
						{this.state.error ? <Text>Error: {this.state.error}</Text> : null}
					</View>}
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
	},
	text: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	map: {
		flex: 1,
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Secured);
