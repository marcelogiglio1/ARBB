
const teams = [
    {
      "id": 1,
      "name": "Club Sportivo America",
      "address": "Urquiza 2150",
      "foundation_date": "24-12-1889",
      "logo": "escudos/America.png"
    },
    {
      "id": 2,
      "name": "Club Atalaya",
      "address": "Juan Manuel de Rosas 2550",
      "foundation_date": "1982-01-01",
      "logo": "escudos/Atalaya.png"
    },
    {
      "id": 3,
      "name": "Atlantic Sportmen Club",
      "address": "Lavalle 900",
      "foundation_date": "1983-01-01",
      "logo": "escudos/Atlantic.png"
    },
    {
      "id": 4,
      "name": "Club Atletico Olegario Victor Andrade",
      "address": "Dirección 4",
      "foundation_date": "1984-01-01",
      "logo": "escudos/CAOVA.png"
    },
    {
      "id": 5,
      "name": "Club Atletico Rosario Central",
      "address": "Dirección 5",
      "foundation_date": "1985-01-01",
      "logo": "escudos/Central.png"
    },
    {
      "id": 6,
      "name": "Echesortu Futbol Club",
      "address": "Dirección 6",
      "foundation_date": "1986-01-01",
      "logo": "escudos/Echesortu.png"
    },
    {
      "id": 7,
      "name": "El Tala Club",
      "address": "Dirección 7",
      "foundation_date": "1987-01-01",
      "logo": "escudos/ElTala.png"
    },
    {
      "id": 8,
      "name": "Club Atletico Fisherton",
      "address": "Dirección 8",
      "foundation_date": "1988-01-01",
      "logo": "escudos/Fisherton.png"
    },
    {
      "id": 9,
      "name": "Gimnasia y Esgrima",
      "address": "Dirección 9",
      "foundation_date": "1989-01-01",
      "logo": "escudos/GER.png"
    },
    {
      "id": 10,
      "name": "Club Nautico Sportivo Avellaneda",
      "address": "Dirección 10",
      "foundation_date": "1990-01-01",
      "logo": "escudos/Nautico.png"
    },
    {
      "id": 11,
      "name": "Club Atletico y Social Union y Progreso",
      "address": "Dirección 11",
      "foundation_date": "1991-01-01",
      "logo": "escudos/Progreso.png"
    },
    {
      "id": 12,
      "name": "Club Atletico Provincial",
      "address": "27 de Febrero 2760",
      "foundation_date": "1992-01-01",
      "logo": "escudos/Provincial.png"
    },
    {
      "id": 13,
      "name": "Club de Regatas",
      "address": "Cordiviola",
      "foundation_date": "1993-01-01",
      "logo": "escudos/Regatas.png"
    },
    {
      "id": 14,
      "name": "Club Sportmen Unidos",
      "address": "1 de Mayo 2030",
      "foundation_date": "1994-01-01",
      "logo": "escudos/SUnidos.png"
    },
    {
      "id": 15,
      "name": "Club Atletico Temperley",
      "address": "Ayacucho 2090",
      "foundation_date": "1995-01-01",
      "logo": "escudos/Temperley.png"
    },
    {
      "id": 16,
      "name": "Club Union AS",
      "address": "Dirección 16",
      "foundation_date": "1996-01-01",
      "logo": "escudos/UnionAS.png"
    },
    {
      "id": 27,
      "name": "Club Ben Hur",
      "address": "Ituzango 1550",
      "foundation_date": "1987-01-01",
      "logo": "escudos/BenHur.png"
    },
    {
      "id": 28,
      "name": "Club Maciel",
      "address": "Dirección 28",
      "foundation_date": "1988-01-01",
      "logo": "escudos/Maciel.png"
    },
    {
      "id": 29,
      "name": "Club Atletico Rosario Central",
      "address": "Catamarca 3650",
      "foundation_date": "1989-01-01",
      "logo": "escudos/Central.png"
    },
    {
      "id": 30,
      "name": "Club Nautico Sportivo Avellaneda",
      "address": "Dirección 30",
      "foundation_date": "1990-01-01",
      "logo": "escudos/Nautico.png"
    },
    {
      "id": 31,
      "name": "Club Atletico Talleres RPB",
      "address": "Dirección 31",
      "foundation_date": "1991-01-01",
      "logo": "escudos/TalleresVD.png"
    },
    {
      "id": 32,
      "name": "Club Atletico Temperley",
      "address": "Ayacucho 2170",
      "foundation_date": "1992-01-01",
      "logo": "escudos/Temperley.png"
    },
    {
      "id": 33,
      "name": "Club Union AS",
      "address": "Dirección 16",
      "foundation_date": "1996-01-01",
      "logo": "escudos/UnionAS.png"
    },
    {
      "id": 34,
      "name": "Club Regatas San Nicolas",
      "address": "Dirección 34",
      "foundation_date": "1994-01-01",
      "logo": "escudos/RegatasSN.png"
    },
    {
      "id": 35,
      "name": "Sport Club Cañada de Gomez",
      "address": "Dirección 35",
      "foundation_date": "1995-01-01",
      "logo": "escudos/SportCDG.png"
    },
    
  ];

