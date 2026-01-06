// Telegram Mini App adaptation (если понадобится)
document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.expand();
        Telegram.WebApp.disableVerticalSwipes();
    }
});