canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 100;
rover_width = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_image_new = new Image();
    background_image_new.onload = upload_background;
    background_image_new.src = background_image;
    rover_image_new = new Image();
    rover_image_new.onload = upload_rover;
    rover_image_new.src = rover_image;
}

function upload_background() {
    ctx.drawImage(background_image_new, 0, 0, canvas.width, canvas.height)
}
function upload_rover() {
    ctx.drawImage(rover_image_new, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;

    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
}
function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
    }
}
function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
    }
}
function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
    }
}
function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
    }
}
