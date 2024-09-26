document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.createElement('div');
    cookieBanner.id = 'cookie-banner';
    cookieBanner.innerHTML = `
        <div class="cookie-content">
            <p>Nous utilisons des cookies pour améliorer votre expérience.<br> En continuant à naviguer sur ce site,<br>vous acceptez notre utilisation des cookies.</p>
            <div>
                <button id="accept-cookies">Accepter</button>
                <button id="decline-cookies">Refuser</button>
            </div>
        </div>
    `;
    document.body.appendChild(cookieBanner);

    const acceptCookiesButton = document.getElementById('accept-cookies');
    acceptCookiesButton.addEventListener('click', () => {
        document.cookie = "cookiesAccepted=true; max-age=" + 60*60*24*30 + "; path=/";
        cookieBanner.style.display = 'none';
        
        document.getElementById('map-container').innerHTML = `
            <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25722.878572397705!2d-1.1034073947810215!3d49.08440127774649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480b9571a3c5d3ef%3A0x5545e971c607efbc!2sLe%20Comptoir%20de%20Gourfaleur!5e1!3m2!1sfr!2sfr!4v1722377193224!5m2!1sfr!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    });

    const declineCookiesButton = document.getElementById('decline-cookies');
    declineCookiesButton.addEventListener('click', () => {
        document.cookie = "cookiesAccepted=false; max-age=" + 60*60*24*30 + "; path=/";
        cookieBanner.style.display = 'none';
    });

    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookiesAccepted=true'))) {
        cookieBanner.style.display = 'none';
        
        document.getElementById('map-container').innerHTML = `
            <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25722.878572397705!2d-1.1034073947810215!3d49.08440127774649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480b9571a3c5d3ef%3A0x5545e971c607efbc!2sLe%20Comptoir%20de%20Gourfaleur!5e1!3m2!1sfr!2sfr!4v1722377193224!5m2!1sfr!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }
});