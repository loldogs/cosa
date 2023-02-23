canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {


background_image = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;


rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.onload = rover_image;

    }


    function uploadBackground() {

        ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
    }

    function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    }


    window.addEventListener("keydown", my_keydown);
function my_keydown(e)

{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38")
    {
        up();
        console.log ("arriba");
    }
    if(keyPressed == "40")
    {
          down();
          console.log("abajo");

    }
    if (keyPressed == "37")
    {
        left();
        console.log("izquierda");
    }
    if (keyPressed == "39")
    {
        right();
        console.log("derecha");
    }
}


function down()

{
    if(rover_y <=500)
    {
rover_y -rover_y+ 10;

console.log ("Cuando se presione la flecha hacia abajo, x = " + rover_x +" y = " +rover_y);
uploadBackground();
uploadrover();

    }


}

function up()


{
                                                                   
    if(rover_y <=0)
    {
rover_y -rover_y+ 10;

console.log ("Cuando se presione la flecha hacia arriba, x = " + rover_x +" y = " +rover_y);
uploadBackground();
uploadrover();
}

}


function right()
{
    if(rover_x <=700)
    {
rover_x -rover_x+ 10;

console.log ("Cuando se presione la flecha derecha, x = " + rover_x +" y = " +rover_y);
uploadBackground();
uploadrover(); 
}
}



function left()
{
    if(rover_x <=500)
    {
rover_x -rover_x+ 10;

console.log ("Cuando se presione la flecha hacia abajo, x = " + rover_x +" y = " +rover_y);
uploadBackground();
uploadrover(); 
}
}


nasa_mars_images_array = ["mars.jpg, th (1).jpeg, "];
random_number = Math.floor(Math.random()* 4)
background_image =nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);




