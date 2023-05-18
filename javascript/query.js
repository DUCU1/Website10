//Get form
const gameQuery = document.querySelector('.queryForm');
const searchButton = document.getElementById('searchButton');
const test = document.getElementById('test');
//Get variables
const id = document.getElementById('id');
const playerName = document.getElementById('playerName');
const score = document.getElementById('score');
const comparison = document.getElementById('comparison');
const win = document.getElementById('win');
const beforeDate = document.getElementById('before');
const afterDate = document.getElementById('after');

const table = document.getElementById('table');

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    table.style.display = 'block';
});