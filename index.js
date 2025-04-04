document.getElementById("chat-btn").addEventListener("click", function() {
    animateText("Path");
});





document.getElementById("path-btn").addEventListener("click", function() {
    animateText("Chat");
});


function animateText(newText) {
    let text = document.getElementById("animated-text");
    text.style.opacity = "0";
    text.style.transform = "scale(1.5) rotate(180deg)";
    
    setTimeout(() => {
        text.innerText = newText;
        text.style.opacity = "1";
        text.style.transform = "scale(1) rotate(0deg)";
    }, 500);
}
