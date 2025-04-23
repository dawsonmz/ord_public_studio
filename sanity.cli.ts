import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'vh55mhjn',
        dataset: 'production'
    },
    studioHost: 'ord',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
});
