const selectButtons = document.querySelectorAll('[data-click]');
const finalColumn = document.querySelector('[data-final-column]');

const myScore= document.querySelector('[data-your-score]');
const computerScore= document.querySelector('[data-computer-score]');

const allButtons = [
    {
        name : 'rock',
        emoji : '🗿',
        beats : 'scissor',
    },
    {
        name : 'paper',
        emoji : '🖐',
        beats : 'rock',
    },
    {
        name : 'scissor',
        emoji : '✂️',
        beats : 'paper',
    }
]

selectButtons.forEach(element => {
    element.addEventListener('click' , function(){
        const button = element.dataset.click; //click from dataset -> data-click
        const clickedButton = allButtons.find( e => e.name === button)
        playAndDisplay(clickedButton);
        // passes clicked btn to fn , further generating random o/p to compare & get winner
    });
});

function playAndDisplay(clickedButton)
{
    const randomButton = randomBtn();
    const myWinner = whoWins(clickedButton , randomButton);
    const systemWinner = whoWins(randomButton , clickedButton);

    actualWinner(randomButton , systemWinner);
    actualWinner(clickedButton , myWinner);

    if(myWinner) updateScore(myScore);
    if(systemWinner) updateScore(computerScore);
}

function randomBtn()
{
    const randomIdx = Math.floor(Math.random() * allButtons.length);
    return allButtons[randomIdx];
}

function whoWins(youClicked , computerGenerated)
{
    return (youClicked.beats === computerGenerated.name);
}

function actualWinner(selection , winner)
{
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if(winner)
    {
        div.classList.add('winner');
    }
    finalColumn.after(div);
}

function updateScore(x)
{
    x.innerText = parseInt(x.innerText) + 1;
}