document.addEventListener("DOMContentLoaded", () => {
  let currentTournament = false; // Inicia con equipos masculinos

  function loadTeams() {
      const teamContainer = document.getElementById("teamContainer");
      const teamInfo = document.getElementById("teamInfo");
      const playerContainer = document.getElementById("playerContainer");
      const backButton = document.getElementById("backButton");

      // Reset de contenedores
      teamContainer.innerHTML = "";
      teamInfo.innerHTML = "";
      playerContainer.innerHTML = "";
      backButton.style.display = "none";

      teams
          .filter(team => (currentTournament ? team.id > 26 : team.id <= 26)) // Filtra por género del torneo
          .forEach(team => {
              const button = document.createElement("button");
              button.innerHTML = `<img src="${team.logo}" alt="${team.name}" width="100">`;
              button.classList.add("team-button");
              button.dataset.teamId = team.id;
              button.addEventListener("click", () => showTeamDetails(team.id));
              teamContainer.appendChild(button);
          });
  }

  function showTeamDetails(teamId) {
      const team = teams.find(t => t.id === teamId);
      const playersInTeam = players.filter(p => p.team_id === teamId);

      // Limpiar el contenedor de equipos
      document.getElementById("teamContainer").innerHTML = "";

      // Mostrar información del equipo
      const teamInfo = document.getElementById("teamInfo");
      teamInfo.innerHTML = `
          <h2>${team.name}</h2>
          <img src="${team.logo}" alt="${team.name}" width="100">
          <p>Dirección: ${team.address}</p>
          <p>Fundación: ${team.foundation_date}</p>
      `;

      // Mostrar jugadores
      const playerContainer = document.getElementById("playerContainer");
      playerContainer.innerHTML = "";

      playersInTeam.forEach(player => {
          const playerButton = document.createElement("button");
          playerButton.innerHTML = `<img src="${player.image}" alt="${player.name}" width="80">`;
          playerButton.classList.add("player-button");
          playerButton.dataset.name = player.name;
          playerButton.dataset.age = player.age;
          playerButton.dataset.height = player.height;
          playerButton.dataset.image = player.image;
          playerButton.dataset.games_played = player.games_played;
          playerButton.dataset.points = player.points;
          playerButton.dataset.rebounds = player.rebounds;
          playerButton.dataset.assists = player.assists;
          playerButton.addEventListener("click", () => showPlayerModal(player));
          playerContainer.appendChild(playerButton); 
      });

      document.getElementById("backButton").style.display = "block";
  }

  function showPlayerModal(player) {
      const modal = document.getElementById("playerModal");
      const modalContent = document.getElementById("modalContent");

      modalContent.innerHTML = `
          <h3>${player.name}</h3>
          <img src="${player.image}" alt="${player.name}" width="100">
          <p><strong>Edad:</strong> ${player.age} años</p>
          <p><strong>Altura:</strong> ${player.height} cm</p>
          <p><strong>Partidos Jugados:</strong> ${player.games_played}</p>
          <p><strong>Puntos:</strong> ${player.points} pts</p>
          <p><strong>Rebotes:</strong> ${player.rebounds} reb</p>
          <p><strong>Asistencias:</strong> ${player.assists} asis</p>
          <p><strong>Puntos por juego:</strong> ${player.games_played > 0 ? (player.points / player.games_played).toFixed(2) : "N/A"} pts</p>
          <p><strong>Rebotes por juego:</strong> ${player.games_played > 0 ? (player.rebounds / player.games_played).toFixed(2) : "N/A"} reb</p>
          <p><strong>Asistencias por juego:</strong> ${player.games_played > 0 ? (player.assists / player.games_played).toFixed(2) : "N/A"} asis</p>
          <button id="closeModal">X</button>
      `;

      modal.style.display = "block";

      // Agregar evento para cerrar modal
      document.getElementById("closeModal").addEventListener("click", () => {
          modal.style.display = "none";
      });
  }

  function goBack() {
      document.getElementById("teamInfo").innerHTML = "";
      document.getElementById("playerContainer").innerHTML = "";
      loadTeams();
  }

  // Asignación de eventos
  document.getElementById("superligaButton").addEventListener("click", () => {
      currentTournament = false;
      loadTeams();
  });

  document.getElementById("femeninaButton").addEventListener("click", () => {
      currentTournament = true;
      loadTeams();
  });

  document.getElementById("backButton").addEventListener("click", goBack);

  loadTeams();
});
