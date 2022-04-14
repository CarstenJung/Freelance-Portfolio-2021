/* const storageType = localStorage;
const consentPropertyName = 'cookieConsent';

const couldShowPopup = () => !storageType.getItem(consentPropertyName);

const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if (couldShowPopup()) {
        const consent = confirm('This website uses cookies to enhance your experience. By continuing, you agree to the use of cookies.');
        if (consent) {
            saveToStorage();
        }
    }
}

 */