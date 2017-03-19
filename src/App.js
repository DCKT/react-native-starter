import React from 'react'
import {
  NavigationProvider,
  StackNavigation
} from '@expo/ex-navigation'

import Router from './utils/router'

export default class App extends React.Component {
  render () {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    )
  }
}
