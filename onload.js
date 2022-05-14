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
      return eval(fList[c].innerText.replace(/Math./g, \u216F).replace(/[a-w y-z A-W Y-Z]/g, "").replace(/X/g, "x").replace(/\u005E/g, "**").replace(/\u216F/, "Math."));
    }, colors[c].value, 3);
    localStorage.setItem(colors[c].dataset.storageKey, colors[c].value)
    localStorage.setItem(fList[c].dataset.storageKey, fList[c].innerText)
  }

}

function getStored() {

  var fList = AR.$$("div.f span span[contenteditable=true]")
  var colors = AR.$$("div.f input[type=color]")

  for (c = 0; c < colors.length; c++) {
    if (localStorage.getItem(colors[c].dataset.storageKey) === null) {
      console.log("No color stored for f #" + (c + 1) + ".")
    } else {
      colors[c].value = localStorage.getItem(colors[c].dataset.storageKey)
    }

    if (localStorage.getItem(fList[c].dataset.storageKey) === null) {
      console.log("No function stored for f #" + (c + 1) + ".")
    } else {
      fList[c].innerText = localStorage.getItem(fList[c].dataset.storageKey)
    }
  }
}

getStored()
graphEquations()