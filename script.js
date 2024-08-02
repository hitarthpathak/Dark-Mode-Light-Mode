let toggle_btn = document.getElementById("toggle-btn");
let toggle = document.getElementById("toggle");
let body = document.body;

// --------------------------------------------------------------------------------------------------

let light_mode = true;

// --------------------------------------------------------------------------------------------------

toggle_btn.addEventListener("click", () => {

    if (light_mode === true) {
        body.style.backgroundColor = "black";
        toggle_btn.style.backgroundColor = "white";
        toggle.style.backgroundColor = "black";
        toggle_btn.style.justifyContent = "end";
        light_mode = false;
    }
    else {
        body.style.backgroundColor = "white";
        toggle_btn.style.backgroundColor = "black";
        toggle.style.backgroundColor = "white";
        toggle_btn.style.justifyContent = "start";
        light_mode = true;
    }

})