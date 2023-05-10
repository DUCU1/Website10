dropDown();

function dropDown(){
    let hamMenuIcon = document.getElementById("drop-down");
    let navBar = document.getElementById("nav-bar");
    let navLinks = navBar.querySelectorAll("li")
    let navT = document.querySelector("nav")

    hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    navT.classList.toggle("active");
    exit.classList.toggle("active");
    navBar.classList.toggle("active");
    });

    navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
    });
    });
}
