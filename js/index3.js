const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses(); // creem o functie care sterge celelalte clase 'active' 
        panel.classList.add('active');
        // classList este o propriet din DOM elem care reprez o lista de clase aplicate unui element 
        //.add('active') - este o metoda a propriet classList care e fol pt a adauga o clasa din CSS elementului  

    })
})
 
function removeActiveClasses () {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
