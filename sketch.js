var canvas;
var click1;
var click2;
var click3;
var click4;


function preload(){

}
function setup() {
  createCanvas(400, 400);

  //Create, style and resize clickables.
  click1 = new Clickable();
  click1.locate(20, 200);
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function () {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Fun!";
  }
  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Attractions";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  click1.onPress = function () {
    this.stroke = "#FF0000";
  }
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function () {
  }

  click2 = new Clickable();
  click2.cornerRadius = 0;
  click2.locate(60, 60);
  click2.textScaled = true;
  click2.text = "LA";
  click2.resize(250, 100);
  click2.onOutside = function () {
    this.color = "#FFFFFF";
  }
  click2.onHover = function () {
    this.color = "#AA33AA";
  }
  click2.onPress = function () {
    alert("Welcome to Los Angeles!");
  }


    //Create, style and resize clickables.
    click3 = new Clickable();
    click3.locate(150, 200);
    //This function is ran when the clickable is hovered but not pressed.
    click3.onHover = function () {
      this.color = "#AAAAFF";
      this.textColor = "#FFFFFF";
      this.text = "Yum!";
    }
    //This function is ran when the clickable is NOT hovered.
    click3.onOutside = function () {
      this.color = "#EEEEEE";
      this.text = "Food";
      this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click3.onPress = function () {
      this.stroke = "#FF0000";
    }
    //This funcion is ran when the cursor was pressed and then
    //rleased inside the clickable. If it was pressed inside and
    //then released outside this won't work.
    click3.onRelease = function () {
    }

    //Create, style and resize clickables.
    click4 = new Clickable();
    click4.locate(280, 200);
    //This function is ran when the clickable is hovered but not pressed.
    click4.onHover = function () {
      this.color = "#AAAAFF";
      this.textColor = "#FFFFFF";
      this.text = "Souvenirs!";
    }
    //This function is ran when the clickable is NOT hovered.
    click4.onOutside = function () {
      this.color = "#EEEEEE";
      this.text = "Shopping";
      this.textColor = "#000000";
    }
    //This function is ran when the clickable is pressed.
    click4.onPress = function () {
      this.stroke = "#FF0000";
    }
    //This funcion is ran when the cursor was pressed and then
    //rleased inside the clickable. If it was pressed inside and
    //then released outside this won't work.
    click4.onRelease = function () {

    }
}

function draw() {
  background(0);
  click1.draw();
  click2.draw();
  click3.draw();
  click4.draw();
}
