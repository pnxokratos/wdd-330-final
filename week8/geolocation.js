function determineLocation() {

    if (navigator.onLine) {

        if (Modernizr.geolocation) {

            navigator.geolocation.getCurrentPosition(displayOnMap);
            // console.log("in the raphael");
            var container = Raphael(document.getElementById("spinner"), 125, 125);
            var spinner = container.image("../images/spinner.svg", 0, 0, 125, 125);
            var attrsToAnimate = { transform: "r720" };
            spinner.animate(attrsToAnimate, 60000);
        }
    }
}

function displayOnMap(position) {
    console.log("inside displayOnMap");
    // document.getElementById("spinner").style.display = "block";
}