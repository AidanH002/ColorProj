import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FrequencyWavelengthScreen from './FrequencyWavelengthScreen';
import HertzAngleScreen from './HertzAngleScreen';
import DegreesNanometersScreen from './DegreesNanometersScreen';

const Tab = createBottomTabNavigator();

export default function ConversionsTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'FreqWave') {
            iconName = focused ? 'radio' : 'radio-outline';
          } else if (route.name === 'HertzAngle') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'DegreesNm') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
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
