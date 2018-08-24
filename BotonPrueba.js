import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
/*
export class CompHijo extends React.Component {
	render() {
	  return(
		<View>
		  <View style={this.props.status ? styles.on : styles.off}/>
	    </View>
	  )
	}
}*/

export default class BotonPrueba extends React.Component {
  constructor(props) {
	super(props);

	this.state = {status: false};
	this.clicked = this.clicked.bind(this);
  }
  clicked() {
	this.setState({
		state: !this.state.status
	})
  }
  render() {
    return (
      <View style={styles.container}>
	    <CompHijo status={this.state.status}/>
		<Button
		  onPress={this.clicked()}
		  title = 'Click here'
		  color = 'red'
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  on: {
	width: 100,
	height: 100,
	backgroundColor: 'white'
  },
  off: {
    width: 100,
	height: 100,
	backgroundColor: 'black'
  }
});