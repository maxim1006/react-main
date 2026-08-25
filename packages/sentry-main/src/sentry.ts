import * as Sentry from '@sentry/react';

const dsn = import.meta.env.VITE_SENTRY_DSN;

Sentry.init({
    dsn: dsn || undefined,
    enabled: Boolean(dsn),
    tracesSampleRate: 1.0,
});

if (!dsn) {
    // Explicit hint in container logs that Sentry DSN is missing.
    console.warn('VITE_SENTRY_DSN is empty, Sentry SDK is disabled.');
}

export interface ISentryWebhookData {
    projectId: number | string;
    projectName: string;
    mrIid?: number | string;
    flowType: string;
    userEmail?: string;
}

/**
 * Простой helper для breadcrumb, чтобы вызывать единообразно.
 */
export function addSentryBreadcrumb(
    message: string,
    level: Sentry.SeverityLevel = 'info',
    context?: string,
    defaultContext = 'app'
): void {
    Sentry.addBreadcrumb({
        category: context || defaultContext || 'app',
        message,
        level,
    });
}

/**
 * Отправляет событие в Sentry:
 * - captureException, если передан error
 * - captureMessage, если error нет
 */
export function sendToSentry(data: ISentryWebhookData, error?: Error): void {
    try {
        const { projectId, projectName, mrIid, flowType, userEmail } = data;

        // Если нет mrIid - не отправляем
        if (!mrIid) return;

        const title = `${projectName} | MR ${mrIid}`;
        const fingerprint = [`project-${projectId}-mr-${mrIid}`];

        if (error) {
            Sentry.captureException(error, (scope) => {
                scope.setTransactionName(userEmail ? `${flowType} | ${userEmail}` : flowType);
                scope.setFingerprint(fingerprint);
                scope.setTag('flow_type', flowType);
                scope.setTag('project_id', String(projectId));
                scope.setTag('mr_iid', String(mrIid));

                scope.addEventProcessor((event) => {
                    if (event.exception?.values) {
                        event.exception.values[0] = {
                            ...event.exception.values[0],
                            type: title,
                        };
                    }
                    return event;
                });

                return scope;
            });
        } else {
            Sentry.captureMessage(title, (scope) => {
                scope.setTransactionName(userEmail ? `${flowType} | ${userEmail}` : flowType);
                scope.setFingerprint(fingerprint);
                scope.setLevel('info');
                scope.setTag('flow_type', flowType);
                scope.setTag('project_id', String(projectId));
                scope.setTag('mr_iid', String(mrIid));
                return scope;
            });
        }
    } catch (e) {
        console.error('Ошибка при отправке в Sentry:', e);
    }
}

/**
 * Пример 1: breadcrumb (действие пользователя).
 */
export function exampleSentryBreadcrumb(): void {
    addSentryBreadcrumb('User clicked "Create release"', 'info', 'ui');
}

/**
 * Пример 2: отправка информационного события в Sentry.
 */
export function exampleSentryMessage(): void {
    sendToSentry({
        projectId: 42,
        projectName: 'release-dashboard',
        mrIid: 128,
        flowType: 'manual-release',
        userEmail: 'dev@example.com',
    });
}

/**
 * Пример 3: отправка ошибки в Sentry.
 */
export function exampleSentryError(): void {
    const error = new Error('Release pipeline failed');

    sendToSentry(
        {
            projectId: 42,
            projectName: 'release-dashboard',
            mrIid: 128,
            flowType: 'manual-release',
            userEmail: 'dev@example.com',
        },
        error
    );
}

export { Sentry };
