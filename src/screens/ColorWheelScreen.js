import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ColorProjLogo from '../components/ColorProjLogo';
import { ColorData } from '../data/colorData';
import { styles } from './ColorWheelScreen.styles';

export default function ColorWheelScreen() {
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [selectedColorInfo, setSelectedColorInfo] = useState(ColorData.getColorById('red'));

  // Get data from centralized color data
  const visibleSpectrum = ColorData.getVisibleColors();
  const nonVisibleSpectrum = ColorData.getNonVisibleColors();

  const getRayTypeIcon = (type) => {
    return ColorData.getRayIcon(type);
  };

  const renderColorBox = (colorInfo, index, keyPrefix) => {
    const isSelected = selectedColor === colorInfo.hex;
    
    // For visible light, use simple solid color
    if (colorInfo.type === 'Visible Light') {
      return (
        <TouchableOpacity
          key={`${keyPrefix}-${index}`}
          style={[
            styles.colorBox,
            { backgroundColor: colorInfo.hex },
            isSelected && styles.selectedBorder
          ]}
          onPress={() => handleColorSelection(colorInfo)}
        />
      );
    }

    // For invisible light, create special patterns using borders and shadows
    const getInvisibleStyle = (type, hex) => {
      switch (type) {
        case 'Infrared Ray':
          return [styles.colorBox, styles.infraredPattern, { backgroundColor: hex }];
        case 'Ultraviolet Ray':
          return [styles.colorBox, styles.ultravioletPattern, { backgroundColor: hex }];
        case 'X-Ray':
          return [styles.colorBox, styles.xrayPattern, { backgroundColor: hex }];
        case 'Gamma Ray':
          return [styles.colorBox, styles.gammaPattern, { backgroundColor: hex }];
        case 'Cosmic Ray':
          return [styles.colorBox, styles.cosmicPattern, { backgroundColor: hex }];
        default:
          return [styles.colorBox, { backgroundColor: hex }];
      }
    };

    const invisibleStyle = getInvisibleStyle(colorInfo.type, colorInfo.hex);

    return (
      <TouchableOpacity
        key={`${keyPrefix}-${index}`}
        style={[
          ...invisibleStyle,
          isSelected && styles.selectedBorder
        ]}
        onPress={() => handleColorSelection(colorInfo)}
      />
    );
  };

  const handleColorSelection = (colorInfo) => {
    setSelectedColor(colorInfo.hex);
    setSelectedColorInfo(colorInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ColorProjLogo size={80} />
          <View style={[styles.selectedColor, { backgroundColor: selectedColor }]} />
          <Text style={styles.colorName}>{selectedColorInfo.name}</Text>
          <Text style={styles.colorCode}>{selectedColorInfo.hex}</Text>
          <View style={styles.rayTypeContainer}>
            <Text style={styles.rayTypeIcon}>{getRayTypeIcon(selectedColorInfo.type)}</Text>
            <Text style={styles.colorType}>{selectedColorInfo.type}</Text>
          </View>
          <Text style={styles.wavelengthText}>{selectedColorInfo.wavelength}nm</Text>
          <Text style={styles.frequencyText}>{(selectedColorInfo.frequency / 1e14).toFixed(2)} × 10¹⁴ Hz</Text>
          <Text style={styles.energyText}>Energy: {ColorData.getEnergyLevelInfo(selectedColorInfo.energyLevel).description}</Text>
        </View>

        {/* Visible Spectrum Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Visible Spectrum (ROYGBIV + Intermediates)</Text>
          <Text style={styles.wavelengthInfo}>Wavelength: 380-700 nanometers</Text>
          <View style={styles.colorGrid}>
            {visibleSpectrum.map((colorInfo, index) => 
              renderColorBox(colorInfo, index, 'visible')
            )}
          </View>
        </View>

        {/* Non-Visible Spectrum Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Non-Visible Spectrum (Theoretical Colors)</Text>
          <Text style={styles.wavelengthInfo}>Beyond visible range: Infrared, UV, X-ray, Gamma</Text>
          <View style={styles.colorGrid}>
            {nonVisibleSpectrum.map((colorInfo, index) => 
              renderColorBox(colorInfo, index, 'nonvisible')
            )}
          </View>
        </View>
        
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}
