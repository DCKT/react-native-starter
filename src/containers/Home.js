import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTimestamp } from '../actions/demo'

type Props = {
  getTimestamp: Function,
  demoText: ?number
}

class Home extends React.Component {
  props: Props

  render () {
    return (
      <View>
        <Text>Home view</Text>
        <Text>Demo redux : { this.props.demoText }</Text>
        <TouchableOpacity onPress={this._onPress}>
          <Text>Change demo text !</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPress = (): void => {
    this.props.getTimestamp()
  }
}

const mapStateToProps = ({ demo }) => ({
  demoText: demo.text
})

const mapDispatchToProps = dispatch => ({
  getTimestamp: bindActionCreators(getTimestamp, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
