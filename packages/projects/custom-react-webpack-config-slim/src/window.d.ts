import { PortletPreferencesModel } from './models/portlet-preferences.model';

declare global {
    interface Window {
        portlets: { [key: string]: PortletPreferencesModel };
    }
}
