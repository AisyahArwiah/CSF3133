document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null; // collapse
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // expand
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            }
        });
    });
});
