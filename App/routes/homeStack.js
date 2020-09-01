import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomePage from '../components/HomePage'
import Basket from '../components/Basket'
import Search from '../components/Search'
import Results from '../components/Results';

const screens = {
    Home: {
        screen: HomePage
    },
    Basket: {
        screen: Basket
    },
    Search: {
        screen: Search
    },
    Results: {
        screen: Results
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)