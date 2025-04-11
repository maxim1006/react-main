/**
 * @param remoteEntryUrl - url to load remoteEntry.js.
 * @param remoteName - var name in window where set value of whole js module after load js.
 *      It is equals to ModuleFederationPlugin.library.name.
 * @param exposeKey - key from ModuleFederationPlugin.exposes but without ./ prefix.
 */
export interface LoadRemoteModuleFederationOptions {
    global: string;
    url: string;
    exposeKey: string;
}
