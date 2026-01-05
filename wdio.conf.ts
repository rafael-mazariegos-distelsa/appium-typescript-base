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
    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android Device",
        "appium:udid": "R5CY13Q25XE",
        "appium:appPackage": "com.distelsa.maxgt",
        "appium:appActivity": ".MainActivity",
        "appium:noReset": true
    }],

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
