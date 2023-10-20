// Get the button element
const colorChangeButton = document.getElementById("colorChangeButton");

// Add a click event listener to the button
colorChangeButton.addEventListener("click", function () {
  // Generate a random background color (you can change this logic)
  const randomColor = getRandomColor();
  
  // Set the background color of the body element
  document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const apiKey = 'fff135904a69ef4b821731bda95b4bad';

document.getElementById('searchButton').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('conditions').textContent = data.weather[0].description;
        })
        .catch(error => console.log('Error:', error));
}

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






