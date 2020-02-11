import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './screens/HomePage';
import OTPScreen from './screens/OTPScreen';
import FillDetails from './screens/FillDetails';
import Dashboard from './screens/Dashboard';
import AngScreen from './screens/AngScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    OTP: {
        screen: OTPScreen,
    },
    FillDetails: {
        screen: FillDetails
    },
    Dashboard: {
        screen: Dashboard
    },
    Ang: {
        screen: AngScreen
    }
}, {
    headerMode: 'none'
})

export default createAppContainer(AppNavigator);
