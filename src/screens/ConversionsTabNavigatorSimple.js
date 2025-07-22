import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import FrequencyWavelengthScreen from './FrequencyWavelengthScreen';
import HertzAngleScreen from './HertzAngleScreen';
import DegreesNanometersScreen from './DegreesNanometersScreen';

const Tab = createBottomTabNavigator();

export default function ConversionsTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconText;

          if (route.name === 'FreqWave') {
            iconText = '📻';
          } else if (route.name === 'HertzAngle') {
            iconText = '🧭';
          } else if (route.name === 'DegreesNm') {
            iconText = '🔢';
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
          fontSize: 11,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
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
    </Tab.Navigator>
  );
}
