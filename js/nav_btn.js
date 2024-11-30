

function expand() {
    let x = document.querySelector(".nav-container");
    if(x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container"
    }
}



