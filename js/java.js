document.addEventListener('DOMContentLoaded', function () {
    console.log('La pagina è stata caricata!');

    // --- Gestione del carosello ---
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    if (track && items.length > 0) {
        // Imposta l'intervallo automatico a 3.5 secondi
        let autoSlideInterval = setInterval(() => slide(1), 3000);

        // Funzione per gestire lo scorrimento del carosello
        const slide = (dir) => {
            index = (index + dir + items.length) % items.length; // Calcola il prossimo indice
            track.style.transform = `translateX(-${index * 100}%)`; // Sposta il carosello
        };

        // Gestione dei pulsanti "avanti" e "indietro"
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');

        if (prevButton) {
            prevButton.onclick = () => {
                slide(-1);
                resetAutoSlide();
            };
        }

        if (nextButton) {
            nextButton.onclick = () => {
                slide(1);
                resetAutoSlide();
            };
        }

        // Reset dell'intervallo automatico quando l'utente interagisce con i controlli
        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => slide(1), 3500); // Riavvia il timer con 3.5 secondi
        };

        // Aggiorna la posizione del carosello in caso di ridimensionamento della finestra
        window.onresize = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };
    } 

    // --- Gestione dei collapse ---
    const collapseBtns = document.querySelectorAll('.collapse-btn');

    collapseBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const table = btn.nextElementSibling; // Trova la tabella sotto il pulsante
            if (table) {
                table.classList.toggle('expanded'); // Alterna la classe "expanded" per mostrare/nascondere la tabella
            } else {
                console.error('Elemento tabella non trovato accanto al pulsante collapse.');
            }
        });
    });

    document.getElementById("submit",(e)=>{
        e.preventDefault()
        document.getElementById("form").submit()
    
    })
});
