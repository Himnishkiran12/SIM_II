canvas = document.getElementById("caanvaas");
ctx = canvas.getContext("2d");
var an = 0;
var na = 4;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
document.getElementById("abe_yaar").innerHTML = "WELCOME TO SPACAZON DRONES LTD AGAIN. ONE OF THE DRONES HAS GONE ROGUE, SO YOU NEED TO REPAIR IT WITH YOUR DRONE. GOOD LUCK.";
back_image = "image.png.jpeg";
rover_image = "4.png";
rogue_image = "image-VVkBGg3lgB.png";
rover_x = 20;
rover_y = 20;
rover_h = 70;
rover_w = 90;
rogue_x = 800;
rogue_y = 400;

function aed() {
    back_img = new Image();
    back_img.onload = uploadBackground;
    back_img.src = back_image;
    rover_img = new Image()
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
    rogue_img = new Image()
    rogue_img.onload = uploadrogue;
    rogue_img.src = rogue_image;
}

function uploadBackground() {
    ctx.drawImage(back_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_w, rover_h);
}

function uploadrogue() {
    ctx.drawImage(rogue_img, rogue_x, rogue_y, rover_w, rover_h);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("U P");
    }
    if (keyPressed == '40') {
        down();
        console.log("D O W N");
    }
    if (keyPressed == '37') {
        left();
        console.log("L E F T");
    }
    if (keyPressed == '39') {
        right();
        console.log("R I G H T");
    }
    if (rover_x == rogue_x && rover_y == rogue_y) {
        document.getElementById("abe_yaar").innerHTML = "GOOD JOB HERE. YOU'RE THE ONLY ONE TO DO THIS JOB AND LIVE TO TELL THE TALE. BACAUSE OF THIS, YOU CAN KEEP THE DRONE FOR YOURSELF! IF YOU WANT TO PLAY THIS AGAIN, REFRESH THE PAGE. OR JUST PLAY AROUND WITH THE DRONE SINCE IT'S SO FUN.";
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 20;
        console.log("When up arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrogue()
    }
}

function down() {
    if (rover_y <= 507) {
        rover_y = rover_y + 20;
        console.log("When down arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrogue()
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 20;
        console.log("When left arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrogue()
    }
}

function right() {
    if (rover_x <= 1165) {
        rover_x = rover_x + 20;
        console.log("When right arrow is pressed, X:- " + rover_x + " & Y:- " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrogue()
    }
}