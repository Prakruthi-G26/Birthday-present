document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openGift");
    const landing = document.getElementById("landing");
    const gallery = document.getElementById("gallery");
    const question = document.getElementById("question");
    const finalSection = document.getElementById("final");
    const giftBox = document.querySelector(".gift-box");

    const cards = document.querySelectorAll(".card");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dots = document.querySelectorAll(".dot");
    const replayBtn = document.getElementById("replayBtn");

    let currentIndex = 0;

    /* -------------------- SHOW CARD FUNCTION -------------------- */
    function showCard(index) {
        cards.forEach(card => {
            card.classList.add("hidden");
            card.querySelector(".inner").classList.remove("flip");
        });

        cards[index].classList.remove("hidden");

        prevBtn.classList.toggle("hidden", index === 0);

        dots.forEach(dot => dot.classList.remove("bg-purple-500"));
        if (dots[index]) {
            dots[index].classList.add("bg-purple-500");
        }
    }

    showCard(currentIndex);

    /* -------------------- OPEN GIFT -------------------- */
    openBtn.addEventListener("click", () => {

        giftBox.classList.add("animate-open-gift");

        setTimeout(() => {
            landing.classList.add("hidden");
            gallery.classList.remove("hidden");

            currentIndex = 0;
            showCard(currentIndex);

            nextBtn.classList.remove("hidden");

        }, 1000);
    });

    /* -------------------- NEXT BUTTON -------------------- */
    nextBtn.addEventListener("click", () => {

        if (currentIndex < cards.length - 1) {
            currentIndex++;
            showCard(currentIndex);
        } else {
            gallery.classList.add("hidden");
            question.classList.remove("hidden");
        }

    });

    /* -------------------- PREVIOUS BUTTON -------------------- */
    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            showCard(currentIndex);
        }

    });

    /* -------------------- CARD FLIP -------------------- */
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".inner").classList.toggle("flip");
        });
    });

    /* -------------------- QUESTION ANSWER -------------------- */
    document.querySelectorAll(".answer").forEach(btn => {
        btn.addEventListener("click", () => {
            question.classList.add("hidden");
            finalSection.classList.remove("hidden");
        });
    });

    /* -------------------- REPLAY BUTTON -------------------- */
    replayBtn.addEventListener("click", () => {

        finalSection.classList.add("hidden");
        question.classList.add("hidden");

        gallery.classList.remove("hidden");

        currentIndex = 0;
        showCard(currentIndex);

    });

    /* -------------------- FLOATING HEARTS -------------------- */
    const heartsContainer = document.getElementById("hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const emojis = ["💖", "💗", "💕", "💞"];
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }

    setInterval(createHeart, 500);

});