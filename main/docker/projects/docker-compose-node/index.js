const app = require("express")();

app.get("/", (req, res) => {res.json("Docker is cool!")});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`express is running on port ${port}`))