document.addEventListener("DOMContentLoaded", () => {

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    const particleContainer = document.querySelector(".cursor-particles");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";

        const spark = document.createElement("span");
        spark.className = "cursor-spark";

        spark.style.left = mouseX + "px";
        spark.style.top = mouseY + "px";

        spark.style.setProperty(
            "--spark-x",
            (Math.random() - 0.5) * 20 + "px"
        );

        spark.style.setProperty(
            "--spark-y",
            (Math.random() - 0.5) * 20 + "px"
        );

        particleContainer.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 700);
    });

    function animateCursor() {

        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

});

const bmwSlides = [
    "bmw-sales-overview.png",
    "bmw-sales-details.png"
];

let bmwSlideIndex = 0;

function changeBMWSlide(direction) {

    bmwSlideIndex += direction;

    if (bmwSlideIndex < 0) {
        bmwSlideIndex = bmwSlides.length - 1;
    }

    if (bmwSlideIndex >= bmwSlides.length) {
        bmwSlideIndex = 0;
    }

    document.getElementById("bmwSlide").src =
        bmwSlides[bmwSlideIndex];
}

const houseSlides = [
    "house-market-overview.png",
    "house-sales-performance.png",
    "house-market-details.png"
];

let houseSlideIndex = 0;

function changeHouseSlide(direction) {

    houseSlideIndex += direction;

    if (houseSlideIndex < 0) {
        houseSlideIndex = houseSlides.length - 1;
    }

    if (houseSlideIndex >= houseSlides.length) {
        houseSlideIndex = 0;
    }

    document.getElementById("houseSlide").src =
        houseSlides[houseSlideIndex];
}