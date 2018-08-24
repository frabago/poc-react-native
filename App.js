import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import CompExterno from './CompExterno';
import { BotonPrueba } from './BotonPrueba';
//import CompHijo from './BotonPrueba';


export class Loading extends React.Component {
	render() {
		return (
			<Text>Loading...</Text>
		)
	}
}


export class CompHijo extends React.Component {
	render() {
		if (this.props.result) {
			var res = this.props.result.map((item, i) => {
				return (
					<Text key={i}> {item.title} </Text>
				)
			})
		}
		return (
			<View>
				{this.props.result ? res : <Loading />}
				<View style={this.props.status ? styles.on : styles.off} />
			</View>
		)
	}
}

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		/*var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})*/

		this.state = {
			status: false,
			dataSource: []//ds.cloneWithRows([])
		}

		this.clicked = () => {
			this.setState({
				status: !this.state.status
			})
		}
		//this.clicked = this.clicked.bind(this);
		//this.renderRow = this.renderRow.bind(this);
	}

	componentDidMount() {
		var titles = [];
		fetch('https://facebook.github.io/react-native/movies.json').
			then(response => response.json()).
			then(responseJson => {
				var movies = responseJson.movies;
				for (var i = 0; i < movies.length; i++) {
					titles.push(movies[i].title);
				}
				console.log(titles);
				this.setState({
					//dataSource: this.state.dataSource.cloneWithRows(titles)
					dataSource: titles
				})
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<CompHijo status={this.state.status} result={this.state.data} />
				<Button
					onPress={this.clicked}
					title='Click here'
					color='red'
				/>
				<CompExterno />
				<List>
					<FlatList
						data={this.state.dataSource}
						keyExtractor={item => `${item}`}
						renderItem={({ item }) => (
							<ListItem
								title={`${item}`}
							/>
						)}
					/>
				</List>
				{/*}
		`${sdajolfad}`
		<ListView
		  enableEmptySections={true}
		  dataSource={this.state.dataSource}
		  renderRow={this.renderRow}
		/>
		*/}
			</View>
		);
	}/*
  renderRow(dataRow){
    return(
      <TouchableHighlight>
	    <View style={styles.cell}>
		  <Text>{dataRow}</Text>
	    </View>
	  </TouchableHighlight>
	)
  }*/
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue',
		paddingTop: 30
	},
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		color: 'yellow',
	},
	simpleText: {
		fontSize: 10,
		textAlign: 'center',
		margin: 10,
		color: 'white',
	},
	cell: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		paddingTop: 20,
		paddingBottom: 20,
		alignItems: 'center'
	},
	on: {
		width: 100,
		height: 100,
		backgroundColor: 'yellow'
	},
	off: {
		width: 100,
		height: 100,
		backgroundColor: 'black'
	}
});
