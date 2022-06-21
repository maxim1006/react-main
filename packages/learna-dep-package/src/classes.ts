export class Classes {
    static settings: Record<string, unknown> = {}

    static setSettings(settings: Record<string, unknown>): void {
        Classes.settings = settings;
    }
}
