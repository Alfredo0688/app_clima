const apiKey = 'e0c9cfe74d4a082e6a23a2cbb099cd79'
const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const difKelvin = 273.15

document.getElementById("botonBusqueda").addEventListener('click', () => {
    const ciudad = document.getElementById("ciudadEntrada").value;
    console.log(ciudad);
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {

    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(json => mostrarDatosClima(json))
}

function mostrarDatosClima(datos){
    console.log(datos)
    //Obtenemos el div que contendrá la información
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''

    const nombre = datos.name;
    const pais = datos.sys.country;
    const temperatura = datos.main.temp;
    const descripcion = datos.weather[0].description;
    const sensacionTermica = datos.main.feels_like;
    const iconoClima = datos.weather[0].icon;

    //creando elementos
    const ciudadNombre = document.createElement('h2');
    ciudadNombre.textContent = nombre;

    const paisNombre = document.createElement('label');
    paisNombre.textContent = pais;

    const temperaturaInfo = document.createElement('h2')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`;

    const descripcionInfo = document.createElement('h2');
    descripcionInfo.textContent = `Descripción: ${descripcion}`;

    const sensacionTermicaInfo = document.createElement('h2');
    sensacionTermicaInfo.textContent = `Sensación térmica: ${sensacionTermica}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${iconoClima}@2x.png`


    //Agregamos al div la informacion obtenida de la API
    divDatosClima.appendChild(paisNombre);
    divDatosClima.appendChild(ciudadNombre);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(sensacionTermicaInfo);
    divDatosClima.appendChild(iconoInfo);

}




