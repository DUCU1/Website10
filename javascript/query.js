//Get form
const searchButton = document.getElementById('searchButton');
const tableContainer = document.getElementById('tableContainer');


searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    const arr = filter();
    displayTable(arr);

    tableContainer.style.display = 'block';
});

function filter() {
    const id = document.getElementById('id').value;
    const playerName = document.getElementById('playerName').value;
    const score = document.getElementById('score').value;
    const comparison = document.getElementById('comparison').value;
    const win = document.getElementById('win').checked;
    const beforeDate = document.getElementById('before').value;
    const afterDate = document.getElementById('after').value;

    const game = gamesJson;
    let filteredGames = gamesJson;

    if (id !== '') {
        filteredGames = filteredGames.filter(game => game.id === parseInt(id));
    } else {
        if (playerName !== '') {
            filteredGames = filteredGames.filter(game => game.playerName === playerName);
        }
        if (win) {
            filteredGames = filteredGames.filter(game => game.win);
        }
        if (score !== '') {
            if (comparison === 'above') {
                filteredGames = filteredGames.filter(game => game.score > parseInt(score));
            } else if (comparison === 'equal') {
                filteredGames = filteredGames.filter(game => game.score === parseInt(score));
            } else if (comparison === 'below') {
                filteredGames = filteredGames.filter(game => game.score < parseInt(score));
            }
        }
        if (beforeDate !== '') {
            filteredGames = filteredGames.filter(game => new Date(game.date) < new Date(beforeDate));
        }
        if (afterDate !== '') {
            filteredGames = filteredGames.filter(game => new Date(game.date) > new Date(afterDate));
        }
    }
    return filteredGames;
}

function displayTable(arr) {
    const table = document.getElementById('table');
    const tbody = table.querySelector('tbody');

    // Clear existing table rows
    while (tbody.firstChild) {
        tbody.firstChild.remove();
    }

    arr.forEach(game => {
        const row = document.createElement('tr');

        Object.values(game).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });
}
