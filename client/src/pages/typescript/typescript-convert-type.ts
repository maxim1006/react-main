// прмер ConvertType как убирает значения и добавляет вместо второго аргумента то что надо переделать в UnFormalizedParams
const REQUIRED_PARAMS_KEYS = ['uuid', 'uuid1', 'event_json'] as const;

type TPossibleParamsKeys = (typeof REQUIRED_PARAMS_KEYS)[number];

type TFormalizedParams = {
    [key in TPossibleParamsKeys]: string;
};

type TCounterReachGoalPayload = {
    eventType: 'reachGoal';
    params: Record<string, TFormalizedParams>;
};

type TParams = {
    [key in TPossibleParamsKeys]: key extends 'event_json' ? Record<string, unknown> : string;
};

type UnFormalizedParams = {
    [key in keyof TParams]?: key extends 'event_json'
        ? TParams[key] | null | undefined
        : TParams[key] | null | undefined | number;
};

type TReachGoalGroupPayload = ConvertType<Omit<TCounterReachGoalPayload, 'eventType'>, 'params', UnFormalizedParams>;

type ConvertType<T, K extends keyof T, N> = Pick<T, Exclude<keyof T, K>> & { [Key in K]: N };

const _a: TReachGoalGroupPayload = {
    params: {
        uuid: 1,
        event_json: {
            a: 1,
        },
    },
};
