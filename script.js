document.addEventListener("DOMContentLoaded", function () {
    const stickyNav = document.getElementById("sticky-nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 75) {
            stickyNav.classList.add("sticky");
        } else {
            stickyNav.classList.remove("sticky");
        }
    });

    const burgerBtn = document.getElementById("burger-btn");
    const jumpLinks = document.getElementById("jump-links");

    burgerBtn.addEventListener("click", () => {
        jumpLinks.classList.toggle("active");
        burgerBtn.classList.toggle("active");
        stickyNav.classList.toggle("active");
        jumpLinks.style.top = stickyNav.offsetHeight + "px";
    });

    jumpLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            jumpLinks.classList.remove("active");
            burgerBtn.classList.remove("active");
            stickyNav.classList.remove("active");
        }
    });
});
