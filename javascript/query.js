//Get form
const searchButton = document.getElementById('searchButton');
const tableContainer = document.getElementById('tableContainer');


searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    const arr = filter();//Get thee information out of the db.js
    displayTable(arr); //Fill the display with the array generated with the filter function

    tableContainer.style.display = 'block'; //After updating the information display the container
});

function filter() {
    //Get values from all the input fields
    const id = document.getElementById('id').value;
    const playerName = document.getElementById('playerName').value;
    const score = document.getElementById('score').value;
    const comparison = document.getElementById('comparison').value;
    const win = document.getElementById('win').checked;
    const beforeDate = document.getElementById('before').value;
    const afterDate = document.getElementById('after').value;

    //Init the gameJson file
    const game = gamesJson;
    let filteredGames = gamesJson;

    //If else statements to select the right information
    if (id !== '') { //If id is filled in select all information with that id
        filteredGames = filteredGames.filter(game => game.id === parseInt(id));
    } else { //ID not filled in go over the other options
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
    return filteredGames;//Returns the filteredGames
}

let sortColumn = null;
let sortAscending = true;

function displayTable(arr) {
    //Get the table
    const table = document.getElementById('table');
    const tbody = table.querySelector('tbody');

    //Remove all information from the tbody
    while (tbody.firstChild) {
        tbody.firstChild.remove();
    }

    //fill the tbody back with the filtered game data
    arr.forEach(game => {
        const row = document.createElement('tr');

        Object.values(game).forEach((value, index) => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    const headers = document.querySelectorAll('th');
    //Sort buttons are added
    headers.forEach((header, index) => {
        if (index === 1 || index === 2) { // Add sort buttons only for Player Name and Score columns
            const button = header.querySelector('button');
            button.addEventListener('click', () => {
                sortTable(index);
                updateSortButtons();
            });

            header.appendChild(button);
        }
    });

    function sortTable(column) {
        //Table will be sorted
        if (sortColumn === column) {
            sortAscending = !sortAscending;
        } else {
            sortColumn = column;
            sortAscending = true;
        }

        arr.sort((a, b) => {
            const valueA = Object.values(a)[column];
            const valueB = Object.values(b)[column];

            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            } else {
                return sortAscending ? valueA - valueB : valueB - valueA;
            }
        });

        displayTable(arr);
    }

    function updateSortButtons() {
        //Update buttons when something is getting updated
        headers.forEach((header, index) => {
            const button = header.querySelector('button');
            button.textContent = index === sortColumn ? (sortAscending ? 'v' : '^') : '-';
        });
    }

}