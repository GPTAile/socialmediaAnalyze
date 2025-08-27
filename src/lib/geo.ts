export const TR_BOUNDS = {
  minLat: 36,
  maxLat: 42,
  minLon: 26,
  maxLon: 45
};

export function project(
  [lat, lon]: [number, number],
  width = 800,
  height = 400
): [number, number] {
  const x = ((lon - TR_BOUNDS.minLon) / (TR_BOUNDS.maxLon - TR_BOUNDS.minLon)) * width;
  const y = height - ((lat - TR_BOUNDS.minLat) / (TR_BOUNDS.maxLat - TR_BOUNDS.minLat)) * height;
  return [x, y];
}
