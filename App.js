import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ColorWheelScreen from './src/screens/ColorWheelScreen';
import FrequencyWavelengthScreen from './src/screens/FrequencyWavelengthScreen';
import HertzAngleScreen from './src/screens/HertzAngleScreen';
import DegreesNanometersScreen from './src/screens/DegreesNanometersScreen';
import HertzColorTableScreen from './src/screens/HertzColorTableScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconText;

              if (route.name === 'ColorPicker') {
                iconText = '🎨';
              } else if (route.name === 'FreqWave') {
                iconText = '📻';
              } else if (route.name === 'HertzAngle') {
                iconText = '🧭';
              } else if (route.name === 'DegreesNm') {
                iconText = '🔢';
              } else if (route.name === 'ColorTable') {
                iconText = '🌈';
              }

              return <Text style={{ fontSize: size, color }}>{iconText}</Text>;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#f8f9fa',
              borderTopWidth: 1,
              borderTopColor: '#e0e0e0',
              paddingBottom: 5,
              paddingTop: 5,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: '500',
            },
          })}
        >
          <Tab.Screen 
            name="ColorPicker" 
            component={ColorWheelScreen}
            options={{ 
              tabBarLabel: 'Color Picker',
              title: 'Color Picker'
            }}
          />
          <Tab.Screen 
            name="FreqWave" 
            component={FrequencyWavelengthScreen}
            options={{ 
              tabBarLabel: 'Freq ↔ Wave',
              title: 'Frequency ↔ Wavelength'
            }}
          />
          <Tab.Screen 
            name="HertzAngle" 
            component={HertzAngleScreen}
            options={{ 
              tabBarLabel: 'Hz ↔ Angle',
              title: 'Hertz ↔ Angle'
            }}
          />
          <Tab.Screen 
            name="DegreesNm" 
            component={DegreesNanometersScreen}
            options={{ 
              tabBarLabel: 'Deg → Nm',
              title: 'Degrees → Nanometers'
            }}
          />
          <Tab.Screen 
            name="ColorTable" 
            component={HertzColorTableScreen}
            options={{ 
              tabBarLabel: 'Hz → Color',
              title: 'Hertz Color Table'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
