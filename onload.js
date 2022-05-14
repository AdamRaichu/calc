var myGraph = new Graph({
  canvasId: "myCanvas",
  minX: -10,
  minY: -10,
  maxX: 10,
  maxY: 10,
  unitsPerTick: 1
});

function graphEquations() {

  myGraph.clear()

  var fList = AR.$$("div.f span span[contenteditable=true]")
  var colors = AR.$$("div.f input[type=color]")
  for (c = 0; c < fList.length; c++) {
    myGraph.drawEquation(function (x) {
      return eval(fList[c].innerText);
    }, colors[c].value, 3);
  }

}

function getStored() {

  var colors = AR.$$("div.f input[type=color]")

  for (c = 0; c < colors.length; c++) {
    if (localStorage.getItem(colors[c].dataset.storageKey) === null) {
      console.log("No color stored for f #" + (c + 1) + ".")
    } else {
      colors[c].value = localStorage.getItem(colors[c].dataset.storageKey)
    }
  }
}

getStored()
graphEquations()