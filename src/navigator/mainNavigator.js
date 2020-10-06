import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps130271Navigator from '../features/Maps130271/navigator';
import Add-Item130270Navigator from '../features/Add-Item130270/navigator';
import Maps130266Navigator from '../features/Maps130266/navigator';
import UserProfile130262Navigator from '../features/UserProfile130262/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps130271: { screen: Maps130271Navigator },
Add-Item130270: { screen: Add-Item130270Navigator },
Maps130266: { screen: Maps130266Navigator },
UserProfile130262: { screen: UserProfile130262Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
