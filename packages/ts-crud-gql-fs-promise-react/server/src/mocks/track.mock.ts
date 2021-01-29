export const TrackMock = () => ({
    id: () => '123',
    title: () => 'TrackMock',
    author: () => ({
        name: 'Max',
        photo: 'https://avatars.githubusercontent.com/u/3056353?v=4',
    }),
    thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Dummy+image',
    length: 120,
    modulesCount: 20,
});
