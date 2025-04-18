document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const stickyNav = document.getElementById("sticky-nav");
        if (window.scrollY > 100) {
            stickyNav.classList.add("sticky");
        } else {
            stickyNav.classList.remove("sticky");
        }
    });

    const burgerBtn = document.getElementById("burger-btn");
    const jumpLinks = document.getElementById("jump-links");

    burgerBtn.addEventListener("click", () => {
        jumpLinks.classList.toggle("active");
    });
});
