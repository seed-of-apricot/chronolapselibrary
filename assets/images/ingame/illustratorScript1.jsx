// Script Start
var document = app.activeDocument;
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;

function imageTrace() {
  var item = document.pageItems[0];
  document.selection = item;
  var trace = item.trace();
  trace.tracing.tracingOptions.loadFromPreset("Civ6");
  trace.tracing.expandTracing();
}

function deleteCompound() {
  document.compoundPathItems[0].remove();
  var item = document.pageItems[0];
  item.position = [-1280, 0];
  var size = 1280;
  item.width = size / 2;
  item.height = size;
}

imageTrace();
deleteCompound();
// Script End
