var MilightController = require('node-milight-promise').MilightController;

var commandsV6 = require('node-milight-promise').commandsV6.rgbw;
var commands2 = require('node-milight-promise').commands2.rgbw;

module.exports = class Milight extends MilightController {
  constructor(options) {
    super(options)
    this.commands = this.type === 'v6' ? commandsV6 : commands2;
  }
  toggle(zone, value) {
    value ? this.on(zone) : this.off(zone)
    return this;
  }
  on(zone) {
    this.sendCommands(this.commands.on(zone))
    return this;
  }
  off(zone) {
    this.sendCommands(this.commands.off(zone))
    return this;
  }
  whiteMode(zone, value) {
    value = typeof value !== 'undefined' ? value : 1;
    value && this.sendCommands(this.commands.whiteMode(zone))
    return this;
  }
  whiteTemperature(zone, temperature) {
    this.sendCommands(this.commands.whiteTemperature(zone, temperature))
    return this;
  }
  nightMode(zone, value) {
    value = typeof value !== 'undefined' ? value : 1;
    value && this.sendCommands(this.commands.nightMode(zone))
    return this;
  }
  brightness(zone, percent) {
    if(zone === undefined || zone === 'bridge') zone = percent;
    this.sendCommands(this.commands.brightness(zone, percent))
    return this;
  }
  saturation(zone, saturationValue, invertValue = 1) {
    this.sendCommands(this.commands.saturation(zone, saturationValue, invertValue))
    return this;
  }
  hue(zone, hue, enableLegacyColorWheel = 0) {
    if(zone === undefined || zone === 'bridge') zone = hue;
    this.sendCommands(this.commands.hue(zone, hue, enableLegacyColorWheel))
    return this;
  }
  rgb(zone, r, g, b) {
    if(zone === undefined || zone === 'bridge') { zone = r; r = g; g = b; }
    this.sendCommands(this.commands.rgb(zone, r, g, b))
    return this;
  }
  effectMode(zone, mode) {
    this.sendCommands(this.commands.effectMode(zone, [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09][mode - 1]))
    return this;
  }
  effectModeNext(zone) {
    this.sendCommands(this.commands.effectModeNext(zone))
    return this;
  }
  effectSpeedUp(zone) {
    this.sendCommands(this.commands.effectSpeedUp(zone))
    return this;
  }
  effectSpeedDown(zone) {
    this.sendCommands(this.commands.effectSpeedDown(zone))
    return this;
  }
  delay(time) {
    this.pause(time)
    return this
  }
}
