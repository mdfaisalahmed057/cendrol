import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import productDetails from '../screen/ProductDetails'
import productScreen from '../screen/ProductScreen'

const Stack=createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductScreen" component={productScreen} />
                <Stack.Screen name="productDetails" component={productDetails} options={{ presentation: 'modal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}