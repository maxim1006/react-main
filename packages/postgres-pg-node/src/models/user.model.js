import { sequelize } from '../db/sequelize/sequelize-db.js';
import DataTypes from 'sequelize';

export const UserModel = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        // это не обязательно так как https://sequelize.org/docs/v6/core-concepts/model-basics/#table-name-inference
        // tableName: 'users',
    }
);
