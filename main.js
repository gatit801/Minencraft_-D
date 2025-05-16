
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 0;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_objet= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img) {
        
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}


function new_image(){
    fabric.Image.fromURL("yellow_wall.png",function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);   
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });

}
new_image()

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;

    	if(keyPressed == "40"){
		down();
		console.log("down")
	}

    
    	if(keyPressed == "38"){
		up();
		console.log("up")
	}

        
    	if(keyPressed == "39"){
		right();
		console.log("right")
	}

            
    	if(keyPressed == "37"){
		left();
		console.log("left")
	}

}

function down(){
    if(player_y <=500){
        player_y = player_y + block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function up(){
    if(player_y >=-10){
        player_y = player_y - block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function right(){
    if(player_x <= 900){
        player_x = player_x + block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha la derecha arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function left(){
    if(player_x >= -10){
        player_x = player_x - block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha la derecha arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}
