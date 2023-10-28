document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const article = this.parentElement;
        const paragraph = article.querySelector("p"); // Выбираем скрытый абзац
        if (paragraph.style.display === "none" || paragraph.style.display === "") {
            paragraph.style.display = "block"; // Показываем скрытый абзац
            this.textContent = "Свернуть";
        } else {
            paragraph.style.display = "none"; // Скрываем абзац
            this.textContent = "Читать далее";
        }
    });
});

const subscriptionForm = document.querySelector(".subscription-form form");
const successMessage = document.querySelector(".subscription-success");
subscriptionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.style.display = "block";
    this.reset();
});

const galleryImages = document.querySelectorAll(".image-gallery img");
galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        const enlargedImage = document.createElement("img");
        enlargedImage.src = this.src;
        overlay.appendChild(enlargedImage);
        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });
        document.body.appendChild(overlay);
    });
});
