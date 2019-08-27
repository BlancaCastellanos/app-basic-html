const buttons = document.querySelectorAll('button');

const playnote = event=> 
{
    const button = event.target;
    const note = button.dataset.note;
    console.log(note);
}
buttons.forEach
(
    button=> button.addEventListener('click', playnote)
);