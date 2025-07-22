import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ConversionUtils } from '../utils/conversionUtils';
import { styles } from './ConversionScreen.styles';

export default function HertzAngleScreen() {
  const [hertzValue, setHertzValue] = useState('');
  const [angleValue, setAngleValue] = useState('');

  const convertHertzToAngle = () => {
    const hertz = parseFloat(hertzValue);
    if (!isNaN(hertz) && hertz > 0) {
      const result = ConversionUtils.hertzToAngle(hertz);
      setAngleValue(ConversionUtils.formatNumber(result, 4));
    }
  };

  const convertAngleToHertz = () => {
    const angle = parseFloat(angleValue);
    if (!isNaN(angle)) {
      const result = ConversionUtils.angleToHertz(angle);
      setHertzValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  const clearFields = () => {
    setHertzValue('');
    setAngleValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.singleScreenContainer}>
        <Text style={styles.title}>Hertz ↔ Angle</Text>
        <Text style={styles.subtitle}>Convert between frequency and angular degrees</Text>

        <View style={styles.converterCard}>
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Frequency (Hz)</Text>
              <TextInput
                style={styles.input}
                value={hertzValue}
                onChangeText={setHertzValue}
                placeholder="Enter hertz"
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.convertButton} onPress={convertHertzToAngle}>
                <Text style={styles.buttonText}>→ °</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Angle (degrees)</Text>
              <TextInput
                style={styles.input}
                value={angleValue}
                onChangeText={setAngleValue}
                placeholder="Enter angle"
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.convertButton} onPress={convertAngleToHertz}>
                <Text style={styles.buttonText}>→ Hz</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Formula Information</Text>
          <Text style={styles.infoText}>• Hertz to Angle: angle = (hertz / 10^17) × 360</Text>
          <Text style={styles.infoText}>• Angle to Hertz: hertz = (angle / 360) × 10^17</Text>
          <Text style={styles.infoText}>• Based on electromagnetic frequency mapping</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
