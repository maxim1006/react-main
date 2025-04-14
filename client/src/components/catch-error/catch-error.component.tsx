import React, { memo, FC, useEffect } from 'react';
import cn from 'classnames';

type CatchErrorProps = {};

const CatchError: FC<CatchErrorProps> = () => {
    useEffect(() => {
        (async () => {
            async function _wait(ms: number) {
                return new Promise(res => setTimeout(res, ms));
            }

            async function get(num: number) {
                if (num === 0) return true;

                if (num === 1) {
                    throw new GetError('get error');
                }

                throw new Error('error');
            }

            let [error, data] = await catchError(get(0));

            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }

            // разбил на кастомную и обычную ошибку
            let [error1, data1] = await catchError(get(1));

            if (error1) {
                if (isCustomErrorGuard(error1)) console.log(error1.type);

                console.log({ error1 });
            } else {
                console.log(data1);
            }
        })();
    }, []);

    return <div className={cn('taCatchError')}>CatchError</div>;
};

export default memo(CatchError);

// Helpers
interface BaseError extends Error {
    type: CustomErrorsEnum;
    prop: unknown;
}

enum CustomErrorsEnum {
    GetError = 'GetError',
    Error2 = 'Error2',
}

class GetError extends Error {
    readonly type: CustomErrorsEnum = CustomErrorsEnum.GetError;
    public prop: string = 'Extra prop';
}

export function isCustomErrorGuard(error: Error): error is BaseError {
    return Object.values(CustomErrorsEnum).includes((error as BaseError).type);
}

async function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error | BaseError]> {
    try {
        let res = await promise;

        return [undefined, res];
    } catch (e) {
        return [e as Error];
    }
}
