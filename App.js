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
  const {container, text, button, buttonText, mainContainer} = styles
  console.log(props)
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={()=>props.fetchData()}>
        <Text style={buttonText}>Fetch Data</Text>
      </TouchableHighlight>
      <View style={mainContainer}>
        {props.appData.isFetching && <Text>Loading...</Text>}
        {
          props.appData.data.length?(
            props.appData.data.map((course, index)=>{
              return(<View key={index}>
                <Text>{course.id}</Text>
                <Text>{course.name}</Text>
              </View>)
            })
          ):<View/>
        }
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#023aba'
  },
  buttonText: {
    color: '#fff'
  },
  mainContainer: {
    margin: 10
  }
})

const mapStateToProps = (state)=>{
  console.log(state)
  return({
    appData: state.testState
  })
}

const mapDispatchToProps = (dispatch)=>{
  return({
    fetchData: ()=>dispatch(fetchData())
  })
}

export default MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
