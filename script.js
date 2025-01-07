// script.js
function updateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

    document.getElementById("date").textContent = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById("time").textContent = now.toLocaleTimeString('en-US', timeOptions);
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call
