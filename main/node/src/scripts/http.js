import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World1</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});