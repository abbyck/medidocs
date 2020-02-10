import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './screens/HomePage';
import OTPScreen from './screens/OTPScreen';
import FillDetails from './screens/FillDetails';
import Dashboard from './screens/Dashboard';
import AngScreen from './screens/AngScreen'

const AppNavigator = createStackNavigator ({
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
    Ang : {
        screen: AngScreen
    }
}, {
<<<<<<< HEAD
    initialRouteName: 'Ang',
=======
    initialRouteName: 'Dashboard',
>>>>>>> ff33fa77392dd92ed3a7c4acf197207f524b0da2
    headerMode: 'none'
})

export default createAppContainer(AppNavigator);