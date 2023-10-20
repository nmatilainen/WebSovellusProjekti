function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time
updateClock();