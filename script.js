function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        document.getElementById("menu").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const streamContainer = document.getElementById("streamContainer");
    const channels = [
        { name: "21:00 hs Rosario Central vs Newells Old Boys", url: "https://www.youtube.com/watch?v=jTDk5CswBVk", type: "masculino" },
        { name: "21:00 hs Ben Hur vs Atalaya", url: "https://www.youtube.com/@ARBBTV" , type: "femenino" },
        { name: "21:00 hs CAOVA vs Nautico", url: "https://www.youtube.com/watch?v=QGpHLgRnrx4", type: "masculino" },
        { name: "21:00 hs Regatas SN vs Union AS", url: "https://www.youtube.com/@CanalFemenino2/live", type: "femenino" }
    ];

    function createStreamButton(channel) {
        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("stream-wrapper");
        
        
        const button = document.createElement("button");
        button.textContent = channel.name;
        button.classList.add(channel.type === "masculino" ? "masculino-button" : "femenino-button");
        button.addEventListener("click", () => {
            const newWindow = window.open(channel.url, "_blank", "fullscreen=yes");
            if (newWindow) newWindow.focus();
        });
        
        buttonWrapper.appendChild(button);
        streamContainer.appendChild(buttonWrapper);
    }

    channels.forEach(createStreamButton);
});
