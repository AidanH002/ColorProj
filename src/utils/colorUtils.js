export function calculateColorFromHertz(hertz) {
  // Example: Convert hertz to a color value
  const wavelength = 300 + (hertz % 400); // Simplified calculation
  return `rgb(${wavelength % 255}, ${(wavelength * 2) % 255}, ${(wavelength * 3) % 255})`;
}

export function degreesToColor(degrees) {
  // Example: Map degrees on the color wheel to RGB
  const red = Math.abs(255 - degrees);
  const green = Math.abs(255 - (degrees + 120) % 360);
  const blue = Math.abs(255 - (degrees + 240) % 360);
  return `rgb(${red}, ${green}, ${blue})`;
}
