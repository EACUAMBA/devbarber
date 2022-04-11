import React from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'Appointments'} component={Appointments} />
      <Tab.Screen name={'Favorites'} component={Favorites} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};
