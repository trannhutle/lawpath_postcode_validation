export const isPostCodeMatchedLocation = (valueA, valueB) => {
  return parseInt(valueA) === parseInt(valueB);
};

export const isLocationMatchedState = (valueA, valueB) => {
  return valueA.toLowerCase() === valueB.toLowerCase();
};

export const locationValidator = (attributeValidators, locations, compareToLocation) => {
  const errors = {};
  // Get validators
  Object.keys(attributeValidators).map((validator) => {
    // Find the last match one
    const matchSurburb = locations.reduce((foundLocation, currentLocation) => {
      // Pass values for comparitor
      if (attributeValidators[validator](currentLocation[validator], compareToLocation[validator])) {
        return true;
      }
      return foundLocation;
    }, false);
    errors[validator] = !matchSurburb;
  });
  return errors;
};
