import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { w } from './constants'

const ImageCard = ({ data, onPress }) => {
	const { container, sub, h1, cover } = styles
	const { urls, user } = data

	return(
		<TouchableOpacity onPress={onPress}>
			<View style={container}>
				<View style={sub}>
					<Image style={cover} source={{uri: urls.small  }}/>
				</View>
					<Text style={h1}>{ user.name }</Text>
			</View>
		</TouchableOpacity>
		)
}

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#D3D3D3',
		flexDirection:'column',
		width: w,
		paddingLeft: 10,
		paddingTop: 20,
	},
  h1: {
		fontFamily: 'AvenirNext-DemiBold',
		fontSize: 20,
		alignSelf: 'center',
		textAlign: 'center',
		paddingTop: 5,
		width: w / 2.4
  },
	cover: {
		width: w / 1.05,
		height: w * 0.70,
		borderRadius: 10,
		alignContent: 'center',
		paddingLeft: 10
	}

})
export { ImageCard }
