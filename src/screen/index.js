import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import {
  HOME_SCREEN,
  DETAILS_SCREEN
} from '../routes'

export default createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen,
    [DETAILS_SCREEN]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)
