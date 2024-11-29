// Importamos la clase Lore desde Lore.js
import Lore from './Lore.js';

// Array para almacenar los campeones obtenidos
let heroes = [];

// Seleccionamos el botón y añadimos evento de clic
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    button.style.display = "none"; // Oculta el botón al hacer clic
    fetchChampions(); // Llama a la función para cargar los campeones
});

// Función para obtener los campeones desde la API
function fetchChampions() {
    fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
        .then(response => response.json())
        .then(data => {
            for (const key in data.data) {
                const champion = data.data[key];
                const lore = new Lore(champion);
                heroes.push(lore);
            }
            renderCards(); // Llama a la función para renderizar
        })
        .catch(err => console.error("Error fetching champions:", err));
}

// Función para renderizar las tarjetas en el DOM
function renderCards() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpia el contenedor antes de agregar

    heroes.forEach(hero => {
        resultados.innerHTML += `
            <div class="card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${hero.image}" alt="${hero.name}">
                <h3>${hero.name} - ${hero.title}</h3>
                <p>${hero.blurb}</p>
                <div class="roles">
                    Roles: ${hero.tags.join(', ')}
                </div>
                <div class="info">
                    <p>Ataque: ${hero.info.attack}</p>
                    <p>Defensa: ${hero.info.defense}</p>
                    <p>Magia: ${hero.info.magic}</p>
                    <p>Dificultad: ${hero.info.difficulty}</p>
                </div>
            </div>
        `;
    });
}
