console.log("Hello! Welcome to my Portfolio!!")


function menuToggle() {
    console.log("Toggle triggered");

    const nav = document.getElementById("myNavtoggle");
    const icon = document.querySelector(".nav a.icon i");  // Select the icon inside the anchor tag

    // Toggle the 'active' class to slide the menu in/out
    nav.classList.toggle("active");

    // Toggle the 'fa-bars' and 'fa-times' icons
    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");  // Change to the 'X' icon
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");  // Change back to the 'bars' icon
    }
}

