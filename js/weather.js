const API_KEY = "63ae468686fe94c4e330c6b969949f09"; // OpenWeatherMap API KEY

function onGeoOk(position) {
    const lat = position.coords.latitude; // 사용자의 위도
    const lon = position.coords.longitude; // 사용자의 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            weather.innerText = `${data.name}: ${data.weather[0].main}, ${data.main.temp}°C`;
        });

}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);