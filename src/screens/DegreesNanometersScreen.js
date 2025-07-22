import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ConversionUtils } from '../utils/conversionUtils';
import { styles } from './ConversionScreen.styles';

export default function DegreesNanometersScreen() {
  const [degreeValue, setDegreeValue] = useState('');
  const [frequencyParam, setFrequencyParam] = useState('');
  const [speedParam, setSpeedParam] = useState('');
  const [nanometerResult, setNanometerResult] = useState('');

  const convertDegreesToNanometers = () => {
    const degrees = parseFloat(degreeValue);
    const freq = parseFloat(frequencyParam);
    const speed = parseFloat(speedParam);
    
    if (!isNaN(degrees) && !isNaN(freq) && !isNaN(speed)) {
      const result = ConversionUtils.degreesToNanometers(degrees, freq, speed);
      setNanometerResult(ConversionUtils.formatNumber(result, 4));
    }
  };

  const clearFields = () => {
    setDegreeValue('');
    setFrequencyParam('');
    setSpeedParam('');
    setNanometerResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.singleScreenContainer}>
          <Text style={styles.title}>Advanced: Degrees → Nanometers</Text>
          <Text style={styles.subtitle}>Convert degrees to nanometers with frequency and speed parameters</Text>

          <View style={styles.converterCard}>
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
          
          <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>

          <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Formula Information</Text>
          <Text style={styles.infoText}>• Advanced formula with multiple parameters</Text>
          <Text style={styles.infoText}>• Combines degrees, frequency, and speed</Text>
          <Text style={styles.infoText}>• Provides precise nanometer calculations</Text>
          <Text style={styles.infoText}>• Based on electromagnetic wavelength theory</Text>
        </View>
        
        <View style={styles.bottomPadding} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
