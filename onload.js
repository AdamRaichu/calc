var myGraph = new Graph({
  canvasId: "myCanvas",
  minX: -10,
  minY: -10,
  maxX: 10,
  maxY: 10,
  unitsPerTick: 1
});

var fList = AR.$$("div.f span span[contenteditable=true]")
var colors = AR.$$("div.f input[type=color]")

for (c = 0; c < fList.length; c++) {
  myGraph.drawEquation(function (x) {
    return eval(fList[c].innerText);
  }, colors[c], 3);
}