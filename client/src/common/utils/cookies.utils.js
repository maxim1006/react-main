export function getCookie(cookieName) {
    const cookies = window.document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const [name, value] = cookies[i].split('=');
        if (name.trim() === cookieName) {
            return value;
        }
    }
}

export const clearCookies = document.cookie
    .split(';')
    .forEach(
        cookie =>
            (document.cookie = cookie
                .replace(/^ +/, '')
                .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    );
