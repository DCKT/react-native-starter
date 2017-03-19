import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { getTimestamp } from '../actions/demo'

type Props = {
  getTimestamp: Function,
  demoText: ?number
}

class Home extends React.Component {
  props: Props

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View>
            <Text>Home view</Text>
            <Text>Demo redux : {this.props.demoText}</Text>
            <Button primary onPress={this._onPress}>
              <Text>Change demo text !</Text>
            </Button>
          </View>
        </Content>
      </Container>
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
