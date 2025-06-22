import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorProjLogo = ({ size = 100 }) => {  const center = size / 2;
  const radius = size * 0.4;
  // Define your angle limits in degrees (shifted 55° left from 276° to 331°)
  const startAngle = 221;  // 226° - 5° = 221°
  const endAngle = 276;    // 281° - 5° = 276°
  const step = 7.86; // 55° total / 7 colors ≈ 7.86° per color

  // Rainbow colors for the arc
  const rainbowColors = [
    '#ff0000', // Red
    '#ff8800', // Orange  
    '#ffff00', // Yellow
    '#00ff00', // Green
    '#0088ff', // Blue
    '#4400ff', // Indigo
    '#8800ff'  // Violet
  ];
  // Generate filled rainbow wedges spanning the field of view
  const colorWedges = [];
  rainbowColors.forEach((color, index) => {
    const wedgeStartAngle = startAngle + index * step;
    const wedgeEndAngle = startAngle + (index + 1) * step;
    
    // Create multiple thin lines to simulate a filled wedge
    const wedgeLines = [];
    const lineCount = 8; // Number of lines per color wedge
    
    for (let i = 0; i < lineCount; i++) {
      const lineAngle = wedgeStartAngle + (i / (lineCount - 1)) * step;
      wedgeLines.push(
        <View
          key={`line-${index}-${i}`}
          style={[
            styles.colorWedgeLine,
            {
              backgroundColor: color,
              width: radius,
              left: center,
              top: center,
              transform: [
                { rotate: `${lineAngle}deg` }
              ],
            }
          ]}
        />
      );
    }
    
    colorWedges.push(...wedgeLines);
  });
  // Calculate end points for the boundary lines
  const startRad = startAngle * (Math.PI / 180);
  const endRad = endAngle * (Math.PI / 180);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Outer Circle with dark grey background */}
      <View style={[
        styles.circle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          left: center - radius,
          top: center - radius,
        }
      ]} />

      {/* Start boundary line (276°) */}
      <View style={[
        styles.line,
        {
          width: radius,
          left: center,
          top: center,
          transform: [
            { rotate: `${startAngle}deg` }
          ],
        }
      ]} />

      {/* End boundary line (331°) */}
      <View style={[
        styles.line,
        {
          width: radius,
          left: center,
          top: center,
          transform: [
            { rotate: `${endAngle}deg` }
          ],
        }
      ]} />

      {/* Filled rainbow wedges spanning the field of view */}
      {colorWedges}

      {/* Center dot */}
      <View style={[
        styles.centerDot,
        {
          left: center - 2,
          top: center - 2,
        }
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({  container: {
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#4a4a4a',
  },
  line: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#333',
    opacity: 0.7,
    transformOrigin: '0 50%',
  },
  colorWedgeLine: {
    position: 'absolute',
    height: 3,
    opacity: 0.8,
    transformOrigin: '0 50%',
    zIndex: 1,
  },
  centerDot: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#666',
  },
  focusDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ff0000',
    opacity: 0.8,
    shadowColor: '#ff0000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default ColorProjLogo;
