window.onload = function() {

    var button = document.getElementById("buttonClicked");
    var input = document.getElementById("input");
    button.addEventListener("click", function() {
        console.log('input.value')
        for (i = 0; i < 10; i++) {
            document.write(input.value + "x" + (i + 1) + "=" + input.value * (i + 1) + "<br>");
        }

    })
}