import { Sequelize } from 'sequelize';

// connect to db
export const sequelize = new Sequelize('postgres://me:password@localhost:5432/api', {
    logging: (...msg) => console.log('Sequelize ', msg),
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
