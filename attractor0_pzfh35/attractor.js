/* eslint-disable no-undef */
var num = 2000;
var particleList = new Array();
var paint;
var hueSlider, magnetismSlider, accelerationSlider;
var hueVal = 50;
var magnetism = 10;
const radius = 0.7;
var acceleration = 50;

function setup(){
    example = new Sketch();
    //runSetup();
}

function draw(){
    example.draw();
}

function generateParticles() {
    for(var i=0; i<num; i++) {
        x = random(width);
        y = random(height);
        let p = new Particle(x, y);
        particleList.push(p);
    }
}

function getSliderValues() {
    hueSlider = document.getElementById('hueVal');
    hueVal = hueSlider.value;

    magnetismSlider = document.getElementById('magnetism');
    magnetism = magnetismSlider.value;

    accelerationSlider = document.getElementById('acceleration');
    acceleration = accelerationSlider.value/100;
}

class Sketch{
    constructor() {
        createCanvas(windowWidth,windowHeight);
        paint = createGraphics(windowWidth, windowHeight);
        paint.colorMode(HSB, 100);
        paint.fill(hueVal, 100, 100);
        paint.noStroke();
        paint.blendMode(SOFT_LIGHT);
        noStroke(); 
        fill(0);
        ellipseMode(RADIUS);
        background(0);
        colorMode(HSB, 100);
        generateParticles();
    }

    draw() {
        background(0);
        getSliderValues();
        for(var i=0; i<num; i++) {
            particleList[i].update();
            particleList[i].draw(paint);
        }
        image(paint, 0, 0);
    }
}

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }
    update() {
        var distance = dist(mouseX, mouseY, this.x, this.y); 
        if(distance > 3){
            this.ax = magnetism * (mouseX - this.x) / (distance * distance); 
            this.ay = magnetism * (mouseY - this.y) / (distance * distance);
        }
        this.vx += this.ax;
        this.vy += this.ay;
    
        this.vx = this.vx*acceleration;
        this.vy = this.vy*acceleration;
    
        this.x += this.vx; 
        this.y += this.vy;

    }

    //paint doesn't do anything, but it could be changed so that it does something different if paint isn't passed into particle.draw
    draw(paint){
        if (paint) {
            paint.fill(hueVal, 100, 100);
            paint.ellipse(this.x, this.y, radius, radius);
        }
        else {
            fill(hueVal, 100, 100);
            ellipse(this.x, this.y, radius, radius);
        }
    }
    //use of encapsulation was not required for this code but functionality is provided.
    getX() {return this.x;}
    setX(x) {this.x = x;}

    getY() {return this.y;}
    setY(y) {this.y = y;}

    getVx() {return this.vx;}
    setVx(vx) {this.vx = vx;}

    getVy() {return this.vy;}
    setVy(vy) {this.vy = vy;}

    getAx() {return this.ax;}
    setAx(ax) {this.ax = ax;}

    getAy() {return this.ay;}
    setAy(ay) {this.ay = ay;}
}