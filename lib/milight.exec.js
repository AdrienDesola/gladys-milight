var shared = require('./milight.shared.js');

module.exports = function(params) {
  var arr = params.deviceType.identifier.split(':');
  var bridgeId = arr[0];
  var zone = arr[1];

  if(!shared.bridges[bridgeId])
  return Promise.reject(new Error(`Bridge id n°${bridgeId} not found`));

  var light = shared.bridges[bridgeId];

  switch(params.deviceType.type) {
    case 'binary':
      return light.toggle(zone, params.state.value)
    break;
    case 'whiteMode':
      return light.whiteMode(zone, params.state.value)
    break;
    case 'whiteTemperature':
      return light.whiteTemperature(zone, params.state.value)
    break;
    case 'nightMode':
      return light.nightMode(zone, params.state.value)
    break;
    case 'brightness':
      return light.brightness(zone, params.state.value)
    break;
    case 'saturation':
      return light.saturation(zone, params.state.value)
    break;
    case 'hue':
      return light.hue(zone, params.state.value)
    break;
    case 'effectMode':
      return light.effectMode(zone, params.state.value)
    break;
    default:
      return Promise.reject(new Error(`Bridge id n°${bridgeId} device type not found`));
  }
};
