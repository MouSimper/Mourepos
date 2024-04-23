

function convertir(fahrenheit) {
    const celsius = (parseFloat(fahrenheit) - 32) * (5 / 9);
    return celsius.toFixed(2); // Limitar a 2 decimales
}

function calcularTemperatura() {
    const fahrenheit = document.getElementById("fname").value;
    const celsius = convertir(fahrenheit);
    document.getElementById("resultado").textContent = "La temperatura en Celsius es: " + celsius + " °C";
}

