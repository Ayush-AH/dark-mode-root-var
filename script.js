var btn = document.querySelector("#nav button")
var root = document.documentElement
var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        root.style.setProperty("--black", "#E2E2E2")
        root.style.setProperty("--white", "#030303")
        root.style.setProperty("--border", "rgb(183, 183, 183)")
        root.style.setProperty("--skeleton", "#fff")
        root.style.setProperty("--fill", "#fff")
        root.style.setProperty("--in", "#D8D8D8")
        btn.textContent = "dark"
        flag = 1
    }
    else{
        root.style.setProperty("--black", "#030303")
        root.style.setProperty("--white", "#fff")
        root.style.setProperty("--border", "rgb(19, 19, 19)")
        root.style.setProperty("--skeleton", "#14171C")
        root.style.setProperty("--fill", "#0E0F11")
        root.style.setProperty("--in", "#282C35")
        btn.textContent = "Light"
        flag = 0
    }

})