const header = document.querySelector("header");
const links = document.getElementsByClassName("links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) { // Hide after scrolling 100px
      gsap.to(header, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          header.style.display = "none";
        },
      });
    } else {
      gsap.to(header, {
        opacity: 1,
        duration: 0.5,
        display: "block",
      });
    }
  });