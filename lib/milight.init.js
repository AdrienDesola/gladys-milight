var shared = require('./milight.shared.js');
var Milight = require('./milight.class.js')
var Promise = require('bluebird');

var commandsV6 = require('node-milight-promise').commandsV6.fullColor;
var commands2 = require('node-milight-promise').commands2.rgbw;


module.exports = function init() {
  return gladys.device.getByService({service: 'milight'})
  .then((devices) => {
    // reset the bridge array
    shared.bridges = [];

    // foreach device, if the device
    // is a bridge we add the IP of the bridge to the array
    devices
    .filter( ({ protocol }) => protocol === 'wifi')
    .map(bridge => shared.bridges[bridge.id] = new Milight({
      ip: bridge.identifier.split(':')[0],
      type: bridge.identifier.split(':')[1]
    }));
  }).catch(console.error);
};
