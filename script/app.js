document.addEventListener('DOMContentLoaded', function() {
    const backToHomeLink = document.querySelector('.back-to-home');

    if (backToHomeLink) {
        backToHomeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche la navigation immédiate

            // Ajoute la classe pour déclencher l'animation de slide vers le bas
            document.body.classList.add('slide');

            // Redirige vers la page d'accueil après la durée de la transition (1s)
            setTimeout(function() {
                window.location.href = backToHomeLink.getAttribute('href');
            }, 300); // 1000ms correspond à la durée de la transition CSS
        });
    }
    const plats = document.querySelectorAll('.plat');

    plats.forEach(plat => {
        plat.addEventListener('click', function() {
            const like = this.querySelector('.like');
            if (!like.classList.contains('liked')) {
                like.classList.add('liked');
                like.classList.remove('like-retour');
            } else {
                like.classList.remove('liked');
                like.classList.add('like-retour');
            }
        });
    });
});
