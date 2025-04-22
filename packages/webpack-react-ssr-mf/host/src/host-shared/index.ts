import type { HostModuleExports } from '@max-test-mf/federated-host';
import * as context from './host-context';
import Helmet from 'react-helmet';
import { MfErrorClass } from './mf-error';

const { KNOWN_ENVS, useHost, isomorphicCache, HostComponents, MfError } = {
    KNOWN_ENVS: {
        HOSTNAME: 'HOSTNAME',
        API_URL: 'API_URL',
        SERVER_API_URL: 'SERVER_API_URL',
    },
    useHost: context.useHost,
    isomorphicCache: () => new Map<string, unknown>(),
    HostComponents: {
        HostComponent1: () => 'HostComponent1',
        HostComponent2: () => 'HostComponent2',
        Meta: Helmet,
    },
    MfError: MfErrorClass,
} satisfies HostModuleExports;

export { KNOWN_ENVS, useHost, isomorphicCache, HostComponents, MfError };
