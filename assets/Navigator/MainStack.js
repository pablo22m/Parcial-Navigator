import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../Pages/HomeScreen'
import BolaScreen from '../Pages/BolaScreen'
import CamisaScreen from '../Pages/CamisaScreen'
import MeiaScreen from '../Pages/MeiaScreen'
import CaneleiraScreen from '../Pages/CaneleiraScreen'
import LuvaScreen from '../Pages/LuvaScreen'
import ChuteiraScreen from '../Pages/ChuteiraScreen'
const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

      <MainStack.Screen name='Bola' component={BolaScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

      <MainStack.Screen name='Camisa' component={CamisaScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

       <MainStack.Screen name='Meia' component={MeiaScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

        <MainStack.Screen name='Caneleira' component={CaneleiraScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

        <MainStack.Screen name='Luva' component={LuvaScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>

         <MainStack.Screen name='Chuteira' component={ChuteiraScreen} options={{
        title: 'C&P Sports',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#5297b4',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        },
        }}/>
    </MainStack.Navigator>
  )
}
      