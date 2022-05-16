import type { App } from 'vue';

import { WkFileUpload } from './components';

export default {
    install: (app: App, options: { img: string } = { img: "" }) => {
        app.component("WkFileUpload", WkFileUpload);
        app.provide("specialUploadImage", options.img);
    }
}

export { WkFileUpload }