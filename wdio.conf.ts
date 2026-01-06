import {androidCaps} from './config/capabilities/android'
import {iosCaps} from './config/capabilities/ios'

type Platform = 'android' | 'ios'

const platform = (process.env.PLATFORM ?? 'android') as Platform

const capabilitiesMap = {
    android: androidCaps,
    ios: iosCaps
}

if (!capabilitiesMap[platform]) {
    throw new Error(`Unsupported PLATFORM: ${platform}`)
}

export const config: WebdriverIO.Config = {
    

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,

    specs: [
        "./test/specs/**/*.ts"
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [capabilitiesMap[platform]],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
