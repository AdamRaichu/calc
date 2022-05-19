AR.$("#config").style.display = "none";
var root = document.documentElement

var inputs = AR.$$("#config_inner input[type=color]")
for (c = 0; c < inputs.length; c++) {

    if (localStorage.getItem(inputs[c].dataset.storageKey) === null) {
        console.log("No value stored for " + inputs[c].dataset.storageKey)
    } else {
        inputs[c].value = localStorage.getItem(inputs[c].dataset.storageKey)
        root.style.setProperty(inputs[c].dataset.storageKey, inputs[c].value)
    }


    inputs[c].addEventListener("change", function () {
        root.style.setProperty(this.dataset.storageKey, this.value)
    })

}

AR.$("#config_save").addEventListener("click", function () {
    for (c = 0; c < inputs.length; c++) {
        localStorage.setItem(inputs[c].dataset.storageKey, inputs[c].value)
    }

    AR.$("#config").style.display = "none"
})

var configButtons = AR.$$("button.config")
for (c = 0; c < configButtons.length; c++) {
    configButtons[c].addEventListener("click", function () {
        AR.$("#config").style.display = "flex"
    })
}