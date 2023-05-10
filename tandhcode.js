var dataT = [0];
var dataH = [0];
var t = 0;
var h = 0;

var indicatorTemperature = drawIndicator("°C", document.getElementById("indicatorTemperature"));
drawAreaChart(dataT, document.querySelector(".card1").clientWidth, 300, "°C", ["#ca269f", "#fe4e35", "rgba(0, 0, 0, 0)"], document.getElementById("graphTemperature"));
var indicatorHumidity = drawIndicator("%", document.getElementById("indicatorHumidity"));
drawAreaChart(dataH, document.querySelector(".card2").clientWidth, 300, "%", ["#0056ff", "#6341fa", "rgba(0, 0, 0, 0)"], document.getElementById("graphHumidity"));

setInterval(() => {
    fetch('/temperature')
        .then(response => response.json())
        .then(data => {
            t = data.temperature;
            dataT.push(data.temperature);
            indicator(t, indicatorTemperature);
            drawAreaChart(dataT, document.querySelector(".card1").clientWidth, 300, "°C", ["#ca269f", "#fe4e35", "rgba(0, 0, 0, 0)"], document.getElementById("graphTemperature"));
        })
        .catch(error => console.error(error));

    fetch('/humidity')
        .then(response => response.json())
        .then(data => {
            h = data.humidity;
            dataH.push(data.humidity);
            indicator(h, indicatorHumidity);
            drawAreaChart(dataH, document.querySelector(".card2").clientWidth, 300, "%", ["#0056ff", "#6341fa", "rgba(0, 0, 0, 0)"], document.getElementById("graphHumidity"));
        })
        .catch(error => console.error(error));
}, 1000);
