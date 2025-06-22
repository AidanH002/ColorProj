import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ColorProjLogo from '../components/ColorProjLogo';
import { styles } from './ColorWheelScreen.styles';

export default function ColorWheelScreen() {
  const [selectedColor, setSelectedColor] = useState('#3498db');

  const colors = [
    '#e74c3c', '#e67e22', '#f39c12', '#f1c40f',
    '#2ecc71', '#1abc9c', '#3498db', '#9b59b6',
    '#34495e', '#95a5a6', '#ecf0f1', '#bdc3c7'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ColorProjLogo size={80} />
        <Text style={styles.title}>ColorProj</Text>
        <View style={[styles.selectedColor, { backgroundColor: selectedColor }]} />
        <Text style={styles.colorCode}>{selectedColor}</Text>
      </View>

      <View style={styles.colorGrid}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selectedBorder
            ]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
