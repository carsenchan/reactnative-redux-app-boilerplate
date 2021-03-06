import React from 'react'
import { AppRegistry } from 'react-native';


import { Provider } from 'react-redux'
import App from './App';
import configStore from './configStore'

const store = configStore()

const MainApp = ()=>(
    <Provider store = {store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('MyReactRedux', () => MainApp);
