//Get form
const gameQuery = document.querySelector('.queryForm');
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
            filteredGames = filteredGames.filter(game => game.player === playerName);
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
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    Object.keys(arr[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    arr.forEach(game => {
        const row = document.createElement('tr');

        Object.values(game).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    while (tableContainer.firstChild) {
        tableContainer.firstChild.remove();
    }
    tableContainer.appendChild(table);
}
