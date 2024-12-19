export function calculateShaftWeight(
  diameter: number,
  length: number,
  density: number
): number {
  // Convert mm to cm for volume calculation
  const volume = Math.PI * Math.pow(diameter/2, 2) * length / 1000000; // cm³
  return volume * density;
}