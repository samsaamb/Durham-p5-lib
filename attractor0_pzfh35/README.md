# Attractor 0 Documentation // pzfh35 #
## Description ##
---
P5 animation that generates magnetic particles with the cursor acting as a magnet. The hue, magnetism and acceleration of the particles can be changed.

## Sketch Class Arguments ##
---
#### constructor()
```
  Takes no parameters, there is nothing that needs to be passed in, the constructor just sets the settings for the sketch.
```
#### draw()
```
  Takes no parameters, just re-calculates and redraws all of the particles.
```
#### getters/setters
```
  No variables specific to each sketch, each sketch obeys global settings for the hue/magnetism/acceleration.
```

## Particle Class Arguments ##
---
### constructor(x, y)
```
  Takes 2 parameters, the particle's x position and it's y position, which are randomly generated to be anywhere on the screen.
  The rest of the particle's properties (velocity in x direction, velocity in y direction, acceleration in x direction, acceleration in y direction) are defaulted to 0 and always will be, hence there is no parameter for them in the constructor.
```
### update()
```
  Takes no parameters, the particle is updated based on the distance from the particle to the cursor. Magnetism is used as a factor here to determine how attracted/repulsed the particle is depending on the distance.
```
### draw(paint)
```
  Takes 'paint' as a parameter, expected to be a graphics object. If the object is passed in it will do something, and if not it will do something else (not actually coded, but functionality is provided).
```
### Encapsulation
```
  All of the variables of the particle class are encapsulated with getter and setter methods. There was no use for these methods in this instance, but functionality is provided.
```

## Example page ##
---
  The example page is easy to use. The particles will generate and then follow the cursor around. The magnetism, hue and acceleration are controlled by HTML form controls and are labelled respectively. Refresh to reset the page.


## ESLint Output ##
---
```
  [eslint] 'setup' is defined but never used. [no-unused-vars] (11,10)
  [eslint] 'draw' is defined but never used. [no-unused-vars] (16,10)
```
Errors are given by ESLint not understanding that the setup and draw functions are called by p5.

## HTML Validation ##
---
HTML Validation output:
Document checking completed. No errors or warnings to show.

## Source ##
#### Attractor 0 by Masaki Yamabe: https://www.openprocessing.org/sketch/394718

---
## License
```
"Attractor 0" by Masaki Yamabe https://www.openprocessing.org/sketch/394718 
Licensed under Creative Commons Attribution ShareAlike
https://creativecommons.org/licenses/by-sa/3.0
https://creativecommons.org/licenses/GPL/2.0/
```