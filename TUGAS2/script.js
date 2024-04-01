// script.js

// Fungsi untuk melakukan permintaan HTTP ke API dan menampilkan klasemen
async function fetchAndDisplayStandings() {
  const apiKey = "5534c70809f5172cec29e2e9cdbf5754574eff3b2b928e7568d3582b1d86cfa2";
  const leagueId = 152;
  const standingsUrl = `https://apiv3.apifootball.com?action=get_standings&APIkey=${apiKey}&league_id=${leagueId}`;

  try {
    const response = await fetch(standingsUrl);
    const data = await response.json();

    // Buat tabel untuk menampilkan klasemen
    const table = document.createElement("table");
    const headerRow = table.insertRow();

    // Buat header tabel
    ["Posisi", "Tim", "Main", "Menang", "Seri", "Kalah", "Gol Dicetak", "Gol Kemasukan", "Poin"].forEach(function (header) {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    // Isi data klasemen ke dalam tabel
    data.forEach(function (team) {
      const row = table.insertRow();
      ["overall_league_position", "team_name", "overall_league_payed", "overall_league_W", "overall_league_D", "overall_league_L", "overall_league_GF", "overall_league_GA", "overall_league_PTS"].forEach(function (field) {
        const cell = row.insertCell();
        cell.textContent = team[field];
      });
    });

    // Tampilkan tabel klasemen di dalam div dengan id 'klasemen-container'
    const klasemenContainer = document.getElementById("klasemen-container");
    klasemenContainer.appendChild(table);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Panggil fungsi untuk mengambil dan menampilkan klasemen saat halaman dimuat
fetchAndDisplayStandings();
