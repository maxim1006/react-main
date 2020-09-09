import localStrategy from 'passport-local';
import bcrypt from 'bcrypt';

export default (passport, getUserByEmail, getUserById) => {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email);

        if (!user) {
            // arguments: error, user found
            return done(null, false, { message: `No user with email: ${email}` });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: `Password incorrect` });
            }
        } catch (error) {
            done(error);
            console.log('error ', error);
        }
    };

    passport.use(
        new localStrategy(
            {
                usernameField: 'email'
            },
            authenticateUser
        )
    );

    // сериализуем в сессии юзера
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => done(null, getUserById(id)));
};
