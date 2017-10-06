# Gladys-Milight

Gladys Milight.
This module allows you to control your milight lamps in Gladys.

You can found [here](https://www.amazon.fr/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&camp=1642&creative=6746&index=aps&keywords=milight&linkCode=as2&tag=gladproj-21).

# Gladys Milight V6
## Installation
### Step: 1
Install the module in Gladys
Reboot Gladys

### Step: 2
Go on the dashboard on "Module" view, then in the module list press the "config" button on the Milight module.

### Step: 3
there is no step 3
All your devices are already configured.

Go on the dashboard on « Devices » view and start using it.

## Hack n Scripts
Gladys Milight V6 are easy to use on " Scripts " view.
you can use all of Milight methods.

```
const bridge = gladys.modules['milight'].getBridge( <bridgeId> );

bridge.on(zone);
bridge.off(zone);
bridge.whiteMode(zone);
bridge.whiteTemperature(zone, 100); // 0 to 100;
bridge.nightMode(zone);
bridge.brightness(zone, 100); // 0 to 100
bridge.saturation(zone, 100); 0 to 100
bridge.hue(zone, 255); 0 to 255
bridge.rgb(zone, 255, 255, 255);
bridge.effectMode(zone, 9); 1 to 9
bridge.effectModeNext(zone);
bridge.effectSpeedUp(zone);
bridge.effectSpeedDown(zone);
```


Les ampoules milight sont des ampoules low cost de bonne facture !
Elles ne valent pas les Philips Hue, mais pour leur prix elle font largement l'affaire.

Vous trouverez les ampoules [Milight ici](https://www.amazon.fr/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&camp=1642&creative=6746&index=aps&keywords=milight&linkCode=as2&tag=gladproj-21).

# Gladys Milight V6
## Installation
### Etape: 1
Installer le module dans Gladys
Redemarer Gladys

### Etape: 2
Aller sur la page Module, et appuyez sur le button Config du module Milight.

### Etape: 3
there is no step 3

Toutes vos lampes sont prêtes.
 Aller sur la page Devices pour commencé a les utiliser.

## Hack n Scripts
Ce module est très simple a utiliser avec les Scripts Gladys.
Aller sur la page Script

```
const bridge = gladys.modules['milight'].getBridge( <bridgeId> );

bridge.on(zone);
bridge.off(zone);
bridge.whiteMode(zone);
bridge.whiteTemperature(zone, 100); // 0 to 100;
bridge.nightMode(zone);
bridge.brightness(zone, 100); // 0 to 100
bridge.saturation(zone, 100); 0 to 100
bridge.hue(zone, 255); 0 to 255
bridge.rgb(zone, 255, 255, 255);
bridge.effectMode(zone, 9); 1 to 9
bridge.effectModeNext(zone);
bridge.effectSpeedUp(zone);
bridge.effectSpeedDown(zone);
```