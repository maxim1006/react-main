import { SimpleMap } from '../../models/simple-map.model';

export default function<T>(data: SimpleMap<T>) {
    return Object.keys(data ? data : {}).map(key => data[key]);
}
