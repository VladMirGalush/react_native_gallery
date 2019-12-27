import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { w } from './constants'

const Header = ({ title, onPress,leftIcon }) =>{
  const { viewStyle, textStyle, image } = styles
	 return (
	 <View style={viewStyle} >
     <TouchableOpacity onPress={onPress}>
       <Image
          name={leftIcon}
          style={image}
          source={{
          uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnl5N0KPseB6Nh4n16KFTR5NPhDUnXvZ7mhZDoo0iR8g3lcT5QBw&s'
              }}
          />
      </TouchableOpacity>
    <Text style={textStyle}>{title}</Text>
  </View>
      )
}

const styles = StyleSheet.create({
  image:{
    width: 70,
    height: 60,
    paddingLeft: 50,
    borderRadius: 10
  },
  viewStyle: {
    backgroundColor: '#696969',
    height: 140,
    flexDirection:'row',
	  flexWrap: 'wrap',
    alignContent: 'space-between',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    borderRadius: 3,
    position: 'relative'
  },
  textStyle: {
    justifyContent: 'center',
    color: '#FAEBD7',
    paddingLeft: 20,
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold'
  }
})

export { Header }
