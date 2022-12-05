import { sequelize } from '../db/sequelize/sequelize-db.js';
import DataTypes from 'sequelize';

export const PostModel = sequelize.define(
    'post',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
        },
        content: {
            type: DataTypes.STRING,
            unique: true,
        },
        userId: {
            type: DataTypes.INTEGER,
        },
    },
    {}
);
