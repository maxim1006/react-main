import express from 'express';
import bcrypt from 'bcrypt';

// пример как безопасно хранить пароли
const loginRouter = express.Router();

const users: { username: string; password: string }[] = [];

loginRouter.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        users.push({ username, password: hashedPassword });

        res.json(users);
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

loginRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = users.find(i => (i.username = username));

        if (!user) {
            res.status(400).send('User Not Found!');
            return;
        }

        const loginSuccess = await bcrypt.compare(password, user.password);

        loginSuccess ? res.send('LoggedIn') : res.send('Not Valid User!');
    } catch (e) {
        console.log(e.toString());
    }
});

export { loginRouter };
