import React, { PureComponent } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components'
import { w } from '../components/constants'


class DetailsScreen extends PureComponent {
  render() {
    console.log('this.props', this.props )
    const { sub } = styles
    const { user, urls } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = {user, urls}

    return(
      <View>
        <Header
          title={ user.name}
          onPress={() => navigation.goBack()}
          />
          <View style={sub} >
            <ImageBigCard data= {data} />
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff'
  }
})
export default DetailsScreen
