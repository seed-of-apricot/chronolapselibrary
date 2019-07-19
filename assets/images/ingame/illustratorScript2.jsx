// Script Start
var document = app.activeDocument;
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;

function moveToCenter() {
  var item = document.pageItems[0];
  item.position = [0, 0];
  var size = 1280;
  item.width = size;
  item.height = size;
  item.resize(77, 77);
}

// function rotate() {
//   var item = document.pageItems[0];
//   var degree = prompt("rotation", "0");
//   item.rotate(degree);
// }

function moveToBack() {
  var item = document.pageItems[0];
  var itemTo = document.groupItems.getByName("Inner").pathItems[0];
  item.move(itemTo, ElementPlacement.PLACEAFTER);
  document.selection = document.groupItems.getByName("Inner").groupItems[0];
}

moveToCenter();
// rotate();
moveToBack();
// Script End
