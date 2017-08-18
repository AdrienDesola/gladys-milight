var Milight = require('node-milight-promise').MilightController;
var discoverBridges = require('node-milight-promise').discoverBridges;
var Commands = require('node-milight-promise').commandsV6;

var Promise = require('bluebird');
var init = require('./milight.init.js');

module.exports = function() {
  console.log('Gladys Milight SETUP')
  discoverBridges({
    type: 'all'
  })
  .then( bridges =>
    bridges.map(bridge => gladys.device.create({
      device: {
        name: 'Milight bridge',
        protocol: 'wifi',
        service: 'milight',
        identifier: bridge.ip,
        type: bridge.type
      },
      types: []
    }))
  )
  .then(devices => {
    devices.forEach((device, index) =>
    [1, 2, 3, 4].map(zone =>
      gladys.device.create({
        device: {
          name: `bridge ${device.id} > zone ${zone}`,
          protocol: 'milight',
          service: 'milight',
          identifier: device.ip,
          type: device.type
        },
        types: [] || [
          {
            {
            identifier: 1,
            type: 'binary',
            unit: 'toggle',
            min: 0,
            max: 1
          }
        },
          {
            {
            identifier: 2,
            type:'hue',
            unit: 'color',
            min: 0,
            max: 255
          }
        },
          {
            {
            identifier: 3,
            type:'brightness',
            unit: 'brightness',
            min: 0,
            max: 100
          }
        }
        ]
      })))
      return devices
    })
    .then(devices =>
      devices.map(devices => new Milight({
        ip: devices.identifier,
        name: devices.name,
        type: devices.type,
        blink(zone, color) {

          this.sendCommands(Commands.rgbw.on(zone));
          this.sendCommands(Commands.rgbw.hue(zone, color));
          this.sendCommands(Commands.rgbw.brightness(zone, 10));

          this.pause(250);

          for (var i = 0; i < 3; i++) {
            this.sendCommands(Commands.rgbw.brightness(zone, 100));
            this.pause(500);
            this.sendCommands(Commands.rgbw.brightness(zone, 10));
            this.pause(500);
          }
        }
      })
    )
  ).then(bridges => {
    bridges.map(light => {
      [1, 2, 3, 4].map( zone => light.blink(zone, 100));
      light.close().then(function () {
        console.log("All command have been executed - closing Milight");
      });
    })
  })
}
