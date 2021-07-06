import { fetchPosts } from './posts';
import { fetchUserById } from './users';
import { onlyUnique } from '../../common/helpers/helpers';

// пример общего экшена
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // объединенный экшн для вызова и постов и юзеров
    // также обязательно оборачиваю егов dispatch на случай если внутренние экшены также делают диспатч
    await dispatch(fetchPosts());

    const userIds = getState().posts.map(({ userId }) => userId);
    const uniqUserIds = userIds.filter(onlyUnique);

    // тут без await так как неважно в каком порядке загрузятся комменты
    uniqUserIds.forEach(id => dispatch(fetchUserById(id)));
};
