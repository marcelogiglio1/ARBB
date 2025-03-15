const positionsData =  [
    {
      "team_name": "Sp. America",
      "tournament": false,
      "games_played": 10,
      "wins": 2,
      "losses": 8,
      "points_for": 724,
      "points_against": 662,
      "points": 12
    },
    {
      "team_name": "Atalaya",
      "tournament": false,
      "games_played": 16,
      "wins": 0,
      "losses": 16,
      "points_for": 1214,
      "points_against": 1129,
      "points": 16
    },
    {
      "team_name": "Atlantic Sp.",
      "tournament": false,
      "games_played": 14,
      "wins": 6,
      "losses": 8,
      "points_for": 1019,
      "points_against": 987,
      "points": 20
    },
    {
      "team_name": "C.A.O.V.A.",
      "tournament": false,
      "games_played": 17,
      "wins": 15,
      "losses": 2,
      "points_for": 1374,
      "points_against": 1236,
      "points": 32
    },
    {
      "team_name": "R. Central",
      "tournament": false,
      "games_played": 13,
      "wins": 4,
      "losses": 9,
      "points_for": 1079,
      "points_against": 968,
      "points": 17
    },
    {
      "team_name": "Echesortu",
      "tournament": false,
      "games_played": 1,
      "wins": 0,
      "losses": 1,
      "points_for": 341,
      "points_against": 340,
      "points": 1
    },
    {
      "team_name": "El Tala",
      "tournament": false,
      "games_played": 13,
      "wins": 10,
      "losses": 3,
      "points_for": 1187,
      "points_against": 1076,
      "points": 23
    },
    {
      "team_name": "Fisherton",
      "tournament": false,
      "games_played": 12,
      "wins": 11,
      "losses": 1,
      "points_for": 893,
      "points_against": 805,
      "points": 23
    },
    {
      "team_name": "Gimnasia",
      "tournament": false,
      "games_played": 14,
      "wins": 6,
      "losses": 8,
      "points_for": 1107,
      "points_against": 957,
      "points": 20
    },
    {
      "team_name": "Nautico",
      "tournament": false,
      "games_played": 17,
      "wins": 2,
      "losses": 15,
      "points_for": 1347,
      "points_against": 1295,
      "points": 19
    },
    {
      "team_name": "Union y P.",
      "tournament": false,
      "games_played": 0,
      "wins": 0,
      "losses": 0,
      "points_for": 85,
      "points_against": 51,
      "points": 0
    },
    {
      "team_name": "Provincial",
      "tournament": false,
      "games_played": 1,
      "wins": 0,
      "losses": 1,
      "points_for": 110,
      "points_against": 31,
      "points": 1
    },
    {
      "team_name": "Regatas",
      "tournament": false,
      "games_played": 11,
      "wins": 2,
      "losses": 9,
      "points_for": 905,
      "points_against": 984,
      "points": 13
    },
    {
      "team_name": "Sp. Unidos",
      "tournament": false,
      "games_played": 14,
      "wins": 12,
      "losses": 2,
      "points_for": 1215,
      "points_against": 1190,
      "points": 26
    },
    {
      "team_name": "Temperley",
      "tournament": false,
      "games_played": 19,
      "wins": 17,
      "losses": 2,
      "points_for": 1625,
      "points_against": 1599,
      "points": 36
    },
    {
      "team_name": "Union A.S.",
      "tournament": false,
      "games_played": 17,
      "wins": 16,
      "losses": 1,
      "points_for": 1266,
      "points_against": 1226,
      "points": 33
    },
    {
      "team_name": "Ben Hur",
      "tournament": true,
      "games_played": 2,
      "wins": 1,
      "losses": 1,
      "points_for": 161,
      "points_against": 103,
      "points": 3
    },
    {
      "team_name": "Nautico",
      "tournament": true,
      "games_played": 11,
      "wins": 3,
      "losses": 8,
      "points_for": 788,
      "points_against": 646,
      "points": 14
    },
    {
      "team_name": "Regatas SN",
      "tournament": true,
      "games_played": 17,
      "wins": 0,
      "losses": 17,
      "points_for": 1197,
      "points_against": 1125,
      "points": 17
    },
    {
      "team_name": "Maciel",
      "tournament": true,
      "games_played": 0,
      "wins": 0,
      "losses": 0,
      "points_for": 122,
      "points_against": 71,
      "points": 0
    },
    {
      "team_name": "R. Central",
      "tournament": true,
      "games_played": 19,
      "wins": 9,
      "losses": 10,
      "points_for": 1471,
      "points_against": 1348,
      "points": 28
    },
    {
      "team_name": "Union AS",
      "tournament": true,
      "games_played": 8,
      "wins": 4,
      "losses": 4,
      "points_for": 632,
      "points_against": 483,
      "points": 12
    },
    {
      "team_name": "Sport CDG",
      "tournament": true,
      "games_played": 18,
      "wins": 10,
      "losses": 8,
      "points_for": 1296,
      "points_against": 1229,
      "points": 28
    },
    {
      "team_name": "Temperley",
      "tournament": true,
      "games_played": 16,
      "wins": 5,
      "losses": 11,
      "points_for": 1144,
      "points_against": 1052,
      "points": 21
    },
    {
      "team_name": "Talleres RPB",
      "tournament": true,
      "games_played": 7,
      "wins": 6,
      "losses": 1,
      "points_for": 768,
      "points_against": 646,
      "points": 13
    },
  ]


  function populateTable(tournament, tableId) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = "";
    positionsData.filter(team => team.tournament === tournament)
        .sort((a, b) => b.points - a.points)
        .forEach(team => {
            const row = `<div>
            <tr>
                <td>${team.team_name}</td>
                <td>${team.games_played}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.points_for}</td>
                <td>${team.points_against}</td>
                <td>${team.points_for - team.points_against}</td>
                <td>${team.points}</td>
            </tr>
            </div>`;
            tbody.innerHTML += row;
        });
}

function showTable(type) {
  document.getElementById("masculino").style.display = "none";
  document.getElementById("femenino").style.display = "none";
  populateTable(type === 'femenino', type + 'Body');
  document.getElementById(type).style.display = "table";
}

// Función para obtener parámetros de la URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Función para mostrar la tabla correspondiente según el parámetro en la URL
function showInitialTable() {
  const torneo = getQueryParam("torneo");
  const defaultTournament = torneo === "femenino" ? "femenino" : "masculino";
  showTable(defaultTournament);
}

// Ejecutar al cargar la página para mostrar la tabla correcta
window.onload = function() {
  showInitialTable();
};
