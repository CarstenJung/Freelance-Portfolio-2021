import gsap from "gsap";

gsap.fromTo('.cookieConsent', {opacity: 0}, {opacity: 1, duration: 3});

const storageType = localStorage;
const consentPropertyName = 'cookieConsent';

const couldShowPopup = () => !storageType.getItem(consentPropertyName);

const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if (couldShowPopup()) {
        const cookieConsent = document.querySelector('.cookieConsent');
        cookieConsent.style.display = 'block';
        cookieConsent.addEventListener('click', () => {
            saveToStorage();
            cookieConsent.style.display = 'none';
        });
    } else {
        document.querySelector('.cookieConsent').style.display = 'none';
    }
}

