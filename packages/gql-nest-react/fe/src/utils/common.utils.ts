const omitTypename = (key: unknown, value: unknown) => (key === '__typename' ? undefined : value);

export const commonUtilsOmitTypeName = (obj: {}) => JSON.parse(JSON.stringify(obj), omitTypename);
