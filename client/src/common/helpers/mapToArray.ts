import { SimpleMap } from '@app/models/simple-map.model';

export default function mapToArray<T>(data: SimpleMap<T>) {
    return Object.keys(data ? data : {}).map(key => data[key]);
}
