song1 = "";
song2 = "";

function preload() 
{
    song1 = loadSound("Peter_Pan_Title_Song.mp3");
    song2 = loadSound("Harry_Potter_Theme_Song.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = craeteCapture(VIDEO);
    video.hide(); 
}

function draw() 
{
    image(video, 0, 0, 600, 500);
}