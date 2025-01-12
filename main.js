let currentWidth = 0;
let currentHeight = 0;
let directionX = -1;
let directionY = 1;
let multiplierX = 4;
let multiplierY = 8;
let widthModifier = 0;
let heightModifier = 0;
let mySound;

function preload(){
    soundFormats('mp3');
    mySound = loadSound('ball_sound')
}

function setup(){
    createCanvas(500, 500);
    currentWidth = width/2;
    currentHeight = height/2;
    frameRate(60);
    circle(currentWidth, currentHeight, 50);   
    fill('#fae');
}

function draw(){
    background(255, 255, 255);
    if(currentWidth >= width - 50 || currentWidth <= 50){
        directionX = directionX * -1;
        currentWidth += widthModifier * directionX;
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        mySound.play();
    }
    if(currentHeight >= height - 50 || currentHeight <= 50){
        directionY = directionY * -1;
        currentHeight += heightModifier * directionY;
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);     
    }
    widthModifier = random(1,2) * multiplierX;
    heightModifier = random(1,2) * multiplierY;

    currentWidth = currentWidth + widthModifier * directionX;
    currentHeight = currentHeight + heightModifier * directionY;
    circle(currentWidth, currentHeight, 50);
}