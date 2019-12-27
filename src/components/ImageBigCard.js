import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { w } from './constants'

const ImageBigCard = ({ data }) => {
	const { container,  cover } = styles
	const { urls, user } = data
	return(
		<View style={container}>
			<View>
				<Image
					style={cover}
					source={{uri: urls.full  }}/>
			</View>
		</View>
		)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#696969',
		width: w,
		paddingLeft: 2
	},
	cover: {
		width: w / 1.01,
		height: w * 1.7,
		borderRadius: 10,
		paddingTop: 150,
		alignContent: 'center',
		paddingLeft: 10
	}
})
export { ImageBigCard }
