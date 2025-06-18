import { createAction } from '@reduxjs/toolkit';

export const incrementAction = createAction('INCREMENT');

export const decrementAction = createAction('DECREMENT');

// у экшенов уже есть тайп предикаты
// decrementAction.match(action);
