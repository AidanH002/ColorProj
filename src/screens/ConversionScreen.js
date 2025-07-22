import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ConversionUtils } from '../utils/conversionUtils';
import { styles } from './ConversionScreen.styles';

export default function ConversionScreen() {
  // Frequency ↔ Wavelength converter state
  const [freqValue, setFreqValue] = useState('');
  const [wavelengthValue, setWavelengthValue] = useState('');
  
  // Hertz ↔ Angle converter state
  const [hertzValue, setHertzValue] = useState('');
  const [angleValue, setAngleValue] = useState('');
  
  // Advanced degrees to nanometers converter state
  const [degreeValue, setDegreeValue] = useState('');
  const [frequencyParam, setFrequencyParam] = useState('');
  const [speedParam, setSpeedParam] = useState('');
  const [nanometerResult, setNanometerResult] = useState('');

  // Frequency to Wavelength conversion
  const convertFreqToWavelength = () => {
    const freq = parseFloat(freqValue);
    if (!isNaN(freq) && freq > 0) {
      const result = ConversionUtils.frequencyToWavelength(freq);
      setWavelengthValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  // Wavelength to Frequency conversion
  const convertWavelengthToFreq = () => {
    const wavelength = parseFloat(wavelengthValue);
    if (!isNaN(wavelength) && wavelength > 0) {
      const result = ConversionUtils.wavelengthToFrequency(wavelength);
      setFreqValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  // Hertz to Angle conversion
  const convertHertzToAngle = () => {
    const hertz = parseFloat(hertzValue);
    if (!isNaN(hertz) && hertz > 0) {
      const result = ConversionUtils.hertzToAngle(hertz);
      setAngleValue(ConversionUtils.formatNumber(result, 4));
    }
  };

  // Angle to Hertz conversion
  const convertAngleToHertz = () => {
    const angle = parseFloat(angleValue);
    if (!isNaN(angle)) {
      const result = ConversionUtils.angleToHertz(angle);
      setHertzValue(ConversionUtils.formatNumber(result, 3));
    }
  };

  // Advanced degrees to nanometers conversion
  const convertDegreesToNanometers = () => {
    const degrees = parseFloat(degreeValue);
    const freq = parseFloat(frequencyParam);
    const speed = parseFloat(speedParam);
    
    if (!isNaN(degrees) && !isNaN(freq) && !isNaN(speed)) {
      const result = ConversionUtils.degreesToNanometers(degrees, freq, speed);
      setNanometerResult(ConversionUtils.formatNumber(result, 4));
    }
  };

  // Clear all fields
  const clearAll = () => {
    setFreqValue('');
    setWavelengthValue('');
    setHertzValue('');
    setAngleValue('');
    setDegreeValue('');
    setFrequencyParam('');
    setSpeedParam('');
    setNanometerResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Conversion Widgets</Text>
        <Text style={styles.subtitle}>Based on ColorProj formulas</Text>

        {/* Frequency ↔ Wavelength Converter */}
        <View style={styles.converterCard}>
          <Text style={styles.cardTitle}>Frequency ↔ Wavelength</Text>
          <Text style={styles.cardDescription}>Convert between Hz and nanometers using speed of light</Text>
          
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
        </View>

        {/* Hertz ↔ Angle Converter */}
        <View style={styles.converterCard}>
          <Text style={styles.cardTitle}>Hertz ↔ Angle</Text>
          <Text style={styles.cardDescription}>Convert between frequency and angular degrees</Text>
          
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
        </View>

        {/* Advanced Degrees to Nanometers Converter */}
        <View style={styles.converterCard}>
          <Text style={styles.cardTitle}>Advanced: Degrees → Nanometers</Text>
          <Text style={styles.cardDescription}>Convert degrees to nanometers with frequency and speed parameters</Text>
          
          <View style={styles.advancedInputs}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Degrees</Text>
              <TextInput
                style={styles.input}
                value={degreeValue}
                onChangeText={setDegreeValue}
                placeholder="Enter degrees"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Frequency</Text>
              <TextInput
                style={styles.input}
                value={frequencyParam}
                onChangeText={setFrequencyParam}
                placeholder="Enter frequency"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Speed</Text>
              <TextInput
                style={styles.input}
                value={speedParam}
                onChangeText={setSpeedParam}
                placeholder="Enter speed"
                keyboardType="numeric"
              />
            </View>
          </View>
          
          <TouchableOpacity style={styles.calculateButton} onPress={convertDegreesToNanometers}>
            <Text style={styles.calculateButtonText}>Calculate Nanometers</Text>
          </TouchableOpacity>
          
          {nanometerResult !== '' && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Result:</Text>
              <Text style={styles.resultValue}>{nanometerResult} nm</Text>
            </View>
          )}
        </View>

        {/* Clear All Button */}
        <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
        
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}
