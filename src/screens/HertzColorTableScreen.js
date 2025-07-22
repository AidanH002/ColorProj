import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ColorData } from '../data/colorData';
import { styles } from './ConversionScreen.styles';

export default function HertzColorTableScreen() {
  const [hertzInput, setHertzInput] = useState('');
  const [colorResult, setColorResult] = useState(null);

  const convertHertzToColor = () => {
    const hertz = parseFloat(hertzInput);
    if (!isNaN(hertz) && hertz > 0) {
      // Convert hertz to wavelength (nm)
      const wavelength = ColorData.frequencyToWavelength(hertz);
      
      // Get or generate color data for this wavelength
      const colorData = ColorData.getColorForWavelength(wavelength);
      
      // Calculate inverse color
      const inverseColor = {
        r: 255 - colorData.rgb.r,
        g: 255 - colorData.rgb.g,
        b: 255 - colorData.rgb.b
      };
      const inverseHex = ColorData.rgbToHex(inverseColor.r, inverseColor.g, inverseColor.b);
      
      setColorResult({
        hertz: hertz.toExponential(2),
        wavelength: wavelength.toExponential(2),
        color: colorData.hex,
        inverseColor: inverseHex,
        colorName: colorData.name,
        colorType: colorData.type,
        isVisible: wavelength >= 380 && wavelength <= 700,
        energyLevel: colorData.energyLevel,
        description: colorData.description
      });
    }
  };

  const clearFields = () => {
    setHertzInput('');
    setColorResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.singleScreenContainer}>
          <Text style={styles.title}>Hertz → Color Table</Text>
          <Text style={styles.subtitle}>Convert frequency to color visualization with inverse</Text>

          <View style={styles.converterCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Frequency (Hz)</Text>
              <TextInput
                style={styles.input}
                value={hertzInput}
                onChangeText={setHertzInput}
                placeholder="Enter frequency in Hz"
                keyboardType="numeric"
              />
            </View>
            
            <TouchableOpacity style={styles.calculateButton} onPress={convertHertzToColor}>
              <Text style={styles.calculateButtonText}>Generate Color</Text>
            </TouchableOpacity>
            
            {colorResult && (
              <View style={styles.colorResultContainer}>
                <Text style={styles.resultTitle}>Color Analysis</Text>
                
                {/* Color Bubbles */}
                <View style={styles.colorBubblesContainer}>
                  <View style={styles.colorBubbleGroup}>
                    <Text style={styles.bubbleLabel}>Primary Color</Text>
                    <View style={[styles.colorBubble, { backgroundColor: colorResult.color }]} />
                    <Text style={styles.bubbleHex}>{colorResult.color}</Text>
                  </View>
                  
                  <View style={styles.colorBubbleGroup}>
                    <Text style={styles.bubbleLabel}>Inverse Color</Text>
                    <View style={[styles.colorBubble, { backgroundColor: colorResult.inverseColor }]} />
                    <Text style={styles.bubbleHex}>{colorResult.inverseColor}</Text>
                  </View>
                </View>
                
                {/* Technical Information */}
                <View style={styles.technicalInfo}>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Frequency:</Text>
                    <Text style={styles.infoValue}>{colorResult.hertz} Hz</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Wavelength:</Text>
                    <Text style={styles.infoValue}>{colorResult.wavelength} nm</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Color Name:</Text>
                    <Text style={styles.infoValue}>{colorResult.colorName}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Ray Type:</Text>
                    <Text style={[styles.infoValue, { color: colorResult.isVisible ? '#27ae60' : '#e74c3c' }]}>
                      {colorResult.colorType}
                    </Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Description:</Text>
                    <Text style={styles.infoValue}>{colorResult.description}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Energy Level:</Text>
                    <Text style={[styles.infoValue, { color: ColorData.getEnergyLevelInfo(colorResult.energyLevel).color }]}>
                      {ColorData.getEnergyLevelInfo(colorResult.energyLevel).description}
                    </Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Visibility:</Text>
                    <Text style={[styles.infoValue, { color: colorResult.isVisible ? '#27ae60' : '#e74c3c' }]}>
                      {colorResult.isVisible ? 'Visible to Human Eye' : 'Not Visible to Human Eye'}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            
            <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>About This Tool</Text>
            <Text style={styles.infoText}>• Converts electromagnetic frequency to accurate color representation</Text>
            <Text style={styles.infoText}>• Uses scientific wavelength-to-color algorithms</Text>
            <Text style={styles.infoText}>• Shows inverse/complementary color for design purposes</Text>
            <Text style={styles.infoText}>• Indicates energy level and ray type classification</Text>
            <Text style={styles.infoText}>• Provides detailed electromagnetic spectrum information</Text>
          </View>
        
          <View style={styles.bottomPadding} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
