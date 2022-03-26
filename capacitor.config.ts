import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.evanlanglais.huskythonios',
    appName: 'HuskyTHON',
    webDir: 'dist',
    bundledWebRuntime: false,
    ios: {
        scheme: 'HuskyTHON'
    }
};

export default config;
