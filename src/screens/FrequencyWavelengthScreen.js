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

export default function FrequencyWavelengthScreen() {
  const [freqValue, setFreqValue] = useState('');
  const [wavelengthValue, setWavelengthValue] = useState('');

  const convertFreqToWavelength = () => {
    const freq = parseFloat(freqValue);
    if (!isNaN(freq) && freq > 0) {
      const result = ConversionUtils.frequencyToWavelength(freq);
      setWavelengthValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  const convertWavelengthToFreq = () => {
    const wavelength = parseFloat(wavelengthValue);
    if (!isNaN(wavelength) && wavelength > 0) {
      const result = ConversionUtils.wavelengthToFrequency(wavelength);
      setFreqValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  const clearFields = () => {
    setFreqValue('');
    setWavelengthValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.singleScreenContainer}>
        <Text style={styles.title}>Frequency ↔ Wavelength</Text>
        <Text style={styles.subtitle}>Convert between Hz and nanometers using speed of light</Text>

        <View style={styles.converterCard}>
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Frequency (Hz)</Text>
              <TextInput
                style={styles.input}
                value={freqValue}
                onChangeText={setFreqValue}
                placeholder="Enter frequency"
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.convertButton} onPress={convertFreqToWavelength}>
                <Text style={styles.buttonText}>→ nm</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Wavelength (nm)</Text>
              <TextInput
                style={styles.input}
                value={wavelengthValue}
                onChangeText={setWavelengthValue}
                placeholder="Enter wavelength"
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.convertButton} onPress={convertWavelengthToFreq}>
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
          <Text style={styles.infoText}>• Frequency to Wavelength: λ = c / f</Text>
          <Text style={styles.infoText}>• Wavelength to Frequency: f = c / λ</Text>
          <Text style={styles.infoText}>• c = speed of light (≈ 3.0 × 10⁸ m/s)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
