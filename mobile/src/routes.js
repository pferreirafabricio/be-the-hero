import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

export default function Routes() {
    // screenOptins={{ headerShown: false }}
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Incidents" component={Incidents} options={{ headerShown: false }} />
                <AppStack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}