let currentPlayer = 'X';

document.getElementById('tabla').addEventListener('click', function(event) {
  const clickedCell = event.target;

  if (clickedCell.classList.contains('cella') && !clickedCell.textContent) {
    clickedCell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

});

document.getElementById('reset').addEventListener('click', function() {
  const cells = document.querySelectorAll('.cella');

  cells.forEach(cell => {
    cell.textContent = '';
  });

  console.log('Tábla törölve');
 
});

