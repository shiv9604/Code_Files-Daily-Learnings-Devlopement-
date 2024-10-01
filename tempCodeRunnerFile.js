
function isSoftwareCameraFeasible(softwareConfig, hardwareCameras) {
  // Check for valid Input
  if (
    !softwareConfig ||
    !softwareConfig.distance ||
    !softwareConfig.light ||
    !Array.isArray(hardwareCameras) ||
    hardwareCameras.length === 0
  ) {
    return false;
  }

  // Extract distance & light of softwareConfig
  const { distance, light } = softwareConfig;

  // Check if any hardware camera matches config
  let selected = hardwareCameras.some((item) => {
      const minDistance = parseFloat(item.distanceRange.min);
      const maxDistance = parseFloat(item.distanceRange.max);
      const minLight = parseFloat(item.lightRange.min);
      const maxLight = parseFloat(item.lightRange.max);

      const isDistanceMatch =
        distance >= minDistance && distance <= maxDistance;
      const isLightMatch = light >= minLight && light <= maxLight;

      return isDistanceMatch && isLightMatch;
  });

  return selected ? true : false;
}

const config = { distance: '05', light: 95 };

const list = [
  {
    distanceRange: {
      min: '1',
      max: '10',
    },
    lightRange: {
      min: '10',
      max: '100',
    },
  },
];

const result = isSoftwareCameraFeasible(config, list);
console.log(result);
