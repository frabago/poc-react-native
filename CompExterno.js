import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CompExterno extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
		<Text style={styles.subtitle}>
		  Esto es un componente externo!
		</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
	color: 'green',
  },
});