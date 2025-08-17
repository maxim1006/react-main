const siteUrl = 'http://localhost:8080/users?id=5123';

const url = new URL(siteUrl);
console.log({
    url,
    searchParams: Object.fromEntries(new URLSearchParams(url.searchParams).entries()),
});
