var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";

block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(120);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;

    if(e.shiftKey == true && keypressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("shift and p");
    }

    if(e.shiftKey == true && keypressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("shift and m");
    }

    if(keypressed == '37'){
        left();
    }

    if(keypressed == '38'){
        up();
    }

    if(keypressed == '39'){
        right();
    }

    if(keypressed == '40'){
        down();
    }

    if(keypressed == '87'){
        new_image('wall.jpg');
        console.log("w for wall");
    }

    if(keypressed == '71'){
        new_image('ground.png');
        console.log("g for ground");
    }

    if(keypressed == '76'){
        new_image('light_green.png');
        console.log("l for light green");
    }

    if(keypressed == '84'){
        new_image('trunk.jpg');
        console.log("t for trunk");
    }

    if(keypressed == '82'){
        new_image('roof.jpg');
        console.log("r for roof");
    }

    if(keypressed == '89'){
        new_image('yellow_wall.png');
        console.log("y for yellow wall");
    }

    if(keypressed == '68'){
        new_image('dark_green.png');
        console.log("d for dark green");
    }

    if(keypressed == '85'){
        new_image('unique.png');
        console.log("u for unique");
    }

    if(keypressed == '67'){
        new_image('cloud.jpg');
        console.log("c for cloud");
    }

    if(keypressed == '90'){
        canvas.remove(block_object);
        console.log("z for delete");
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 500){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 700){
        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();
    }
}

download_img = function(el){
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
}