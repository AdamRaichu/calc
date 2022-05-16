var secondButtons = AR.$$("button.b-2nd")
for (c = 0; c < secondButtons.length; c++) {

    secondButtons[c].addEventListener("click", function () {
        if (isSecond) {
            AR.$("div#b_main").style.display = "block"
            AR.$("div#b_2nd").style.display = "none"
        } else {
            AR.$("div#b_main").style.display = "none"
            AR.$("div#b_2nd").style.display = "block"
        }
    })

}

var alphaButtons = AR.$$("button.alpha")
for (c = 0; c < alphaButtons.length; c++) {

    alphaButtons[c].addEventListener("click", function () {
        if (isAlpha) {
            AR.$("div#b_main").style.display = "block"
            AR.$("div#b_alpha").style.display = "none"
        } else {
            AR.$("div#b_main").style.display = "none"
            AR.$("div#b_alpha").style.display = "block"
        }
    })

}