/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux'

import {fetchData} from './actions'

let styles

const App = (props) =>{
  const {container, text, button, buttonText} = styles

  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button}>
        <Text style={buttonText}>Fetch Data</Text>
      </TouchableHighlight>
    </View>
  )
}

styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    color: '#9293ab'
  },
  buttonText: {
    color: '#fff'
  }
})

const mapStateToProps = (state)=>{
  return({
    appData: state.appData
  })
}

const mapDispatchToProps = (dispatch)=>{
  return({
    fetchData: dispatch(fetchData())
  })
}

export default MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
