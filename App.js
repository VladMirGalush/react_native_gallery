import React, { Component } from 'react'
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Header, ImageCard}  from './src/components'


const url ='https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export default class App extends Component{
  state = {
    title: 'GALLERY',
    data: []
  }

  componentDidMount = async() =>{
    try{
       const response = await fetch(url)
       const data = await response.json()
       this.setState({ data })
    }
    catch(e){
      throw e
    }
  }
  render() {
   const { title, data } = this.state
   const { container } = styles
   console.log('this.state', this.state)
    return (
      <View>
        <Header title={title}/>
        <ScrollView>
          <View style={container}>
            {data.map(item=>(
              <ImageCard
              data={item}
              key={item.id}/>
            ))}
          </View>
        </ScrollView>
      </View>
      )
  }
}
const styles=StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    marginBottom: 150
  }
})
