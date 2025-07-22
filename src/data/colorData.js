// Comprehensive color data with electromagnetic spectrum information
// All measurements based on scientific standards and ColorProj formulas

export const ColorData = {
  // Visible spectrum colors (380-700 nm)
  visibleSpectrum: [
    // ROYGBIV + Intermediate colors
    { 
      id: 'red',
      name: 'Red', 
      hex: '#FF0000', 
      wavelength: 700, 
      frequency: 4.28e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Longest visible wavelength',
      energyLevel: 'low',
      rgb: { r: 255, g: 0, b: 0 }
    },
    { 
      id: 'red-orange',
      name: 'Red-Orange', 
      hex: '#FF4500', 
      wavelength: 650, 
      frequency: 4.61e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Warm transition color',
      energyLevel: 'low',
      rgb: { r: 255, g: 69, b: 0 }
    },
    { 
      id: 'orange',
      name: 'Orange', 
      hex: '#FF8C00', 
      wavelength: 620, 
      frequency: 4.84e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Classic warm color',
      energyLevel: 'low-medium',
      rgb: { r: 255, g: 140, b: 0 }
    },
    { 
      id: 'orange-yellow',
      name: 'Orange-Yellow', 
      hex: '#FFD700', 
      wavelength: 600, 
      frequency: 5.00e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Golden yellow transition',
      energyLevel: 'low-medium',
      rgb: { r: 255, g: 215, b: 0 }
    },
    { 
      id: 'yellow',
      name: 'Yellow', 
      hex: '#FFFF00', 
      wavelength: 580, 
      frequency: 5.17e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Brightest perceived color',
      energyLevel: 'medium',
      rgb: { r: 255, g: 255, b: 0 }
    },
    { 
      id: 'yellow-green',
      name: 'Yellow-Green', 
      hex: '#ADFF2F', 
      wavelength: 550, 
      frequency: 5.45e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Spring green transition',
      energyLevel: 'medium',
      rgb: { r: 173, g: 255, b: 47 }
    },
    { 
      id: 'green',
      name: 'Green', 
      hex: '#00FF00', 
      wavelength: 530, 
      frequency: 5.66e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Peak human eye sensitivity',
      energyLevel: 'medium',
      rgb: { r: 0, g: 255, b: 0 }
    },
    { 
      id: 'green-blue',
      name: 'Green-Blue', 
      hex: '#00FF7F', 
      wavelength: 500, 
      frequency: 6.00e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Cyan transition',
      energyLevel: 'medium-high',
      rgb: { r: 0, g: 255, b: 127 }
    },
    { 
      id: 'sky-blue',
      name: 'Sky Blue', 
      hex: '#00BFFF', 
      wavelength: 470, 
      frequency: 6.38e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Clear sky color',
      energyLevel: 'medium-high',
      rgb: { r: 0, g: 191, b: 255 }
    },
    { 
      id: 'blue',
      name: 'Blue', 
      hex: '#0000FF', 
      wavelength: 450, 
      frequency: 6.67e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Primary blue',
      energyLevel: 'high',
      rgb: { r: 0, g: 0, b: 255 }
    },
    { 
      id: 'indigo',
      name: 'Indigo', 
      hex: '#4B0082', 
      wavelength: 430, 
      frequency: 6.98e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Deep blue-violet',
      energyLevel: 'high',
      rgb: { r: 75, g: 0, b: 130 }
    },
    { 
      id: 'blue-violet',
      name: 'Blue-Violet', 
      hex: '#8A2BE2', 
      wavelength: 410, 
      frequency: 7.32e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Purple transition',
      energyLevel: 'high',
      rgb: { r: 138, g: 43, b: 226 }
    },
    { 
      id: 'violet',
      name: 'Violet', 
      hex: '#9400D3', 
      wavelength: 400, 
      frequency: 7.50e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Shortest visible wavelength',
      energyLevel: 'very-high',
      rgb: { r: 148, g: 0, b: 211 }
    },
    { 
      id: 'deep-violet',
      name: 'Deep Violet', 
      hex: '#8B00FF', 
      wavelength: 390, 
      frequency: 7.69e14,
      type: 'Visible Light',
      category: 'visible',
      description: 'Violet edge of visible spectrum',
      energyLevel: 'very-high',
      rgb: { r: 139, g: 0, b: 255 }
    }
  ],

  // Non-visible spectrum
  nonVisibleSpectrum: [
    // Infrared range (700nm+)
    { 
      id: 'near-ir',
      name: 'Near Infrared', 
      hex: '#A52A2A', 
      wavelength: 750, 
      frequency: 4.00e14,
      type: 'Infrared Ray',
      category: 'infrared',
      description: 'Heat radiation, night vision',
      energyLevel: 'very-low',
      rgb: { r: 165, g: 42, b: 42 }
    },
    { 
      id: 'mid-ir',
      name: 'Mid Infrared', 
      hex: '#DC143C', 
      wavelength: 850, 
      frequency: 3.53e14,
      type: 'Infrared Ray',
      category: 'infrared',
      description: 'Thermal imaging',
      energyLevel: 'very-low',
      rgb: { r: 220, g: 20, b: 60 }
    },
    { 
      id: 'deep-ir',
      name: 'Deep Infrared', 
      hex: '#8B0000', 
      wavelength: 1000, 
      frequency: 3.00e14,
      type: 'Infrared Ray',
      category: 'infrared',
      description: 'Deep heat signature',
      energyLevel: 'very-low',
      rgb: { r: 139, g: 0, b: 0 }
    },
    { 
      id: 'far-ir',
      name: 'Far Infrared', 
      hex: '#FF6347', 
      wavelength: 2000, 
      frequency: 1.50e14,
      type: 'Infrared Ray',
      category: 'infrared',
      description: 'Long-wave thermal radiation',
      energyLevel: 'ultra-low',
      rgb: { r: 255, g: 99, b: 71 }
    },

    // Ultraviolet range (10-380nm)
    { 
      id: 'near-uv',
      name: 'Near Ultraviolet', 
      hex: '#7B68EE', 
      wavelength: 380, 
      frequency: 7.89e14,
      type: 'Ultraviolet Ray',
      category: 'ultraviolet',
      description: 'UV-A, blacklight',
      energyLevel: 'very-high',
      rgb: { r: 123, g: 104, b: 238 }
    },
    { 
      id: 'mid-uv',
      name: 'Mid Ultraviolet', 
      hex: '#6A5ACD', 
      wavelength: 320, 
      frequency: 9.38e14,
      type: 'Ultraviolet Ray',
      category: 'ultraviolet',
      description: 'UV-B, sunburn radiation',
      energyLevel: 'extreme',
      rgb: { r: 106, g: 90, b: 205 }
    },
    { 
      id: 'far-uv',
      name: 'Far Ultraviolet', 
      hex: '#483D8B', 
      wavelength: 280, 
      frequency: 1.07e15,
      type: 'Ultraviolet Ray',
      category: 'ultraviolet',
      description: 'UV-C, germicidal',
      energyLevel: 'extreme',
      rgb: { r: 72, g: 61, b: 139 }
    },
    { 
      id: 'deep-uv',
      name: 'Deep Ultraviolet', 
      hex: '#2F4F4F', 
      wavelength: 200, 
      frequency: 1.50e15,
      type: 'Ultraviolet Ray',
      category: 'ultraviolet',
      description: 'Vacuum UV, ozone layer absorption',
      energyLevel: 'extreme',
      rgb: { r: 47, g: 79, b: 79 }
    },

    // X-ray range (0.01-10nm)
    { 
      id: 'soft-xray',
      name: 'Soft X-ray', 
      hex: '#708090', 
      wavelength: 10, 
      frequency: 3.00e16,
      type: 'X-Ray',
      category: 'xray',
      description: 'Medical imaging',
      energyLevel: 'ultra-extreme',
      rgb: { r: 112, g: 128, b: 144 }
    },
    { 
      id: 'hard-xray',
      name: 'Hard X-ray', 
      hex: '#C0C0C0', 
      wavelength: 0.1, 
      frequency: 3.00e18,
      type: 'X-Ray',
      category: 'xray',
      description: 'Bone penetration',
      energyLevel: 'ultra-extreme',
      rgb: { r: 192, g: 192, b: 192 }
    },
    { 
      id: 'medical-xray',
      name: 'Medical X-ray', 
      hex: '#E6E6FA', 
      wavelength: 0.01, 
      frequency: 3.00e19,
      type: 'X-Ray',
      category: 'xray',
      description: 'High-energy medical imaging',
      energyLevel: 'ultra-extreme',
      rgb: { r: 230, g: 230, b: 250 }
    },

    // Gamma ray range (<0.01nm)
    { 
      id: 'soft-gamma',
      name: 'Soft Gamma', 
      hex: '#FFD700', 
      wavelength: 0.001, 
      frequency: 3.00e20,
      type: 'Gamma Ray',
      category: 'gamma',
      description: 'Nuclear decay radiation',
      energyLevel: 'cosmic',
      rgb: { r: 255, g: 215, b: 0 }
    },
    { 
      id: 'hard-gamma',
      name: 'Hard Gamma', 
      hex: '#F8F8FF', 
      wavelength: 0.0001, 
      frequency: 3.00e21,
      type: 'Gamma Ray',
      category: 'gamma',
      description: 'High-energy nuclear radiation',
      energyLevel: 'cosmic',
      rgb: { r: 248, g: 248, b: 255 }
    },
    { 
      id: 'cosmic-ray',
      name: 'Cosmic Ray', 
      hex: '#000000', 
      wavelength: 0.00001, 
      frequency: 3.00e22,
      type: 'Cosmic Ray',
      category: 'cosmic',
      description: 'Highest energy electromagnetic radiation',
      energyLevel: 'cosmic',
      rgb: { r: 0, g: 0, b: 0 }
    }
  ],

  // Ray type icons
  rayTypeIcons: {
    'Visible Light': '👁️',
    'Infrared Ray': '🔥',
    'Ultraviolet Ray': '☀️',
    'X-Ray': '🦴',
    'Gamma Ray': '⚡',
    'Cosmic Ray': '🌌'
  },

  // Energy level descriptions
  energyLevels: {
    'ultra-low': { description: 'Very low energy, long wavelength', color: '#8B0000' },
    'very-low': { description: 'Low energy, infrared', color: '#A52A2A' },
    'low': { description: 'Low energy, red spectrum', color: '#FF0000' },
    'low-medium': { description: 'Moderate energy, warm colors', color: '#FF8C00' },
    'medium': { description: 'Medium energy, green-yellow', color: '#FFFF00' },
    'medium-high': { description: 'Higher energy, blue spectrum', color: '#00BFFF' },
    'high': { description: 'High energy, blue-violet', color: '#0000FF' },
    'very-high': { description: 'Very high energy, UV range', color: '#8A2BE2' },
    'extreme': { description: 'Extreme energy, dangerous UV', color: '#4B0082' },
    'ultra-extreme': { description: 'Ultra-high energy, X-rays', color: '#708090' },
    'cosmic': { description: 'Cosmic energy, gamma rays', color: '#FFD700' }
  },

  // Utility functions
  getAllColors: function() {
    return [...this.visibleSpectrum, ...this.nonVisibleSpectrum];
  },

  getColorById: function(id) {
    return this.getAllColors().find(color => color.id === id);
  },

  getColorByWavelength: function(wavelength) {
    return this.getAllColors().find(color => 
      Math.abs(color.wavelength - wavelength) < 10
    ) || this.getClosestColorByWavelength(wavelength);
  },

  getClosestColorByWavelength: function(wavelength) {
    const allColors = this.getAllColors();
    return allColors.reduce((closest, color) => {
      const currentDiff = Math.abs(color.wavelength - wavelength);
      const closestDiff = Math.abs(closest.wavelength - wavelength);
      return currentDiff < closestDiff ? color : closest;
    });
  },

  getColorsByCategory: function(category) {
    return this.getAllColors().filter(color => color.category === category);
  },

  getColorsByType: function(type) {
    return this.getAllColors().filter(color => color.type === type);
  },

  getVisibleColors: function() {
    return this.visibleSpectrum;
  },

  getNonVisibleColors: function() {
    return this.nonVisibleSpectrum;
  },

  getRayIcon: function(type) {
    return this.rayTypeIcons[type] || '🌈';
  },

  getEnergyLevelInfo: function(level) {
    return this.energyLevels[level] || { description: 'Unknown energy level', color: '#808080' };
  },

  // Convert frequency to wavelength (nm)
  frequencyToWavelength: function(frequency) {
    const SPEED_OF_LIGHT = 299792458; // m/s
    const wavelengthMeters = SPEED_OF_LIGHT / frequency;
    return wavelengthMeters * 1e9; // convert to nanometers
  },

  // Convert wavelength to frequency (Hz)
  wavelengthToFrequency: function(wavelength) {
    const SPEED_OF_LIGHT = 299792458; // m/s
    const wavelengthMeters = wavelength / 1e9; // convert from nm to meters
    return SPEED_OF_LIGHT / wavelengthMeters;
  },

  // Get color information for any wavelength/frequency
  getColorForWavelength: function(wavelength) {
    // First try to find exact or close match
    let color = this.getColorByWavelength(wavelength);
    
    if (!color) {
      // Generate color data for wavelength
      color = this.generateColorForWavelength(wavelength);
    }
    
    return color;
  },

  // Generate color data for any wavelength
  generateColorForWavelength: function(wavelength) {
    const frequency = this.wavelengthToFrequency(wavelength);
    
    // Determine category and type
    let category, type, energyLevel, description;
    
    if (wavelength >= 380 && wavelength <= 700) {
      category = 'visible';
      type = 'Visible Light';
      energyLevel = this.getEnergyLevelForWavelength(wavelength);
      description = 'Visible spectrum';
    } else if (wavelength > 700) {
      category = 'infrared';
      type = 'Infrared Ray';
      energyLevel = 'very-low';
      description = 'Infrared radiation';
    } else if (wavelength > 10) {
      category = 'ultraviolet';
      type = 'Ultraviolet Ray';
      energyLevel = 'extreme';
      description = 'Ultraviolet radiation';
    } else if (wavelength > 0.01) {
      category = 'xray';
      type = 'X-Ray';
      energyLevel = 'ultra-extreme';
      description = 'X-ray radiation';
    } else {
      category = 'gamma';
      type = 'Gamma Ray';
      energyLevel = 'cosmic';
      description = 'Gamma radiation';
    }

    // Generate RGB color
    const rgb = this.wavelengthToRGB(wavelength);
    const hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);

    return {
      id: `generated-${wavelength}`,
      name: this.generateColorName(wavelength),
      hex: hex,
      wavelength: wavelength,
      frequency: frequency,
      type: type,
      category: category,
      description: description,
      energyLevel: energyLevel,
      rgb: rgb
    };
  },

  // Generate color name based on wavelength
  generateColorName: function(wavelength) {
    if (wavelength >= 620 && wavelength <= 700) return 'Red';
    if (wavelength >= 590 && wavelength < 620) return 'Orange';
    if (wavelength >= 570 && wavelength < 590) return 'Yellow';
    if (wavelength >= 495 && wavelength < 570) return 'Green';
    if (wavelength >= 450 && wavelength < 495) return 'Blue';
    if (wavelength >= 380 && wavelength < 450) return 'Violet';
    if (wavelength > 700) return 'Infrared';
    if (wavelength < 380) return 'Ultraviolet';
    return 'Unknown';
  },

  // Get energy level for wavelength
  getEnergyLevelForWavelength: function(wavelength) {
    if (wavelength >= 620) return 'low';
    if (wavelength >= 580) return 'low-medium';
    if (wavelength >= 520) return 'medium';
    if (wavelength >= 470) return 'medium-high';
    if (wavelength >= 430) return 'high';
    return 'very-high';
  },

  // Convert wavelength to RGB (improved algorithm)
  wavelengthToRGB: function(wavelength) {
    let r = 0, g = 0, b = 0;
    
    if (wavelength >= 380 && wavelength <= 700) {
      // Visible spectrum
      if (wavelength >= 380 && wavelength < 440) {
        r = -(wavelength - 440) / (440 - 380);
        g = 0;
        b = 1;
      } else if (wavelength >= 440 && wavelength < 490) {
        r = 0;
        g = (wavelength - 440) / (490 - 440);
        b = 1;
      } else if (wavelength >= 490 && wavelength < 510) {
        r = 0;
        g = 1;
        b = -(wavelength - 510) / (510 - 490);
      } else if (wavelength >= 510 && wavelength < 580) {
        r = (wavelength - 510) / (580 - 510);
        g = 1;
        b = 0;
      } else if (wavelength >= 580 && wavelength < 645) {
        r = 1;
        g = -(wavelength - 645) / (645 - 580);
        b = 0;
      } else if (wavelength >= 645 && wavelength <= 700) {
        r = 1;
        g = 0;
        b = 0;
      }
    } else {
      // Non-visible spectrum
      const logWavelength = Math.log10(wavelength);
      
      if (wavelength < 380) {
        // UV and higher energy
        if (wavelength < 1) {
          // Gamma rays - White/Gold
          const intensity = Math.max(0.3, Math.min(1, -logWavelength / 15));
          r = intensity;
          g = intensity * 0.9;
          b = intensity * 0.5;
        } else if (wavelength < 10) {
          // X-rays - Silver/Gray
          const intensity = Math.max(0.2, Math.min(0.9, -logWavelength / 10));
          r = intensity * 0.8;
          g = intensity * 0.8;
          b = intensity;
        } else {
          // UV - Purple/Violet
          const intensity = Math.max(0.3, Math.min(1, (380 - wavelength) / 200));
          r = intensity * 0.6;
          g = intensity * 0.2;
          b = intensity;
        }
      } else {
        // IR - Red/Orange tints
        if (wavelength > 1000000) {
          // Very long waves (radio) - Dark Red
          const intensity = Math.max(0.1, Math.min(0.7, 10 / logWavelength));
          r = intensity;
          g = intensity * 0.1;
          b = intensity * 0.1;
        } else if (wavelength > 10000) {
          // Far IR - Orange/Red
          const intensity = Math.max(0.3, Math.min(0.8, 6 / logWavelength));
          r = intensity;
          g = intensity * 0.4;
          b = intensity * 0.1;
        } else {
          // Near IR - Red
          const intensity = Math.max(0.4, Math.min(1, (1000 - wavelength) / 500));
          r = intensity;
          g = intensity * 0.3;
          b = intensity * 0.1;
        }
      }
    }
    
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  },

  // Convert RGB to hex
  rgbToHex: function(r, g, b) {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
  }
};
