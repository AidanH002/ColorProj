import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

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
        <Text style={styles.title}>Color Picker</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  selectedColor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colorCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    gap: 15,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedBorder: {
    borderWidth: 4,
    borderColor: '#2c3e50',
  },
});
