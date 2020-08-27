export function mapToUniqueElements<T>(array: T[]): T[] {
    return [...new Set(array)];
}
