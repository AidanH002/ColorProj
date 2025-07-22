// Conversion utilities based on formulas from the Formulas folder

export const ConversionUtils = {
  // Speed of light constant (meters per second)
  SPEED_OF_LIGHT: 299792458.0,

  // Convert frequency (Hz) to wavelength (nanometers)
  frequencyToWavelength: (frequency) => {
    const wavelength = ConversionUtils.SPEED_OF_LIGHT / frequency;
    const nmWavelength = wavelength * 1e9; // convert to nanometers
    return nmWavelength;
  },

  // Convert wavelength (nanometers) to frequency (Hz)
  wavelengthToFrequency: (wavelength) => {
    const metersWavelength = wavelength / 1e9; // convert to meters
    const frequency = ConversionUtils.SPEED_OF_LIGHT / metersWavelength;
    return frequency;
  },

  // Convert Hertz to angle degrees
  hertzToAngle: (hertz) => {
    const swnhc = 2 * Math.PI * hertz;
    const swn = swnhc / 432;
    const angleRadians = swn / (2 * Math.PI);
    const angleDegrees = angleRadians * 180 / Math.PI;
    return angleDegrees;
  },

  // Convert angle degrees to Hertz
  angleToHertz: (angleDegrees) => {
    const angleRadians = angleDegrees * Math.PI / 180;
    const swn = angleRadians * 2 * Math.PI;
    const swnhc = swn * 432;
    const hertz = swnhc / (2 * Math.PI);
    return hertz;
  },

  // Convert degrees to nanometers (with frequency and speed parameters)
  degreesToNanometers: (degrees, frequency, speed) => {
    const radians = degrees * 0.017453293;
    const swn = 2.0 * Math.PI * frequency * Math.pow(10, -11);
    const swnhc = swn * speed;
    const swnhcs = 343.0 / swnhc;
    const swl = 299792458.0 / swnhcs;
    const nm = swl / 1000.0;
    return nm;
  },

  // Convert wavelength to frequency for different units
  convertWavelength: (value, fromUnit, toUnit) => {
    // Convert input to meters first
    let meters;
    switch (fromUnit) {
      case 'nm':
        meters = value * 1e-9;
        break;
      case 'μm':
        meters = value * 1e-6;
        break;
      case 'mm':
        meters = value * 1e-3;
        break;
      case 'cm':
        meters = value * 1e-2;
        break;
      case 'm':
        meters = value;
        break;
      default:
        meters = value;
    }

    // Convert meters to target unit
    switch (toUnit) {
      case 'nm':
        return meters * 1e9;
      case 'μm':
        return meters * 1e6;
      case 'mm':
        return meters * 1e3;
      case 'cm':
        return meters * 1e2;
      case 'm':
        return meters;
      case 'Hz':
        return ConversionUtils.SPEED_OF_LIGHT / meters;
      default:
        return meters;
    }
  },

  // Format number for display
  formatNumber: (num, decimals = 2) => {
    if (isNaN(num) || !isFinite(num)) return '0';
    
    if (num >= 1e9) {
      return (num / 1e9).toFixed(decimals) + 'G';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(decimals) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(decimals) + 'K';
    } else if (num < 0.01 && num > 0) {
      return num.toExponential(2);
    } else {
      return num.toFixed(decimals);
    }
  }
};
