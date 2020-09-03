import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import styles from './styles';

const Stack = createStackNavigator();

const Path = ({ route }) => {
    const path = route.params.path.map((item) => item + 1)
    return (
        <View style={styles.pathContainer}>
            <Text style={styles.pathText}>Order of execution</Text>
            <Text style={styles.pathJoin}>{path.join(" -> ")}</Text>
        </View>
    )
}

export default class Routes extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={'Lift'} headerMode={'none'}>
                        <Stack.Screen name="Lift" component={App} />
                        <Stack.Screen name="Path" component={Path} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>)
    }

}


