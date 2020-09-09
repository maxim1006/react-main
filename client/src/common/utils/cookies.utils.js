export function getCookie(cookieName) {
    const cookies = window.document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const [name, value] = cookies[i].split('=');
        if (name.trim() === cookieName) {
            return value;
        }
    }
}
