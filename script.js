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
        { name: "Rosario Central vs Newells Old Boys", url: "https://www.youtube.com/watch?v=jTDk5CswBVk", type: "masculino" },
        { name: "Canal 2", url: "https://www.youtube.com/@ARBBTV" , type: "femenino" },
        { name: "Canal 3", url: "https://www.youtube.com/watch?v=QGpHLgRnrx4", type: "masculino" },
        { name: "Partido Femenino 2", url: "https://www.youtube.com/@CanalFemenino2/live", type: "femenino" }
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