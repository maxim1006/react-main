export default () => Promise.resolve('1');
export const Prom1 = () => Promise.reject('error');
const PromAll = () => Promise.all([Promise.resolve('all'), Promise.resolve('all1')]);
const PromAllSettled = () => Promise.allSettled([Promise.resolve('allSettled'), Promise.reject('allSettled error')]);

export { PromAll, PromAllSettled };
